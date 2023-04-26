import react from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductModal(){
    const body = document.querySelector("body").style.overflowY = "hidden";
    const navigate = useNavigate();
    return (
        <div className='modal-product'>
            <div className="modal-pr" id="modal2">
                <div className="modal-dialog"> 
                    <div className='img-left'>
                        <img src="https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png" alt="" />
                    </div>
                    <div className='info'>
                        <div className='header-product-modal'>
                            <h3>Pizza deliciosa!</h3>
                            <button onClick={() => {
                                navigate('/menu');
                            } }>x</button>
                        </div>
                        <div className="description-fast">
                            <span>Deliciosa pizza de piña con champiñones y queso parmesana</span>

                            <h1>150.000 COP</h1>
                        </div>
                        <div className='take-a-wich'>
                            <div className='head'>
                                <h2>Selecciona algo más</h2>
                                <span className='choose-span'>Escoge entre 0 - 5 opciones</span>
                            </div>
                            <div className='options'>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='left'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='right'>
                                        <h3>Extra queso</h3>
                                        <span>+ 2.000 COP</span>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom-options'>
                                <div className='left-count'>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <div className='right-add'>
                                    <button>
                                        <span>Agregar a la cuenta </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}