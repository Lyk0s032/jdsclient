import react from 'react';
import Jeands from '../jsd/assets/jeands.png';
import { Link } from 'react-router-dom';
export default function NavDefault(){
    return (
        <div className='navDefault' id="navigate">
            <div className='logo'>
                <Link to="/">
                    <img src={Jeands} alt="" />
                </Link>
            </div>
            <div className='right-nav'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login/"><button className='acceder'>Acceder</button></Link>
                        </li>
                        <li>
                            <Link to="/planes/"><button className='plans'>Planes y servicios</button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
