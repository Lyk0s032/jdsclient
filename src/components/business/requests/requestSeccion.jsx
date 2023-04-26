import react from 'react';
import Jds from '../facture.jpeg';
export default function RequestSeccion(props){
    return (
        <div className='request'>
            <div className='container-info'>
                <div className='complete'>
                    <h2>¡Carga no completada!</h2>
                    <span>No hemos recibido la información completa. <br /><br /> Por favor,
                        revisa tu conexión a Internet o intentalo más tarde.</span><br /><br />
                </div>
            </div>
        </div>
    )
}