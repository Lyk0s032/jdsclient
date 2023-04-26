import React from "react";
import QRCode from "react-qr-code";
import { useNavigate, useParams } from "react-router-dom";

export default function Generate(){
    const navigate = useNavigate();
    const params = useParams();
    return (
        <div className="modal-qr-generate" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>Generando QR...</h1>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        navigate('/business/qr');
                    }}>
                        ✕  
                    </button>
                </header>
                <section className="modal-content">
                    <div className="div-container-qr">
                        <div className="container-qr">
                            <QRCode value="w" style={{width: "100%"}}/>
                        </div>
                        <div className="info-container">
                            <strong>Dirección: </strong> <span className="cursive">https://www.jds.com/m/subway/?m={params.mesa}</span><br /><br />
                            <strong>Acceso a: </strong>
                             {params.action == 1 ? <span>Ver menu</span> 
                             : params.action == 2 ? <span>Ver menu y realizar pedido</span> 
                             : <span>Domicilio</span> 
                             }<br /><br />
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="confirmate">Confirmar</button>
                        <button className="cancel" onClick={() => {
                            navigate('/business/qr');
                        }}>Cancelar</button>

                    </footer>
                </section>
            </div>
        </div>
    )
}