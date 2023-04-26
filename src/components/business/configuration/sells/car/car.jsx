import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function CarSells(){
    return (
        <div>
            <div className='close'>
                <button onClick={() => {
                    document.querySelector("#see-car").classList.toggle('see-car-active');
                }}>x</button>
            </div>
            <div className='info-left-product'>
                <div className='info-car-modal'>
                    <span>Valor total</span>
                    <h1>130.000 <span>COP</span></h1>
                </div>
                <div className='btns'>
                    <button className='ok'>Confirmar compra</button>
                    <button className='cancel'>Confirmar compra</button>

                </div>
            </div>
            <div className='form-right-car'>

                <h3 className='txt-config'>Productos en el carrito</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Valor total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>
                        <tr>
                            <td>Hamburguesa</td>
                            <td>13</td>
                            <td>340.000 COP</td>
                            <td><button className='edit'><AiOutlineEdit /></button></td>
                            <td><button className='del'><AiOutlineDelete /> </button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}