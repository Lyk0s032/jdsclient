import axios from 'axios';
import react from 'react';
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'; 
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/actions';


export default function List(props){
    const mesa = props.mesa;
    const storeP = props.storeP;
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
    }, []);
    
    // Realizar pedido
    function HandleUpdateCar(car){
        axios.put('/car/update/state/'+car)
        .then((res) => {
            if(res.status == 201){
                dispatch(actions.AxiosGetMesa(storeP.id, params.ref, false))
            }
        }).catch(err => console.log(err))
    }
    // Eliminar elemento del carrito.
    function HandleDestroyElement(car, item){
        axios.delete('/chosee/delete/'+car+'/'+item)
        .then((res) => {
            if(res.status == 200){
                dispatch(actions.AxiosGetMesa(storeP.id, params.ref, false))
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className='counter-pay'>
            <div className='close'>
                <button onClick={() => {
                    document.querySelector('#finance-count').classList.toggle('watch-count-active');
                    document.querySelector('body').style.overflowY = "auto";

                }}>
                    <AiOutlineClose className='icon' />
                </button>
            </div>
            <div className='header'>
                <div className='price'>
                    <strong>Valor actual</strong>
                    <h1>{new Intl.NumberFormat().format(mesa.car[0].price)} <span>COP</span></h1>
                    
                    <div className='button'>
                        <button onClick={() => {
                            HandleUpdateCar(mesa.car[0].id);
                        }}>Realizar pedido</button>
                    </div>
                </div>
            </div>
            <div className='table-products'>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                mesa.car[0].items.map((item) => {
                                    return (
                                    <tr>
                                        <td><img className='img-item' src={item.imgItem} alt="" />{item.nameItem}</td>
                                        <td>{item.chosee.cantidad}</td>
                                        <td>{new Intl.NumberFormat().format(item.price)} COP</td>
                                        <td>
                                            {
                                               item.chosee.estado == 'waiting' ? 'Preparando...' 
                                               : item.chosee.estado == 'seleccionado' ? 'Seleccionado'
                                               : 'Otro...'
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.chosee.estado == 'seleccionado' ? 
                                                    <button onClick={() => HandleDestroyElement(mesa.car[0].id, item.id)}><AiOutlineCloseCircle className='icon' /></button>
                                                : null
                                            }
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                            
                            
                        </tbody>
                        <thead className='total'>
                        <tr>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th><h1>{new Intl.NumberFormat().format(mesa.car[0].price)} <span>COP</span></h1></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}