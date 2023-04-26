import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {BsThreeDots} from 'react-icons/bs';
import * as actions from '../../store/actions/actions';
import { useDispatch } from "react-redux";

export default function ModalFinance(props){
    const business = props.business;
    const sells = props.sells;
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        document.querySelector('body').style.overflowY = 'hidden';

    })

    return (
        
        !sells ? <div><h1>Cargando</h1></div>:
        
        <div className="modal-finance" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>{params.id}</h1>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        document.querySelector('body').style.overflowY = 'auto';
                        navigate('/business/sells/');
                    }}>
                        ✕  
                    </button>
                </header>
                <section className="container-modal-finance">
                    <div className="container-pay-information">

                            <table className="content-table">
                                    <thead className="top-titles"> 
                                        <tr> 
                                            <th className="responsive-h">#</th> 
                                            <th>Valor</th> 
                                            <th>Metódo</th> 
                                            <th>Fecha</th>
                                        </tr> 
                                    </thead> 
                                        <tbody>
                                            {
                                                !sells.ventas.filter((v) => v.metodo == params.id).length ? <h1>No hay ventas registradas</h1> :
                                                sells.ventas.map((vent,i) => {
                                                    if(vent.metodo == params.id){
                                                        return (
                                                            <tr key={vent.id} onClick={() => {
                                                                document.querySelector("#info-sell").classList.toggle('container-register-sell-active');
                                                                dispatch(actions.ShowGetSell(vent));
                                                            }} > 
                                                                <td className="responsive-h">{i+1}</td> 
                                                                <td>{new Intl.NumberFormat().format(vent.price)} COP</td>
                                                                <td>{vent.metodo}</td>
                                                                <td>{vent.createdAt.split('T')[0]}</td> 
                                                            </tr>
                                                        )
                                                    }
                                                })
                                            }
                                            
                                        </tbody>
                            </table>
                    

                    </div>
                    <footer className="modal-footer">
                        <button>Descargar registro</button>
                    </footer>
                </section>
            </div>
        </div>
    )
}