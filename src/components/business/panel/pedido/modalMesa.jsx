import react, { useEffect } from 'react';
import * as actions from '../../../store/actions/actions';
import * as cliente from '../../../funciones';
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineClose, AiOutlineFieldTime, AiOutlineHistory, AiOutlineHome, AiOutlinePoweroff, AiOutlineQuestion } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ModalMesa(props){
    const business = props.business;
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const QR = useSelector(store => store.QR);
    const loadingQR = useSelector(store => store.loadingQR);

    function handleUpdateProducto(item){
        axios.put('/chosee/update/toDelivered/'+QR.car[0].id+'/'+item)
        .then((r) => dispatch(actions.AxiosGetEspecifityQR(business.id, params.ref, false)))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
        dispatch(actions.AxiosGetEspecifityQR(business.id, params.ref, true))
    }, [params.ref])
    return (
            !QR || loadingQR == true ? <div className='loadingModal'><h1>Cargando...</h1> </div>:

            QR == 404 || !QR.car.length ? 
            <div className="mesa-modal">
                {console.log(QR)}
                <div className='header-modal'>
                    <h1>Mesa </h1>
                    <button onClick={() => navigate('/business/p')}><AiOutlineClose className="icon" /></button>
                </div>
                <div className='nav-mesa'>
                    <nav>
                        <ul>
                            <li><AiOutlineHome className="icon" /></li>
                            <li><AiOutlineHistory className="icon" /></li>
                            <li><AiOutlineQuestion className="icon" /></li>
                            <li><AiOutlineHistory className="icon" /></li>
                            <li><AiOutlineHistory className="icon" /></li>

                        </ul>
                    </nav>
                </div>
                <div className='alert-mesa'>
                    <div className='style-alert'>
                        <span>
                            No esta disponible
                        </span>
                        <button>
                            <AiOutlineClose  className='icon'/>
                        </button>
                    </div>
                </div>
                <div className='info-map'>
                    <div className='container-title'>
                        <h1>
                            Información general y estado de la mesa.
                        </h1>
                    </div>                                  

                    <div className='container-general-info'>
                        <div className='left'>
                            <div className='container-cuenta-count'>
                                <span className='currently_valor'>
                                    Sin información - Estado
                                </span>
                                <h1>
                                    Esta mesa no esta en uso.
                                </h1>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="" />
                            <div className='info-table'>
                                <h1>Número {QR.nro_mesa}</h1>
                                <span>Pedido sin atender!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <div className="mesa-modal">
            {console.log(QR)}
            <div className='header-modal'>
                <h1>Mesa número {QR.id}</h1>
                <button onClick={() => navigate('/business/p')}><AiOutlineClose className="icon" /></button>
            </div>
            <div className='nav-mesa'>
                <nav>
                    <ul>
                        <li><AiOutlineHome className="icon" /></li>
                        <li><AiOutlineHistory className="icon" /></li>
                        <li><AiOutlineQuestion className="icon" /></li>
                        <li><AiOutlineHistory className="icon" /></li>
                        <li><AiOutlineHistory className="icon" /></li>

                    </ul>
                </nav>
            </div>
            <div className='alert-mesa'>
                <div className='style-alert'>
                    <span>Se ha realizado un nuevo pedido</span>
                    <button><AiOutlineClose  className='icon'/></button>
                </div>
            </div>
            <div className='info-map'>
                <div className='container-title'>
                    <h1>Información general y estado de la mesa.</h1>

                </div>
                <div className='container-general-info'>
                    <div className='complete-div-pay'>
                        <h1 className='titleH1'>Rápido, ¡Desean pagar la cuenta!</h1>
                        
                    </div>
                    <div className='left'>

                        <div className={'container-cuenta-count ' + QR.car[0].estado}>
                            <span className='used-time'><strong>Tiempo de uso aproximadamente: </strong> 30 minutos.</span><br /><br />
                            <span className='currently_valor'>Valor actual</span>
                            <h1>{new Intl.NumberFormat().format(QR.car[0].price)} <span>COP</span></h1>

                        </div>
                        {
                            QR.car[0].estado == 'iwannapay' ? 
                            <div className='form-optios'>
                                <form  onSubmit={(e) => {
                                    e.preventDefault(e);
                                    cliente.confirmPay(1,'efectivo');
                                }}>
                                    <div className='cargando' id="loadingSell">
                                       <div>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
                                            <h1>Procesando pago...</h1>
                                       </div>
                                    </div>
                                    <label htmlFor="method">Metódo de pago</label><br />
                                    <select name="method" id="method" className='select'>
                                    <option value="">Seleccionar metódo de pago</option>
                                        <option value="efectivo">Efectivo</option>
                                        <option value="nequi">Nequi</option>
                                        <option value="digital">Digítal</option>
                                        <option value="bancario">Bancario</option>

                                    </select><br />
                                    <button>Confirmar pago</button>
                                </form>
                            </div>:null
                        }
                    </div>
                    <div className='right'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="" />
                        <div className='info-table'>
                            <h1>Número {QR.nro_mesa}</h1>
                            <span>Pedido sin atender!</span>
                        </div>
                    </div>
                </div>
                <div className='divider-state-pedido'>
                    <h3>Pedidos pendientes</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unidad</th>
                                <th>Precio total</th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                QR.car[0].items.length ?
                                QR.car[0].items.filter((it) => it.chosee.estado == 'waiting').length ?
                                QR.car[0].items.map((item) => {
                                    if(item.chosee.estado == 'waiting'){
                                        return (
                                        <tr>
                                            <td><img src={item.imgItem} alt="Imagen" /> 
                                            {item.nameItem}</td>
                                            <td>{item.chosee.cantidad}</td>
                                            <td>{new Intl.NumberFormat().format(item.price)} COP</td>
                                            <td>{new Intl.NumberFormat().format(item.price*item.chosee.cantidad)} COP</td>

                                            <td>Esperando a ser entregado...</td>
                                            <td><button className='confirm' onClick={() => {
                                                handleUpdateProducto(item.id);
                                            }}>Entregar</button></td>

                                        </tr>
                                        )
                                    }
                                })
                                : <span>No hay pedidos pendientes</span>
                                : <span>No hay nada.</span>

                            }
                            
                        </tbody>
                    </table>
                </div>

                <div className='divider-state-pedido'>
                    <h3>Productos entregados</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unidad</th>
                                <th>Precio total</th>
                                <th></th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                QR.car[0].items.length ?
                                QR.car[0].items.filter((it) => it.chosee.estado == 'delivered').length ?
                                QR.car[0].items.map((item) => {
                                    if(item.chosee.estado == 'delivered'){
                                        return (
                                        <tr>
                                            <td><img src={item.imgItem} alt="Imagen" /> 
                                            {item.nameItem}</td>
                                            <td>{item.chosee.cantidad}</td>
                                            <td>{new Intl.NumberFormat().format(item.price)} COP</td>
                                            <td>{new Intl.NumberFormat().format(item.price*item.chosee.cantidad)} COP</td>

                                            <td>Entregado</td>
                                        </tr>
                                        )
                                    }
                                }) 
                                : <span>No se ha entregado ningún producto.</span>
                                : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
    )
}