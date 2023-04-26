import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import jeanDS from './../../assets/img/facture.jpeg';
import * as actions from '../../../../store/actions/actions';
export default function FactureBill(props){
    const business = props.business;
    const producto = props.producto; 
    const dispatch = useDispatch();
    const facture = useSelector(store => store.factureProduct);
    const loading = useSelector(store => store.loadingFactureProduct);
    const params = useParams();

    console.log('facture');
    console.log(facture);
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
                        navigate('/business/bills/count/existencias/');
                    }}>
                        ✕  
                    </button>
                </header>
                {
                    !facture || loading == true ? <h1>Cargando...</h1> : 
                    <section className="container-modal-facture">
                    <div className='container-form'>
                            <div className='left'>
                                <div className='first-table'>
                                    <table>
                                        <tbody>
                                            <tr > 
                                                <th className='first-space'>Nro Factura</th> 
                                                <th><strong>{facture.createdAt}</strong></th> 
                                            </tr>
                                            <tr > 
                                                <th className='first-space'>Fecha de facturación</th> 
                                                <th><strong>{facture.fechaCompra.split('T')[0]}</strong></th> 
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
                                            <td>
                                                <th>Producto</th>
                                            </td>
                                            <td>
                                                <th>Cantidad</th>
                                            </td>
                                            <td>
                                                <th>Precio unitario</th>
                                            </td>
                                            <td>
                                                <th>Precio total</th>
                                            </td>
                                        </thead>
                                        <tbody>
                                            <tr > 
                                                <th className='first-space'>{facture.producto.nameProduct}</th> 
                                                <th><strong>{facture.cantidad}</strong></th> 
                                                <th>{facture.valorUnidad} COP</th>
                                                <th>{facture.precioTotal} COP</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={business.profileLogo} alt="" />
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
                    </footer>
                </section>
                }
                
            </div>
        </div>
    )
}