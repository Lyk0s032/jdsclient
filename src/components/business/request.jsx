import react from 'react';
import Jds from './facture.jpeg';
export default function Request(props){
    return (
        <div className='request'>
            <div className='container-info'>
                <div className='right'>
                    <img src={Jds} alt="" />
                </div>
                <div className='left'>
                    <h2>{props.usuario.name.split(' ')[0]}, ¡Ha ocurrido un error!</h2>
                    <span>No hemos podido ordenar tu espacio de trabajo. <br /><br /> Por favor,
                        intentalo más tarde o también intenta comunicarte con nuestro equipo de soporte.</span><br /><br />
                    <button>Quiero contactarme</button>
                </div>
            </div>
        </div>
    )
}