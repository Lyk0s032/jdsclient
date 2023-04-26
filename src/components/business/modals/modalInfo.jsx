import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModalInfo(){
    const navigate = useNavigate();
    return (
        <div className="modal" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>Información de la venta Nro 1232</h1>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        navigate('/finance/');
                    }}>
                        ✕  
                    </button>
                </header>
                <section className="modal-content">
                    <div className="container-pay-information">
                        <div className="header-top">
                            <h3>09 / 03 / 2023</h3>
                            <span>11:35 PM</span>
                        </div>
                        <div className="products-list-modal">
                            <div className="item">
                                <img src="https://recetasdecocina.elmundo.es/wp-content/uploads/2020/09/champinones-al-ajillo.jpg" alt="" />
                                <div className="info-item">
                                    <strong>Champiñones al Ajillo</strong>
                                    <h2>22.900 <span>COP</span></h2>
                                    <span>Mariscos</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="https://recetasdecocina.elmundo.es/wp-content/uploads/2020/09/champinones-al-ajillo.jpg" alt="" />
                                <div className="info-item">
                                    <strong>Champiñones al Ajillo</strong>
                                    <h2>22.900 <span>COP</span></h2>
                                    <span>Mariscos</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="https://recetasdecocina.elmundo.es/wp-content/uploads/2020/09/champinones-al-ajillo.jpg" alt="" />
                                <div className="info-item">
                                    <strong>Champiñones al Ajillo</strong>
                                    <h2>22.900 <span>COP</span></h2>
                                    <span>Mariscos</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="https://recetasdecocina.elmundo.es/wp-content/uploads/2020/09/champinones-al-ajillo.jpg" alt="" />
                                <div className="info-item">
                                    <strong>Champiñones al Ajillo</strong>
                                    <h2>22.900 <span>COP</span></h2>
                                    <span>Mariscos</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <footer className="modal-footer">
                        <strong>Por Elizabeth Ulloa</strong>
                        <h3>350.000 <span>COP</span></h3>
                        <span>Mesa Nro <strong>1</strong></span>
                    </footer>
                </section>
            </div>
        </div>
    )
}