import react, { useEffect } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import CarSells from './car/car';
import ProductToCar from './car/product';
export default function NewSell(props){
    const business = props.business;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Nueva venta</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Nuevo carrito</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <div className='lade line'>
                                    <strong>Valor</strong>
                                    <h2>0 COP</h2>
                                    <span>
                                        Puedes registrar esta venta como desees.
                                    </span>
                                </div>
                                <div className='lade'>
                                    <span className='see' onClick={() => {
                                        document.querySelector("#see-car").classList.toggle('see-car-active');
                                    }}>Ver productos en el carrito</span><br /><br />
                                    <button className='btn ok'>Confirmar compra</button>
                                    <button className='btn cancel'>Cancelar carrito</button><br /><br />
                                    

                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>


                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Hamburguesas</h1>
                        </div>
                        <div className='list-products'>
                            <div className='items' onClick={() => {
                                document.querySelector("#see-product").classList.toggle('see-product-active');
                            }}>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='img'>
                                    <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                                </div>
                                <div className='info-small'>
                                    <h3>Hamburguesa 1</h3>
                                    <strong>240.000 COP</strong>
                                </div>
                            </div>

                        </div>
                    </div>
 
                </div>
               
            </div>
            <div className='see-product' id="see-product">
                <ProductToCar />
            </div>

            <div className='see-car' id="see-car">
                <CarSells />
            </div>
        </div>
    )
}