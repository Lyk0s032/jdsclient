import react, { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import ProductDetails from './product';
import { AiFillDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineCodeSandbox, AiOutlineSetting} from 'react-icons/ai';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ModalNewProduct from '../../modals/addNewProduct';
import ModalNewCategory from '../../modals/addNewCategory';
import { MdNavigateBefore } from 'react-icons/md'; 

export default function PanelInventary(props){
    const navigate = useNavigate();
    const business = props.business;
    const inventary = props.inventary;
    console.log(inventary);
    useEffect(() => {
        document.querySelector("body").style.overflowY = "auto";
    })
    return (
        <div>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>
                        Inventario
                    </h3>
                </div>
                
                <div className='box-category-inventary'>
                    <h1 className='title-h1'>Tus cajas de inventario</h1>
                    <div className='scroll'>
                        {
                            inventary.inventario.map((item,i) => {
                                return (
                                    <div className='box-inventary' key={i} onClick={() =>
                                        {
                                            navigate('box/'+item.nameBox)
                                        }}>
                                        <div className="header-container">
                                            <h3>{item.nameBox}</h3>
                                            <h1>
                                                {
                                                    !item.productos.length ? <span>No hay productos registrados</span>
                                                    :
                                                    inventary.valores[i]+' COP'
                                                }</h1>
                                            <AiOutlineCodeSandbox className='icon' /><strong>{item.type}</strong>
                                        </div>
                                        <div className='container'>
                                           <span>Nro de diferentes existencias: <strong>{item.productos.length}</strong></span><br />
                                           <span>Última actualización: <strong>{item.updatedAt.split('T')[0]}</strong></span>
                                            <br /><br />
                                           <span>Estado <strong>Todo en orden</strong></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
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
                        <label htmlFor="">Categorias</label>
                        <select name="" id="category_id">
                            <option value="">Refrescos</option>
                            <option value="">Verduras</option>
                            <option value="">Carnes</option>
                            <option value="">Otros</option>
                        </select>
                        <button className="btn"  onClick={() => {
                            navigate('category/newCategory');
                        }} > <AiOutlinePlus className="icon"/> Categoría</button>

                    </div>
                </div>
                <div className='container-inventary'>
                    <table className="content-table">
                        <thead className="top-titles"> 
                            <tr> 
                                <th className='responsive-h'><span className="ti">Último movimiento</span></th> 
                                <th className='responsive-h'><span className="ti">Nro Referencia</span></th> 
                                <th><span className="ti">Existencia</span></th> 
                                <th><span className="ti">Cantidad</span></th> 
                                <th><span className="ti">V/Unidad</span></th>
                                <th><span className="ti">V/Total</span></th>
                                <th className='responsive-h'><span className="ti">Estado</span></th>
                                <th className='responsive-h'></th> 
                                <th className='responsive-h'></th> 

                            </tr> 
                        </thead> 
                            <tr> 
                                <td className='responsive-h'><span className="date">10/03/23</span></td> 
                                <td className='responsive-h'>1</td> 
                                <td>Leche Liquida</td> 
                                <td>12</td>
                                <td>12.500</td>
                                <td><span >350.000</span></td>
                                <td className='responsive-h'><span className="state danger">Agotado</span></td>
                                <td className='responsive-h'><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                <td className='responsive-h'><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                            </tr>
                            <tr> 
                                <td className='responsive-h'><span className="date">10/03/23</span></td> 
                                <td className='responsive-h'>1</td> 
                                <td>Leche Liquida</td> 
                                <td>12</td>
                                <td>12.500</td>
                                <td><span >350.000</span></td>
                                <td className='responsive-h'><span className="state danger">Agotado</span></td>
                                <td className='responsive-h'><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                <td className='responsive-h'><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                            </tr>
                            <tr> 
                                <td className='responsive-h'><span className="date">10/03/23</span></td> 
                                <td className='responsive-h'>1</td> 
                                <td>Leche Liquida</td> 
                                <td>12</td>
                                <td>12.500</td>
                                <td><span >350.000</span></td>
                                <td className='responsive-h'><span className="state danger">Agotado</span></td>
                                <td className='responsive-h'><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                <td className='responsive-h'><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                            </tr>
                            <tr> 
                                <td className='responsive-h'><span className="date">10/03/23</span></td> 
                                <td className='responsive-h'>1</td> 
                                <td>Leche Liquida</td> 
                                <td>12</td>
                                <td>12.500</td>
                                <td><span >350.000</span></td>
                                <td className='responsive-h'><span className="state danger">Agotado</span></td>
                                <td className='responsive-h'><button><AiOutlineEdit className="icon"/> Agregar</button></td>
                                <td className='responsive-h'><button><AiOutlineSetting className="icon"/> Opciones</button></td>
                            </tr>
                    </table>
                </div>
                <Routes>
                    <Route path="category/newProduct" element={<ModalNewProduct business={business}/>} />
                    <Route path="category/newCategory" element={<ModalNewCategory business={business} />} />
                </Routes>
        </div>
    )
}