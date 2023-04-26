import react, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import Estadistic from './estadistica';


export default function Watch(props){
    const business = props.business;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const service = useSelector(store => store.service);
    const LoadingService = useSelector(store => store.LoadingService);

    useEffect(() => {
        dispatch(actions.axiosGetService(business.id,params.service, true))
    }, [params.servcieId])
    return (
        LoadingService == true || !service ?  <h1>Cargando...</h1> :
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration/services')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Cuenta</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>{service.name}</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <Estadistic service={service} />
                                <div className='lade'>
                                    <strong className='clare'>
                                        Algunas opciones
                                    </strong>
                                    <nav>
                                        <ul>
                                            <li onClick={() => {
                                                navigate('addService');
                                            }}><span>Registrar pago</span></li>
                                            <li onClick={() => {
                                                navigate('/business/bills/count/services');
                                            }}><span>Ver historial de pagos</span></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Movimientos económicos</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='list-factures'>
                                {
                                    !service.pagos.length ? <h1>No hay pagos realizados</h1> :
                                    service.pagos.map((pago) => {
                                        return (
                                            <div className='facture-small' id="facture-id">
                                                <div className='header'>
                                                    <span>{pago.fecha.split('T')[0]}</span>
                                                </div>
                                                <div className='info-facture'>
                                                    <div className='info'>
                                                        <img className='logo-business' src={business.profileLogo} alt="" />
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <span className='title'>valor</span>
                                                                    </td>
                                                                    <td><h1>{new Intl.NumberFormat().format(pago.valor)} <span>COP</span></h1></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span className='title'>Metodo de pago</span>
                                                                    </td>
                                                                    <td><strong className='str'>{pago.metodo}</strong></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span className='title'>Facturado</span>
                                                                    </td>
                                                                    <td><strong className='fecha'>{pago.fecha.split('t')[0]}</strong></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span className='title'>
                                                                            Validado por
                                                                        </span>
                                                                    </td>
                                                                    <td><img src="" alt="JDS LOGO" /></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className='fotter'>
                                                        <button>Descargar PDF</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    )
}