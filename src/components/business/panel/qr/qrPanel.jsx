import react, { useState } from 'react';
import { AiOutlineDownload, AiOutlineCheck } from 'react-icons/ai';
import QRCode from 'react-qr-code';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Generate from './modal/generate';

export default function QrPanel(){
    const navigate = useNavigate();
    const [mesa, setMesa] = useState(null);
    const [action, setAction] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div className='qr-principal'>
            <div className='left-qr'>
                <div className='container-info-text'>
                    <h1>Configura el QR para tu negocio</h1>
                    <span>Tus mesas, tus pedidos y tus ventas, completamente digitalizadas.</span>
                    <div className='bottom-help'>
                        <div className='icon'>
                            <button>
                                !
                            </button>
                        </div>
                        <div className='txt'><span>Deseo obtener más información</span></div>
                    </div>
                </div>
            </div>
            <div className='container-create-qr'>
                <div className='container-register-qr'>
                    <div className='header-qr'>
                        <QRCode style={{width:"100%"}}  value="https://www.temagay.org.es/wp-content/uploads/2013/07/tumblr_mcewrmhVsZ1rx3u3ho1_500.jpg" />
                    </div>
                    <div className='container-rg'>

                        <div className='item-rg'>
                            <div className='header-title-item'>
                                <strong>Nro de mesa</strong>
                            </div>
                            <div className='form-select'>
                                <input type="number" className='input-number' defaultValue={0} onChange={(e) => setMesa(e.target.value)}/>
                            </div>
                        </div>

                        <div className='item-rg'>
                            <div className='header-title-item'>
                                <strong>Acceso a </strong>
                            </div>
                            <div className='form-select'>
                               <select name="" id="" className='input-select' onChange={(e) => setAction(e.target.value)}>
                                   <option>Selecionar...</option>
                                    <option value="1">Ver menu</option>
                                    <option value="2">Ver y realizar pedido</option>
                                    <option value="3">Domicilio</option>
                               </select>
                            </div>
                        </div>
                        <div className='item-rg'>
                            <div className='header-title-item'>
                                <strong>Acción </strong>
                            </div>
                            <div className='form-select'>
                                <button className='png' 
                                onClick={() => {
                                    if(!mesa  || !action){
                                        setError('Definir los parametros del QR bien.');
                                    }else{
                                        setError(null);
                                        navigate(`generate/${mesa}/${action}`);
                                    }
                                }}><AiOutlineDownload className="icon"/> Generar Código</button>                            </div>
                            
                        </div>
                        <span className='mistake'>{error}</span>


                    </div>
                </div>
            </div>
            <div className='containe-explication'>
                <div className='titles'>
                    <h1>Tus códigos QR</h1>
                    <span>Revisa constantemente el estado de tus QR y la conexión con tus mesas. </span>
                </div>
                <div className="list-qrs">
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="item">
                        <div className='img'>
                            <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                        </div>
                        <div className='container-tb'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Mesa Número 1</strong></td>
                                        <td><AiOutlineCheck className="icon check" /><span className='active'> Activo</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enlace</strong></td>
                                        <td><span className='url'> http://192.168.100.40:3001/business/qr</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Utilidad</strong></td>
                                        <td><span className='power'> Ver y realizar pedido</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Routes>
                <Route path="/generate/:mesa/:action" element={<Generate />} />
            </Routes>
        </div>
    )
}