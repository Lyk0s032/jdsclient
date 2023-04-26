import react from 'react';
import {AiOutlineDown, AiOutlineCloudDownload } from 'react-icons/ai';
import FactureProductLoading from './loading/factureLoading';
export default function FactureProduct(props){
    const business = props.business;
    const producto = props.producto;
    const facture = producto.registros[props.index];
    return (
        !facture || !producto ? <FactureProductLoading /> :
        <div >
                <div className='header-top-buttons'>
                    <button className='backout' onClick={() => {
                        const facture = document.querySelector("#facture").classList.toggle("factureActive");
                        }}><AiOutlineDown /></button>
                    <button className='download'><AiOutlineCloudDownload className='icon'/> Descargar</button>
                </div>
                <div className="header-title">
                    <h1>Factura digítal</h1>
                    <img src={business.profileLogo} alt="" />
                </div>
                <div className='first-table'>
                    <table>
                        <tbody>
                            <tr > 
                                <th className='first-space'>Nro Factura</th> 
                                <th><strong>{facture.updatedAt}</strong></th> 
                            </tr>
                            <tr > 
                                <th className='first-space'>Fecha de facturación</th> 
                                <th><strong>{facture.fechaCompra.split("T")[0]}</strong></th> 
                            </tr>
                            <tr> 
                                <th className='first-space'>Metódo de pago</th> 
                                <th><strong>{facture.metodo}</strong></th> 
                            </tr> 
                            <tr> 
                                <th>Proveedor</th> 
                                <th><strong>{facture.proveedor}</strong></th> 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='second-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                    <td>Cantidad</td>
                                
                                
                                    <td>Precio unitario</td>
                                
                                
                                    <td>Precio total</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr > 
                                <th className='first-space'>{facture.cantidad}</th> 
                                <th>{facture.valorUnidad} COP</th>
                                <th>{facture.precioTotal} COP</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='footer'>
                    <strong>Realizado por <span>Kevin Andrés Bolaños</span></strong><br />
                </div>
        </div> 
    )
}