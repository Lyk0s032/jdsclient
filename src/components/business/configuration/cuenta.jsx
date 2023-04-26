import axios from 'axios';
import react, { useState } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/actions';

export default function Cuenta(props){
    const business = props.business;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [img, setImg] = useState(null);
    const [description, setDescription] = useState(null);
    const [ubication, setUbicacion] = useState(null);
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(null);
    const [loadingHttp, setLoadingHttp] = useState(false);
    function submit(e){
        if(btn == true){
            if(!ubication && !description && !img){
                setError('Nos has hecho modificaciones');
            }else{
                setLoadingHttp(true);
                let profileLogo = !img ? business.profileLogo : img;
                let descriptionEnter =  !description ? business.description : description;
                let ubi =  !ubication ? business.direccion : ubication;

                const body = {
                    profileLogo,
                    description: descriptionEnter,
                    direccion: ubi,
                    time: business.time,
                    businessId: business.id

                }
                axios.put('/business',body)
                .then((res) => {
                    setLoadingHttp(false);
                    if(res.status == 200){
                        dispatch(actions.AxiosGetInfoBusiness(business.id)); 
                    }
                })
                .catch((err) =>{
                    console.log('error');
                    console.log(err);
                })
            }
        }
    }
    return (
        <div>
           <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>{business.name}</h3>
                </div>

                <div className='container-list-options'>
                    <div className='title'>
                        <h1>Información de la cuenta</h1>
                    </div>
                    <div className='container-forms'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            submit();

                        }}>
                            <div className='input-container'>
                                <label>Nombre de negocio ({business.name})</label><br />
                                <input type="text" defaultValue={business.name} disabled /><br />
                                <span>El nombre del negocio no puede ser cambiado de forma manual, si por alguna razón el nombre del negocio ha cambiado
                                    comuniquese con el equipo de JDS, para hacer el cambio de forma segura.
                                </span>
                            </div>
                            <div className='input-container'>
                                <label>Imagen de perfil (URL)</label><br />
                                <input type="text" defaultValue={business.profileLogo} name="img" onChange={(e) => {
                                    if(e.target.value == business.profileLogo || e.target.value == ''){
                                        setBtn(false);
                                        setImg(null);
                                    }else{
                                        setImg(e.target.value);
                                        setBtn(true);
                                    }
                                }}/><br />
                                <span>
                                    Copie la url o enlace del logo de su empresa y peguelo en la campo de arriba.
                                </span>
                            </div>
                            <div className='input-container'>
                                <label>Descripción</label><br />
                                <textarea defaultValue={business.description} name="description" onChange={(e) => {
                                    if(e.target.value == business.description || e.target.value == ''){
                                        setBtn(false);
                                        setDescription(null);
                                    }else{
                                        setDescription(e.target.value);
                                        setBtn(true);
                                    }
                                }}/><br />
                                <span>
                                    Exprese todo aquello que desee que su negocio transmita. 
                                </span>
                            </div>
                            <div className='input-container'>
                                <label>Ubicación</label><br />
                                <input type="text" defaultValue={business.direccion} name='ubicacion' onChange={(e) => {
                                    if(e.target.value == business.direccion || e.target.value == ''){
                                        setBtn(false);
                                        setUbicacion(null);
                                    }else{
                                        setUbicacion(e.target.value);
                                        setBtn(true);
                                    }
                                }}/><br />
                                <span>
                                    Configure la ubicación real de su negocio.
                                </span>
                            </div>
                            <div className='container-button'>
                                {
                                    btn == false ? 
                                        <button className='button in' disabled>Actualizar información de la Cuenta</button>
                                    :
                                        <input className="button" type="submit" value='Actualizar' />

                                }
                            </div>
                            {
                                loadingHttp ?
                                    <img className='loading-enter' src="https://biblioteca.abogacia.es/interface/themes/xebook/images/homeloading.gif" alt="" />
                                : null
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}