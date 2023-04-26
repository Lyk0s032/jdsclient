import react, { useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Routes, Route} from 'react-router-dom';
import { AiTwotoneCalendar, AiOutlineTeam, AiFillFastForward } from 'react-icons/ai';

import { BsThreeDots, BsFillPersonCheckFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';


export default function PanelPersonalLoading(props){
    const navigate = useNavigate();
    const business = props.business;

    const [name, setName] = useState(null);
    const [movimiento, setMovimiento] = useState(null);
    const [valor, setValor] = useState(null);
    const [razon, setRazon] = useState(null);
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(null);
    
    return (
        <div className='div-container-component'>
            <div className='title'><Skeleton /></div>
                <div className='graphi-sell-month' >
                    <strong ><Skeleton /></strong>
                    <Skeleton height={250} style={{marginTop:'20px'}} />
                </div>
                <div className='container-items-finance'>
                    <Skeleton height={150}style={{width:'45%','marginRight':'0px', 'marginLeft':'5px', 'textAlign':'center',float:'left'}}/>
                    <Skeleton height={150}style={{width:'45%',display:'inline-block', marginLeft:'6px', margin:0,verticalAlign:'top', marginTop:'-18px'}}/>
                    <Skeleton height={150}style={{width:'45%',textAlign:'center',float:'left', marginLeft:'5px', marginTop:9}}/>
                    <Skeleton height={150}style={{width:'45%',display:'inline-block', marginLeft:'6px', marginTop:-10,marginLeft:5}}/>
                    

                </div>
                <div className="team-working">
                    
                    <div className="container-team">
                        <div className="top-nav">
                        <Skeleton style={{float:'left', width:'40%'}}/>
                            <Skeleton style={{float:'right', width:'10%',marginTop:'-20px'}}/>
                        </div>
                        <table className="content-table">
                            <thead className="top-titles"> 
                                <tr> 
                                    <th>#</th> 
                                    <th>Nombre</th> 
                                    <th>Cargo</th> 
                                    <th>Nro Documento</th>
                                    <th>Estado</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                    <tr> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>

                                        <td><Skeleton /></td>

                                    </tr>
                                    <tr> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>

                                        <td><Skeleton /></td>

                                    </tr> 
                                    <tr> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>

                                        <td><Skeleton /></td>

                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}