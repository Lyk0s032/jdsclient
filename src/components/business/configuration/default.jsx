import react from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Default(props){
    const business = props.business;
    const navigate = useNavigate();
    return (
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Configuración de {business.name}</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h3>Configuración del negocio</h3>
                        </div>
                        <div className='lista-opciones'>
                            <nav>
                                <ul>
                                    <li onClick={() => {
                                        navigate('count');
                                    }}>
                                        <span>Información general</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('services');
                                    }}>
                                        <span>Pago de mis servicios mensuales</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('sells');
                                    }}>
                                        <span>Registrar ventas</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h3>Cuenta en JDS</h3>
                        </div>
                        <div className='lista-opciones'>
                            <nav>
                                <ul>
                                    <li onClick={() => {
                                        navigate('jds');
                                    }}>
                                        <span>Mi plan</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('jds');
                                    }}>
                                        <span>Facturas</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('jds/help');
                                    }}>
                                        <span>Ayuda</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('jds/use');
                                    }}>
                                        <span>Guía de uso</span>
                                    </li>
                                    <li onClick={() => {
                                        navigate('jds/info');
                                    }}>
                                        <span>Solicitar mi información</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h3>Acción</h3>
                        </div>
                        <div className='lista-opciones'>
                            <nav>
                                <ul>
                                    <li>
                                        <span>Cerrar sesion</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}