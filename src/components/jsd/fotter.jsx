import { react } from 'react';
import Jeands from './assets/jeands.png';

import {AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai';

export default function Fotter(){
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box1">
                    <figure>
                        <a href="#">
                            <img src={Jeands} alt="Logo JeanDS" />
                        </a>
                    </figure>
                </div>
                <div className="box1">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Agencia dedicada al Marketin Digital y Desarrollo de Software</p>
                    <p>Acceder</p>
                    <p>¿Quienes somos?</p> 
                </div>
                <div className="box1">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook">
                            <AiFillFacebook className='icon f' />
                        </a>
                        <a href="#" className="fa fa-instagram">
                            <AiOutlineInstagram className="icon i" />
                        </a>
                        <a href="#" className="fa fa-whatsapp">
                            <AiOutlineWhatsApp className="icon w" />
                        </a>                        
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023 <b>JeanDS</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}