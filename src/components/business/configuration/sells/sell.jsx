import react, { useEffect } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
export default function Sells(props){
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
                    <h3>Ventas</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Registra todas tus ventas</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <div className='lade line'>
                                    <strong>Registra todas tus ventas al finalizar el día.</strong>
                                    <h2>Panel de ventas</h2>
                                    <span>
                                        Por favor, regístra tus ventas con precación, la idea es que lleves 
                                        un control detallado y preciso de las finanzas de la empresa.
                                    </span>
                                </div>
                                <div className='lade'>
                                    <strong className='clare'>
                                        Algunas opciones
                                    </strong>
                                    <nav>
                                        <ul>
                                            <li onClick={() => {
                                                navigate('new');
                                            }}><span>Registrar ventas</span></li>
                                            <li onClick={() => {
                                                navigate('/business/sells');
                                            }}><span>Ver historial de ventas</span></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
               
            </div>
        </div>
    )
}