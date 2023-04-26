import react, { useEffect } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
export default function Services(props){
    const business = props.business;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const allSer = useSelector(store => store.servicesAll);
    const loadingAll = useSelector(store => store.loadingServicesAll);

    useEffect(() => {
        dispatch(actions.AxiosGetServices(business.id, true));

    })
    return (
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Pago de servicios mensuales</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Configuración de servicios</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <div className='lade line'>
                                    <strong>Agregar servicio a la lista</strong>
                                    <h2>0.00 COP mensuales</h2>
                                    <span>
                                        Agregue las responsabilidades economicas que debe atender
                                        mensualmente en su negocio. Por favor, sea cuidadoso con la información
                                    </span>
                                </div>
                                <div className='lade'>
                                    <strong className='clare'>
                                        Algunas opciones
                                    </strong>
                                    <nav>
                                        <ul>
                                            <li onClick={() => {
                                                navigate('addService');
                                            }}><span>Agregar nueva cuenta de servicios</span></li>
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
                            <h1>Cuentas actuales</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='container-list-services-count'>
                                <div className='contenedor-y'>
                                    <div className='title-business'>
                                        <img src={business.profileLogo} alt="imagendeperfil" />
                                        <h3>{business.name}</h3>
                                    </div>
                                    <div className='list'>
                                        {
                                            loadingAll == true || !allSer ? <h1>Cargando...</h1>:
                                            !allSer.searchServices.length ?
                                                <h3>No hay cuentas de servicio creadas hasta el momento.</h3> 
                                            :
                                            allSer.searchServices.map((servi) => {
                                                return (
                                                <div className='item-list' onClick={() => {
                                                    navigate(`watch/${servi.id}`)
                                                }}>
                                                    <span>{servi.name}</span><br />
                                                    <strong>{servi.dayPay} de cada mes</strong>
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
            </div>
        </div>
    )
}