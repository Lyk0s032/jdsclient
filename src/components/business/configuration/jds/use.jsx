import react from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Use(props){
    const business = props.business;
    const navigate = useNavigate();
    return (
        <div> 
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Guía de uso</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Pequeña guía de uso</h1>
                        </div>
                        
                    </div>
 
                </div>
            </div>
        </div>
    )
}