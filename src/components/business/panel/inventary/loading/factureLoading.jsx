import react from 'react';
import {AiOutlineDown, AiOutlineCloudDownload } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
export default function FactureProductLoading(props){
    return (
        <div >
                <div className='header-top-buttons'>
                    <button className='backout' onClick={() => {
                        const facture = document.querySelector("#facture").classList.toggle("factureActive");
                        }}><AiOutlineDown /></button>
                        <Skeleton width={100} />
                </div>
                <div className="header-title">
                    <h1>Factura digítal</h1>
                    <Skeleton style={{float:'right', width:'70px',height:'70px',marginRight:'20px'}} circle={true}/>
                </div>
                <div className='first-table'>
                    <table>
                        <tbody>
                            <tr > 
                                <th className='first-space'>Nro Factura</th> 
                                <th><Skeleton /></th> 
                            </tr>
                            <tr > 
                                <th className='first-space'>Fecha de facturación</th> 
                                <th><Skeleton /></th> 
                            </tr>
                            <tr> 
                                <th className='first-space'>Metódo de pago</th> 
                                <th><Skeleton /></th> 
                            </tr> 
                            <tr> 
                                <th>Proveedor</th> 
                                <th><Skeleton /></th> 
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
                                <th className='first-space'><Skeleton /></th> 
                                <th><Skeleton /></th>
                                <th><Skeleton /></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='footer'>
                    <Skeleton style={{width:'30%'}}/>
                </div>
        </div> 
    )
}