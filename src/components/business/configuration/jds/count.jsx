import react from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Count(props){
    const business = props.business;
    const navigate = useNavigate();
    return (
        <div> 
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Cuenta JDS</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>{business.name} cuenta</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <div className='lade line'>
                                    <strong>Valor mensual</strong>
                                    <h2>10.000 COP mensuales</h2>
                                    <span>
                                        Precio por membresia, contiene IVA incluido.
                                    </span>
                                </div>
                                <div className='lade'>
                                    <strong className='clare'>
                                        Algunas opciones
                                    </strong>
                                    <nav>
                                        <ul>
                                            <li onClick={() => {
                                                navigate('changePlan');
                                            }}><span>Desdeo cambiar de plan</span></li>
                                            <li onClick={() => {
                                                navigate('/business/configuration/jds/help');
                                            }}><span>Ayuda</span></li>
                                            <li onClick={() => {
                                                navigate('/business/configuration/jds/guide');
                                            }}><span>Guia de uso</span></li>

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
                            <h1>Información de pagos</h1>
                        </div>
                        <div className='pays'>
                            <div className=''></div>
                        </div>
                        
                    </div>
 
                </div>
            </div>
        </div>
    )
}