import react from 'react';
import { Link } from 'react-router-dom';

export default function Register(){
    return(
        <div className='Login'>
            <div className='wallpaper'>
            <div className='container-log'>
                <div className='header-jds'>
                    <h1>JDS</h1>
                </div>
                <div className='form-container'>
                    <span>¡Estas interesado! Dejanos tu información de contacto, pronto nos comunicaremos contigo.</span><br /><br />
                    <form>
                        <label htmlFor="email">Correo eléctronico</label><br />
                        <input type="text" className='input'  placeholder="adress@jeands.com" /><br /><br />

                        <label htmlFor="password">Número teléfonico</label><br />
                        <input type="text"  className='input' placeholder='+57' /><br /><br />

                        <button className='btn'>
                            Quiero que me llamen
                        </button><br /><br />
                        <span> Tengo una cuenta, <Link to="/login" className='link'>Quiero acceder</Link> </span>
                    </form>
                </div>

            </div>
            </div>
        </div>
    )
}