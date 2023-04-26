import react from 'react';
import Jeands from './assets/jeands.png';

export default function NavJDS(){
    return (
        <div className='nav-jds'>
            <div className="menu">
                <img className="imagen" src={Jeands}  />
                <nav id="nav-abrir">
                    <button onClick={() =>{
                    document.querySelector('#nav-abrir').classList.toggle('active');
                }}>x</button>
                    <img src={Jeands}  />
                    <ul>
                            <li><a href="#">Acceder</a></li>
                            <li><a href="#">Quienes somos</a></li>
                            <li><a href="#">Planes y servicios</a></li>
                            <li><a href="#">Contactatanos</a></li>
                    </ul>
                </nav>
                <button className='abrir' onClick={() =>{
                    document.querySelector('#nav-abrir').classList.toggle('active');
                }}>menu</button>
            </div>
        </div> 
    )
}