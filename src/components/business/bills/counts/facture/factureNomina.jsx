import react, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jeanDS from './../../assets/img/jeands.jpg';
export default function FactureNomina(){
    const navigate = useNavigate();
    useEffect(() => {
        document.querySelector('body').style.overflowY = 'hidden';
    }, [])
    return(
        <div className="modal-facture" id="modal2">
            <div className="modal-dialog"> 
                <header className="modal-header">
                    <h1>Factura digital</h1>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        document.body.style.overflowY = 'scroll';
                        navigate('/business/bills/count/nomina/');
                    }}>
                        ✕  
                    </button>
                </header>
                <section className="container-modal-facture">
                    <div className='container-form'>
                            <div className='left'>
                                <div className='first-table'>
                                    <table>
                                        <tbody>
                                            <tr > 
                                                <th className='first-space'>Nro Factura</th> 
                                                <th><strong>34063</strong></th> 
                                            </tr>
                                            <tr > 
                                                <th className='first-space'>Fecha de facturación</th> 
                                                <th><strong>09 / 03 / 2023</strong></th> 
                                            </tr>
                                            <tr> 
                                                <th className='first-space'>Metódo de pago</th> 
                                                <th><strong>Efectivo</strong></th> 
                                            </tr> 
                                            <tr> 
                                                <th>Proveedor</th> 
                                                <th><strong>GaseoLibre</strong></th> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='second-table'><br /><br />
                                    <strong>Básico</strong>
                                    <table>
                                        <thead>
                                            <td>
                                                <th>Persona</th>
                                            </td>
                                            <td>
                                                <th>Salario</th>
                                            </td>
                                            <td>
                                                <th>Descuentos</th>
                                            </td>
                                            <td>
                                                <th>Adelantos</th>
                                            </td>
                                            <td>
                                                <th>Prestaciones</th>
                                            </td>
                                        </thead>
                                        <tbody>
                                            <tr > 
                                                <th className='first-space'>Elizabeth Ulloa</th> 
                                                <th><strong>1.200.000 COP</strong></th> 
                                                <th>0.00 COP</th>
                                                <th>0.00 COP</th>
                                            </tr>
                                        </tbody>
                                    </table><br /><br />

                                    
                                    <strong>Descuentos</strong><br /><br />
                                    <table>
                                        <thead>
                                            <td>
                                                <th>Valor</th>
                                            </td>
                                            <td>
                                                <th>Razón</th>
                                            </td>
                                            <td>
                                                <th>Fecha</th>
                                            </td>
                                        </thead>
                                        <tbody>
                                            <tr > 
                                                <th>100.000 COP</th> 
                                                <th>Descuadres</th>
                                                <th>14 / 03 / 2023</th>
                                            </tr>
                                        </tbody>
                                    </table><br /><br />
                                    <strong>Adelantos</strong><br /><br />
                                    <table>
                                        <thead>
                                            <td>
                                                <th>Valor</th>
                                            </td>
                                            <td>
                                                <th>Razón</th>
                                            </td>
                                            <td>
                                                <th>Fecha</th>
                                            </td>
                                            
                                        </thead>
                                        <tbody>
                                            <tr > 
                                                <th className='first-space'>300.000 COP</th> 
                                                <th>Adelanto</th>
                                                <th>14 / 03 / 2023</th>
                                            </tr>
                                        </tbody>
                                    </table><br /><br />
                                </div>
                            </div>
                            <div className='right'>
                                <img src="https://ccplazacentral.com/wp-content/uploads/2021/07/Burger-King.jpg" alt="" />
                            </div>
                    </div>
                    <footer className="modal-footer">
                        <img src={jeanDS} alt="" /><br />
                        <span>
                            Factura dígital <br />
                            Validada por la empresa JeanDS y la plataforma JDS.
                            <br /><br />
                            <strong>JeanDS - JDS</strong>
                        </span>
                    </footer><br /><br />
                    <button className='download'>Descargar Factura</button>
                </section>
            </div>
        </div>
    )
}