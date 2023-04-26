import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {BsThreeDots} from 'react-icons/bs';
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function ModalFinanceLoading(props){
    const business = props.business;
    const sells = props.sells;
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        document.querySelector('body').style.overflowY = 'hidden';

    })

    return (
                
        <div className="modal-finance" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>
                        <Skeleton width={400}/> 
                    </h1>
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
                                            <th>#</th> 
                                            <th>Valor</th> 
                                            <th>Metódo</th> 
                                            <th>A cargo de</th>
                                            <th>Fecha</th>
                                        </tr> 
                                    </thead> 
                                        <tbody>
                                            <tr key={1}> 
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td> 
                                            </tr>
                                            <tr key={1}> 
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td> 
                                            </tr>
                                            <tr key={1}> 
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td> 
                                            </tr><tr key={1}> 
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td>
                                                <td><Skeleton /></td> 
                                                <td><Skeleton /></td> 
                                            </tr>
                                        </tbody>
                            </table>
                    </div>
                    <footer className="modal-footer">
                        <Skeleton />
                    </footer>
                </section>
            </div>
        </div>
    )
}