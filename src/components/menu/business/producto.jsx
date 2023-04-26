import react, { useEffect } from 'react';

import {AiOutlineClose} from 'react-icons/ai';
import * as actions from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Producto(props){
    const storeP = props.storeP;
    const mesa = props.mesa;
    const dispatch = useDispatch();
    const producto = useSelector(store => store.productoQr);
    const loading = useSelector(store => store.loadingProductoQR);
    const params = useParams();
    function addProductToCar(itemId, cantidad){
        const body = {  
            QRId: mesa.id,
            itemId,
            cantidad
        }
        axios({
            method:'post',
            url: '/car/addProducto',
            data: body
            
        }).then((response) => {
            if(response.status == 200){
                dispatch(actions.AxiosGetMesa(storeP.id, params.ref, false))
            }    
        })
        .catch((err) => {
                console.log(err);
            if(err.response.status == 404){
                console.log('Error del 404, aqui.');

            }else if(err.response.status == 401){
                console.log('Error del 404, aqui.')
                
            }
        });
    }
    return (
            loading != false || !producto ? <h1>Cargando...</h1> :
        
        <div>
            <div className='close-div'>
                    <button className='close' onClick={() => {
                        document.querySelector("#showProduct").classList.toggle('show-product-active');
                    }}><AiOutlineClose /></button>
                </div>
                <div className='container-product-to-show'>
                    <div className='container-img'>
                        <img src={producto.imgItem} alt="" />
                    </div>
                    <div className='container-description-product'>
                        <div className='title'>
                            <h1>{producto.nameItem}</h1>
                            <div className='price'>
                                <h2>
                                    {producto.price} <span>COP</span>
                                </h2>
                                <span className='descuento'>{producto.descuento}% descuento</span>
                            </div>
                            <div className='howmany'>
                                <span>Cantidad</span>
                                <input type="number" className='many' defaultValue={1}  />
                            </div>
                        </div>
                        <div className='description'>
                            <div className='title'>
                                <strong>Descripción</strong>
                            </div>
                            <div className='des'>
                                <span>{producto.details}</span>

                            </div>
                        </div>
                        <div className='adition'>
                            <ul>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </div>
                        {
                            mesa.car.length && mesa.car[0].items.filter(item => item.id == producto.id).length >= 1 ?
                            <div className='add'>
                                <button className="update" onClick={() => {
                                    addProductToCar(producto.id, 2);
                                }
                                }>Seleccionado</button>
                            <h2>34.000 <span>COP</span></h2>
                            </div>
                            :
                            <div className='add'>
                            <button onClick={() => {
                                addProductToCar(producto.id, 2);
                            }
                            }>Agregar</button>
                            <h2>34.000 <span>COP</span></h2>
                        </div>
                        }
                        
                    </div>
                </div>
        </div>
    )
}