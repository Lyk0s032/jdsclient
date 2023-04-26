import react, { useEffect } from 'react';

import { AiOutlineCalendar, AiOutlineWarning} from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

import * as actions  from '../../../store/actions/actions.js';
import AddSalary from './plus/addSalary.jsx';
import ProfileLoading from './loading/profileLoading.jsx';

export default function Profile(props){
    
    const dispatch = useDispatch();
    const business = props.business;
    const params = useParams();
    const navigate = useNavigate();

    console.log(params);
    useEffect(() => {
        dispatch(actions.AxiosGetProfileById(params.document, business.id)); 
    }, [params.document])
    const usuarioById = useSelector(store => store.usuarioById);
    const loadingUsuario = useSelector(store => store.loadingUserById);
    return(
        !usuarioById || loadingUsuario == true ? 
            <ProfileLoading />
        :
        <div className="profile">
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/personal/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='profile-info-basic'>
                    <div className='img-profile'>
                        <img src="https://www.ieie.eu/wp-content/uploads/2021/08/ser-un-profesional-exitoso-ieie.jpg" alt="" />
                    </div>
                    <div className='description'>
                        <span>Nombre</span>
                        <h2>{usuarioById.name}</h2>
                        <strong>C.C {usuarioById.numberDocument}</strong><br />
                        <strong>{usuarioById.email}</strong><br /><br />

                        <button>En turno</button><br />
                    </div>
                </div>
                <div className='info-nomina'>
                    {
                        !usuarioById.salary ? null :
                        <div className='header-info'>
                            <button>Editar</button>
                        </div>
                    }
                        <div className='info'>
                        {
                            !usuarioById.salary ?
                            <div className='therenot'>
                                <h1>No hay información sobre el salario de {usuarioById.name} </h1>
                                <button onClick={() => {
                                    document.querySelector("#salaryAdd").classList.toggle('add-salary-div-active');
                                }}>Definir salario</button>
                            </div>
                            : 
                            <div className='there'>
                                <strong>Salario básico: </strong><span>1.200.000 COP</span><br /><br />
                                <strong>Prestaciones sociales: </strong><span>1.200.000 COP</span><br /><br />
                                <strong>Auxilio transporte: </strong><span>1.200.000 COP</span><br /><br />
                                <strong>Días de pago: </strong><span>15 & 30</span>
                            </div>
                        }

                    </div>
                </div>
                <div className='news-profile'>
                    <div className='header-div'>
                        <h3>Novedades</h3>
                    </div>
                    <div className='container-new'>
                        <div className='left-icon'>
                            <BsNewspaper className='icon' />
                        </div>
                        <div className='right-info'>
                            <h3>Nomina <span>(1 / 03 / 2023)</span></h3>
                            <strong>1.530.000 COP</strong><br />
                            <span>Pago de nómina día 15</span>
                        </div>
                    </div>
                    <div className='container-new'>
                        <div className='left-icon'>
                            <AiOutlineCalendar className='icon' />
                        </div>
                        <div className='right-info'>
                            <h3>Programación <span>(28 / 02 / 2023)</span></h3>
                            <strong>2 PM - 4 PM</strong><br />
                            <span>Descanso el Miercoles</span>
                        </div>
                    </div>

                    <div className='container-new warning'>
                        <div className='left-icon'>
                            <AiOutlineWarning className='icon warning' />
                        </div>
                        <div className='right-info'>
                            <h3>Descuadre <span>(28 / 02 / 2023)</span></h3>
                            <strong>30.000 COP</strong><br />
                            <span>Plato de Nachos</span>
                        </div>
                    </div>
                </div>
            </div>
                <div className='add-salary-div' id="salaryAdd">
                    <Routes>
                        <Route path="add-salary" element={<AddSalary usuario={usuarioById} />} />
                    </Routes>
                </div>
        </div>
        
    )
}