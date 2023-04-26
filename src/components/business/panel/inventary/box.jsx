import react, { useEffect, useState } from 'react';
import {AiFillDelete,AiOutlineEdit, AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams,  } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import ModalNewProduct from '../../modals/addNewProduct';
import ProductDetails from './product';
import { MdNavigateBefore } from 'react-icons/md'; 
import BoxLoading from './loading/boxLoading';
import RequestSeccion from '../../requests/requestSeccion';

export default function Box(props){
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const business = props.business;
    const box = useSelector(store => store.BoxById);
    const loading = useSelector(store => store.loadingBoxById);
    const active = useSelector(store => store.activeModal);
    const [showProduct, setShowProduct] = useState(null);
    console.log(params.name)
    useEffect(() => {
        document.querySelector("body").style.overflowY = "auto";
        dispatch(actions.AxiosGetBoxById(business.id,params.name));  
        
    }, [])
    return (
        loading == true || box == null ? <BoxLoading />:
        box == 'request' ? <RequestSeccion />
        :
        <div>
            <div className='title'>
                <h3>
                    {box.nameBox}
                </h3>
            </div>
            <div className='header-options-back'>
                <button onClick={() => navigate('/business/inventary')}><MdNavigateBefore className="icon" /> Regresar    </button>
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
                                <th><span className="ti">Cantidad</span></th> 
                                <th className='responsive-h'><span className="ti ">Valor/Unidad</span></th> 
                                <th className='responsive-h'><span className="ti ">Valor/Total</span></th> 
                                <th className='responsive-h'><span className="ti">Estado</span></th>
                                <th className='responsive-h'></th> 
                                <th className='responsive-h'></th> 
                            </tr> 
                        </thead>
                        <tbody>
                        {
                            !box.productos.length ? 
                                    <tr> 
                                        <td><span className="date">No hay productos</span></td> 
                                        <td>-</td> 
                                        <td>- - -</td> 
                                        <td>- - -</td>
                                        <td>- - -</td>
                                        <td><span >- - -</span></td>
                                        <td>- - - </td>
                                    </tr>
                            :
                            box.productos.map((item, i) => {
                                return (
                                    <tr key={item.id} onClick={(i) =>
                                        {
                                            document.querySelector("body").style.overflowY = 'hidden';
                                            setShowProduct(true);
                                            dispatch(actions.ShowGetProductToInventaryModal(item));
                                            const productEspecifity = document.querySelector("#productEspecifity").classList.toggle("info-categoryActive");
                                        }} > 
                                        <td key={1} >
                                            <img src={item.imgProfile} alt="" />
                                            <span className="date">{item.nameProduct}</span>        
                                        </td> 
                                        <td >{item.cantidadActual}</td> 
                                        <td className='responsive-h' key={3}>{item.price} COP</td> 
                                        <td className='responsive-h' key={4}>{item.price * item.cantidadActual} COP</td>
                                        <td className='responsive-h'>
                                            {
                                                item.cantidadActual == 0 ?
                                                <span className="state danger">Agotado</span>
                                                : item.cantidadActual <= 10 ?
                                                <span className="state alert">Pendiente</span>
                                                :<span className="state check">Disponible</span> 
                                            }
                                        </td>
                                        <td className='responsive-h'><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                        <td className='responsive-h'><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                                    </tr>
                                )
                            })
                        } 
                        </tbody>
                    </table>
                </div>
                <div className='info-category' id="productEspecifity" >
                    {
                        !active ? null : <ProductDetails business={business} />
                    }
                    
                </div>
                <Routes>
                    <Route path="newProduct" element={<ModalNewProduct business={business} box={box} />} />
                </Routes>
        </div> 
    )
}