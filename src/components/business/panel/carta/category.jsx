import react, { useEffect, useState } from 'react';
import {AiFillDelete,AiOutlineEdit, AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams,  } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import { MdNavigateBefore } from 'react-icons/md'; 
import ProductoInfo from './plus/productoInfo';
import NewProductMenu from './plus/CartaNewProduct';

export default function Category(props){
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const business = props.business;
    const category = useSelector(store => store.categoryById);
    const loading = useSelector(store => store.loadingCategoryById);
    const active = useSelector(store => store.activeModalMenu)
    const [showProduct, setShowProduct] = useState(null);
    console.log(params.name)
    useEffect(() => {
        document.querySelector("body").style.overflowY = "auto";
        dispatch(actions.AxiosGetCategoryByID(params.name, business.id));  
        
    }, [])
    return (
        loading == true || category == null ? <div><img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="" /></div>:
        <div>
            <div className='title'>
                <h3>
                    {category.nameCategory}
                </h3>
            </div>

            <div className='header-options-back'>
                <button onClick={() => navigate('/business/menu')}><MdNavigateBefore className="icon" /> Regresar    </button>
            </div>
            <div className='top-header-bottons'>
                    <div className='left'>
                        <label htmlFor="number_elements">Elementos</label>
                        <select name="" id="number_elements">
                            <option value=""> 40</option>
                            <option value=""> 60</option>
                            <option value=""> 80</option>
                            <option value=""> 100</option>
                        </select>
                    </div>
                    <div className="right">
                        <form>
                            <input type="text" placeholder='Nro referencia o nombre del producto' />
                        </form>

                        <button className="btn create" onClick={() => {
                            navigate('newProduct');
                        }}><AiOutlinePlus className="icon"/> Producto</button>

                    </div>
                </div>
                <div className='container-inventary'>
                    <table className="content-table">
                        <thead className="top-titles"> 
                            <tr> 
                                <th><span className="ti">Producto</span></th> 
                                <th><span className="ti">Precio venta</span></th> 
                                <th><span className="ti">description</span></th> 
                                <th><span className="ti">Estado</span></th>
                                <th></th> 
                                <th></th> 

                            </tr> 
                        </thead>
                        <tbody>
                        {
                            !category.productos.length ? 
                                    <tr> 
                                        <td><span className="date">No hay productos</span></td> 
                                        <td>-</td> 
                                        <td>- - -</td> 
                                        <td>- - -</td>
                                        <td>- - -</td>
                                        <td><span >- - -</span></td>
                                    </tr>
                            :
                            category.productos.map((item, i) => {
                                return (
                                    <tr key={item.id} onClick={(i) =>
                                        {
                                            setShowProduct(true);
                                            dispatch(actions.ShowGetProductToMenuModal(item));
                                            const productEspecifity = document.querySelector("#productEspecifity").classList.toggle("info-categoryActive");
                                        }} > 
                                        <td key={1} >
                                            <img src={item.imgItem} alt="" />
                                            <span className="date">{item.nameItem.slice(0,30)+'...'}</span>        
                                        </td> 
                                        <td key={2}>{item.price}</td> 
                                        <td key={3}>{item.details.slice(0,30)+'...'}</td> 
                                        <td>
                                            {
                                                item.state == 'pending' ?
                                                <span className="state alert">Pendiente</span>
                                                : item.state == 'notavailable' ?
                                                <span className="state danger">No disponible</span>
                                                :<span className="state check">Disponible</span> 
                                            }
                                        </td>
                                        <td><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                        <td><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                                    </tr>
                                )
                            })
                        } 
                        </tbody>
                    </table>
                </div>
                <div className='info-category' id="productEspecifity" >
                    {
                        !active ? null : <ProductoInfo business={business} />
                    }
                    
                </div>
                <Routes>
                    <Route path="/newProduct" element={<NewProductMenu business={business} box={category}/>} />
                </Routes>
        </div> 
    )
}