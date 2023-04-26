import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ModalCreateUser(props){
    const [name, setName] = useState(null);
    const [numberDocument, setNumberDocument] = useState(null);
    const [range, setRange] = useState(null);
    const [profileIMG, setProfileIMG] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    })
    const navigate = useNavigate();
    
    const createUser = () => {
        setLoading(true);
        const body = {
            name,
            numberDocument,
            range,
            profileIMG,
            sexo,
            email,
            fecha:date,
            businessId: props.business.id
        }
        axios({
            method:'post',
            url: '/api/signUp',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                setLoading(false);
                navigate('/business/personal/profile/'+numberDocument);
            }
        })
        .catch((err) => {
            setLoading(false);
            if(err.response.status == 404){
                setError('No puedes dejar campos vacios');

            }else if(err.response.status == 401){
                setError('Ha ocurrido un error');
                
            }
        });
    }
    return(
        <div className="modal-create-product" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>Agregar colaborador a la nómina</h1>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        document.body.style.overflowY = 'scroll';
                        navigate('/business/personal');
                    }}>
                        ✕  
                    </button>
                </header>
                <section className="container-modal-createProduct">
                    <div className='container-form'>
                        <form onSubmit={(e) => {
                            e.preventDefault(e)
                            createUser();
                        }                       
                        }>
                            <div className='left'>
                                <div className='form-box'>
                                    <div className='img'></div>
                                    <button>Subir imagen (opcional)</button><br />
                                </div>
                            </div>
                            <div className='right'>
                                <div className='form-inputs'>
                                    <div className='responsive'>
                                        <label htmlFor="name">Nombre completo </label><br />
                                        <input type="text" className='input' 
                                        onChange={(e) =>
                                            {
                                                setName(e.target.value);
                                            }} />
                                    </div>
                                    <div className='responsive'>
                                        <label htmlFor="reference">Nro documento</label><br />
                                        <input type="text" className='input' id="reference" 
                                        onChange={(e) =>
                                            {
                                                setNumberDocument(e.target.value);
                                            }} /><br />
                                    </div>
                                    <div className='responsive select'>
                                        <label htmlFor="name">Cargo </label><br />

                                        <select name="" id="" className='input select' 
                                        onChange={(e) =>
                                            {
                                                setRange(e.target.value);
                                            }}>
                                            <option value="" default>Seleccionar...</option>
                                            <option value="admin">Administrador</option>
                                            <option value="oper">Operario</option>
                                        </select><br />
                                        <span>Esto es importante al momento de asignar libertad al usuario de manejar la plataforma.</span><br /><br />

                                    </div>
                                    <div className='responsive'>
                                        <label htmlFor="name">Sexo</label><br />
                                        <select name="" id="" className='input select'
                                        onChange={(e) =>
                                            {
                                                setSexo(e.target.value);
                                            }}>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select><br />
                                    </div>
                                    <div className='responsive'>
                                        <label htmlFor="name">Correo eléctronico</label><br />
                                        <input type="text" className='input' onChange={(e) =>
                                            {
                                                setEmail(e.target.value);
                                            }}/>
                                    </div>

                                    <div className='responsive'>
                                        <label htmlFor="name">Fecha contratación</label><br />
                                        <input type="date" className='input' onChange={(e) =>
                                            {
                                                setDate(e.target.value);
                                            }} />
                                    </div><br /><br />
                                    <input type="submit" value="Agregar Colaborador" className='create-btn' /> 
                                    {
                                        loading === true ? 
                                        <img className='loading' src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
                                        : null
                                    }
                                    <br /><br />
                                    <span className='error'>{error}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer className="modal-footer">
                        <span>
                            Por favor, maneje con seriedad y discresión el control de usuarios. <br />
                            Esta plataforma fue diseñada para ayudarle en la gestión del inventario y finanzas de su empresa, con 
                            la intención de automatizar sus procesos. Para garantizar un desempeño increible, le sugerimos 
                            que maneje con cautela la creación e ingreso de nuevos colaboradores. 
                        
                        </span>
                    </footer>
                </section>
            </div>
    </div>
    )
}