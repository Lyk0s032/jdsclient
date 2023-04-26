import react from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Help(props){
    const business = props.business;
    const navigate = useNavigate();
    return (
        <div> 
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Ayuda</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>{business.name} | Preguntas frecuentes</h1>
                        </div>
                        <div className='container-acorder-help'>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            <div className='container-acordeon'>
                                <div className='visibility' onClick={() => {
                                    document.querySelector("#active-1").classList.toggle('hidden-info-active');
                                }}>
                                    <h3>¿Cómo puedo domicilios</h3>
                                </div>
                                <div className='hidden-info' id="active-1">
                                    <span>ddsfsdf</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    )
}