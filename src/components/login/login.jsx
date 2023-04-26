import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginIMG from './login.png';

export default function Login(){
    const navigate = useNavigate();
    // Estado de los inputs
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    // Estado de los errores
    const [existe, setExiste] = useState(null);
    const [error, setError] = useState(null);
    const [invalidPassword, setInvalidPass] = useState(null);
    const [invalid, setInvalid] = useState(null);
    
    useEffect(() => {
        const redirect = () => {
            navigate('/business');
        }
    }, [])

    // Validación del Email
    function validateEmail(valor){
        if(valor === ''){
            setError('mistake');
            setEmail(null);
        }else if(!/\S+@\S+\.\S+/.test(valor)){
            setEmail(null);
            setError('mistake');
        } else{
            setEmail(valor);
            setError(null);
        }
    }
    function validatePassword(pass){
        if(pass === ''){
            setInvalidPass('mistake');
            setPassword(null);
        }else{
            setPassword(pass);
            setInvalidPass(null);
        }
    }

    const handleLogin = () => {
        if(email == '' || password == '') return console.log('No puede estar vacio');
        const body = {
            email: email,
            password: password
        }
        axios({
            method:'post',
            url: '/api/signIn',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                window.localStorage.setItem("loggedPeople", JSON.stringify(response.data));
                navigate('/business');
            }    
        })
        .catch((err) => {
                console.log(err);
            if(err.response.status == 404){
                setExiste('No hemos encontrado este usuario.');
                setInvalid(null);
                setError('mistake');
                
            }else if(err.response.status == 401){
                setInvalid('Contraseña incorrecta');
                setExiste(null);
                setInvalidPass('mistake');
                
            }
        });
    }                               
    return(
        <div className='container-log'>
            <div className="login-conteiner">
                <div className="login-info-conteiner">
                    <h1 className="titulo">¡Bienvenido, Inicia sesión!</h1>
                    {/* <div className="social-login">
                        <div className="social-login-element">
                            <FcGoogle className='icon' />
                            <span>Google</span>
                        </div>
                        <div className="social-login-element">
                            <img src="img/kisspng-facebook-logo-social-media-computer-icons-icon-facebook-drawing-5ab02fb70b9ad5.9813355115214959910475.png" alt="Facebook-img" />
                            <span>Facebook</span>
                        </div>
                    </div> */}
                    <form className="inpus-conteiner" onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin();

                    }}>
                        {
                            existe == null ? null : <span className='errorinput'>{existe}</span> 
                        }
                        <input className={`input ${error}`} type="text" placeholder="Nombre de usuario" onChange={(e) => {
                           validateEmail(e.target.value);
                        }} />

                        {
                            invalid == null ? null : <span className='errorinput'>{invalid}</span> 
                        }
                        <input className={`input ${invalidPassword}`} type="password" placeholder="Contraseña" onChange={(e) => {
                            validatePassword(e.target.value);
                         }} />
                         {
                            email != null && password != null ? 
                                <button className="btn">Acceder</button>
                            :
                            <button className='btn inactive' disabled>Sign in</button>

                         }
                        <div className='options-to-count'>
                            <p>¿Primera vez en JDS? <span className="span">Obtener Software</span></p><br />

                            <span className='fast-info'>
                                Esta plataforma ha sido desarrollada por la empresa JeanDS. Puede contener
                                información delicada o de alto valor, por favor sea prudente con el manejo de la misma.
                            </span>
                        </div>
                    </form>
                </div>
                <div className='acceso'>
                    <img className="img" src={LoginIMG} alt="Imagen" />
                </div>
            </div>
        </div>

        //     <div className='Login'>
        //     <div className='wallpaper'>
        //     <div className='container-log'>
        //         <div className='header-jds'>
        //             <h1>JDS</h1>
        //         </div>
        //         <div className='form-container'>
        //             <form onSubmit={(e) => {
        //                 e.preventDefault()
        //                 handleLogin();

        //             }}>
        //                 <label htmlFor="email">Correo eléctronico 
        //                 { error == null ? <span></span> : <span className='errorinput'>{error}</span>}</label><br />
        //                 <input type="text" className='input' name="email" placeholder="adress@jeands.com"
        //                 onChange={(e) => {
        //                     validateEmail(e.target.value);
        //                 }} /><br /><br />

        //                 <label htmlFor="password">Contraseña { invalidPassword == null ? <span></span> : <span className='errorinput'>{invalidPassword}</span>} </label><br />
        //                 <input type="password"  className='input' name="password" placeholder='*******' 
        //                 onChange={(e) => {
        //                     validatePassword(e.target.value);
        //                 }} /><br /><br />

        //                 {
        //                     email != null && password != null ? 
        //                     <button className='btn'>
        //                         Sign In
        //                     </button>
        //                     :
        //                     <button className='signbtn' disabled>Sign in</button>
        //                 }
        //                 <span> No tengo una cuenta, <Link to="/register" className='link'>Crear una</Link> </span>
        //             </form>
        //         </div>

        //     </div>
        //     </div>
        // </div>
    )
}