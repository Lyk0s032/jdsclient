import react, { useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Routes, Route} from 'react-router-dom';
import { AiTwotoneCalendar, AiOutlineTeam, AiFillFastForward } from 'react-icons/ai';

import { BsThreeDots, BsFillPersonCheckFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModalCreateUser from './plus/createUser';
import PanelPersonalLoading from './loading/panelPersonalLoading';
import { MdNavigateBefore } from 'react-icons/md';

const labels = ["January", "February", "March", "April", "May", "June"];

const Money = {
  labels: labels,
  datasets: [
    {
      label: "Nómina",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [8400000, 7200000, 800000, 2400000, 4800000, 8400000, 10000000],
    },
    {
        label: "Adelantos",
        backgroundColor: "rgb(13, 56, 248)",
        borderColor: "rgb(13, 56, 248)",
        data: [0, 1200000, 400000, 0, 700000, 2400000],
      },
  ],
};

export default function PanelPersonal(props){
    const navigate = useNavigate();
    const business = props.business;

    const [name, setName] = useState(null);
    const [movimiento, setMovimiento] = useState(null);
    const [valor, setValor] = useState(null);
    const [razon, setRazon] = useState(null);
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(null);
    
    const handleSalary = () => {
        const body = {
            type: movimiento,
            description: razon,
            valor,
            personDocument: name,
            businessId: business.id,
        }
        axios({
            method:'post',
            url: '/createMovements/',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                setError(null);
                setCheck('¡Adelanto regístrado con éxito!');
            }
        })
        .catch((err) => {
            if(err.response.status == 404){
                setError('Este usuario no existe');
                setCheck(null);

            }else if(err.response.status == 501){
                setError('Ha ocurrido un error');
                setCheck(null);
                
            }else if(err.response.status == 401){
                setError('No puedes dejar campos vacios');
                setCheck(null);

            }else if(err.response.stastus == 403){
                setError('Este negocio no existe');
                setCheck(null);

            }
        });
    }
    return (
        !business ?

        <PanelPersonalLoading />
        :
        <div className='div-container-component'>
            <div className='header-options-back'>
                <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
            </div>
            <div className='title'><h3>Equipo de trabajo</h3></div>

                <div className='container-finance-divs'>
                    <div className='graphi-sell-month' >
                        <strong style={{'fontWeight':'100', 'margin':'10px'}}>Estádistica de nómina</strong>
                        <Line data={Money} />
                    </div>
                    <div className='container-items-finance'>
                        <div className='item-small-finance'  style={{'marginRight':'0px', 'marginLeft':'5px', 'textAlign':'center'}} onClick={() => navigate('nomina')}>
                            <AiOutlineTeam className='type-icon'/><br />
                            <h3>Nómina</h3>
                            <button onClick={() => navigate('nomina')}>+</button>
                        </div>
                        <div className='item-small-finance'  style={{'marginRight':'0px', 'marginLeft':'5px', 'textAlign':'center'}}>
                            <AiTwotoneCalendar className='type-icon'/><br />
                            <h3>Asignar horarios</h3>
                            <button>Ir </button>
                        </div>
                        <div className='item-small-finance'  style={{'marginRight':'0px', 'marginLeft':'5px', 'textAlign':'center'}} onClick={() => {
                            document.querySelector("#advanceMoney").classList.toggle('adelant-money-active');
                        }}>
                            <AiFillFastForward className='type-icon'/><br />
                            <h3>Adelantos & Red.</h3>
                            <button onClick={() => {
                                document.querySelector("#advanceMoney").classList.toggle('adelant-money-active');
                            }}>+</button>
                        </div>
                        <div className='item-small-finance' style={{'marginRight':'0px', 'marginLeft':'5px', 'textAlign':'center'}} onClick={() => {
                                    navigate('/business/personal/createUser/admin');
                                }}>
                            <BsFillPersonCheckFill className='type-icon'/><br />
                            <h3>Nueva Persona</h3>
                            <button onClick={() => {
                                    navigate('/business/personal/createUser/admin');
                                }}>+</button>
                        </div>
                    </div>
                </div>

                <div className='adelant-money' id="advanceMoney">
                    <div className='header-adelant'>
                        <h3>Movimiento económico</h3>
                    </div>
                    <div className='container'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSalary();

                        }} >
                            <label htmlFor="person">Seleccionar persona</label><br />
                            <select name="" className="select" id="person" onChange={(e) => {
                                setName(e.target.value);
                            }}>
                                <option value="" default>Selecionar...</option>
                                {
                                    business.trabajadores.map((item,i) => {
                                        return (
                                            <option value={item.numberDocument} key={i}>{item.name}</option>
                                        )
                                    })
                                }
                            </select><br /><br />
                            <label htmlFor="person">Movimiento</label><br />
                            <select name="" className="select" id="person" onChange={(e) => {
                                setMovimiento(e.target.value);
                            }}>
                                <option value="" default>Selecionar...</option>
                                <option value="adelant">Adelanto / Prestamo</option>
                                <option value="rest">Bono / Premiación</option>
                                <option value="rest">Reducción / Descuadre </option>
                            </select><br /><br />
                            <label htmlFor="money">Monto a prestar</label><br />
                            <input type="text" className='money' placeholder='00.00 COP' onChange={(e) => {
                                setValor(e.target.value);
                            }}/><br /><br />

                            <label htmlFor="money">Razón</label><br />
                            <input type="text" className='money' placeholder='Sea breve, por favor.' onChange={(e) => {
                                setRazon(e.target.value);
                            }} /><br /><br />

                            <button>Confirmar movimiento</button><br /><br />
                            <button className='cancel' onClick={(e) => {
                                e.preventDefault()
                                document.querySelector("#advanceMoney").classList.toggle('adelant-money-active');
                            }}>Cancelar</button><br /><br />
                            <span className='error'>{error}</span>
                            <span className='check'>{check}</span>

                        </form>
                    </div>
                </div>
                <div className="team-working">
                    
                    <div className="container-team">
                        <div className="top-nav">
                            <h1>Equipo de administración</h1>
                            <button onClick={() => {
                                navigate('/business/personal/createUser/admin');
                            }}>+ Agregar</button>
                        </div>
                        <table className="content-table">
                            <thead className="top-titles"> 
                                <tr> 
                                    <th className='responsive-h'>#</th> 
                                    <th>Nombre</th> 
                                    <th className='responsive-h'>Cargo</th> 
                                    <th className='responsive-h'>Nro Documento</th>
                                    <th>Estado</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                {
                                    business.trabajadores.map((item,i) => {
                                        return (
                                            <tr onClick={() => navigate('profile/'+item.numberDocument)} key={i}> 
                                                <td className='responsive-h'>1</td> 
                                                <td>{item.name}</td> 
                                                <td className='responsive-h'>{item.sexo}</td>
                                                <td className='responsive-h'>{item.numberDocument}</td>
                                                <td>Turno</td>

                                                <td><button><BsThreeDots className="icon"/></button></td>

                                            </tr> 
                                        )
                                    })
                                }
                                </tbody>
                        </table>
                    </div>


                    <div className="container-team">
                        <div className="top-nav">
                            <h1>Equipo de trabajo</h1>
                            <button onClick={() => {
                                navigate('/business/personal/createUser/operario');
                            }}>+ Agregar</button>
                        </div>
                        <table className="content-table">
                            <thead className="top-titles"> 
                                <tr> 
                                    <th className='responsive-h'>#</th> 
                                    <th>Nombre</th> 
                                    <th className='responsive-h'>Cargo</th> 
                                    <th className='responsive-h'>Nro Documento</th>
                                    <th>Estado</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                {
                                    business.trabajadores.map((item, i) => {
                                        return (
                                            <tr onClick={() => navigate('profile/1033421')} key={i}> 
                                                <td className='responsive-h'>1</td> 
                                                <td>{item.name}</td> 
                                                <td className='responsive-h'>{item.sexo}</td>
                                                <td className='responsive-h'>{item.numberDocument}</td>
                                                <td>Turno</td>

                                                <td><button><BsThreeDots className="icon"/></button></td>

                                            </tr> 
                                        )
                                    })
                                }
                                </tbody>
                        </table>
                    </div>
                </div>
                <Routes>
                    <Route path="createUser/:range" element={<ModalCreateUser business={business} />} />

                </Routes>
        </div>
    )
}