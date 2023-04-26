import react, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/actions';
import { MdNavigateBefore } from 'react-icons/md';
import RequestSeccion from '../../../requests/requestSeccion';

const labels = ["January", "February", "March", "April", "May", "June"];



export default function GraphProduct(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const producto = useSelector(store => store.productoDetails);
    const Loading = useSelector(store => store.loadingProductoDetails);
    const params = useParams();
    console.log(producto);
    useEffect(() => {
        dispatch(actions.AxiosGetProducto(params.reference));
        document.querySelector('body').style.overflowY = 'hidden';
        

    }, [])
      let tasa = null;
    return(
        
        <div className="modal-facture" id="modal2">
        {
        console.log(producto)

        }
            {
                Loading == true || !producto ? <h1>Cargando...</h1> :
               
                <div className="modal-dialog"> 
                <header className="modal-header">
                    <h3>{producto != 'request' && producto != 404 ? `${producto.producto.nameProduct}-` : null}  Gráficas</h3>
                    <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                        document.body.style.overflowY = 'scroll';
                        navigate('/business/bills/count/existencias');
                    }}>
                        ✕  
                    </button>
                </header>
                {
                    producto == 'request' ? 
                        <RequestSeccion />
                    : producto == 404 ? <RequestSeccion /> :
                    <section className="container-modal-facture">
                        <div className='container-form'>
                            <div className="container-graph">
                                <div className='date'>
                                    <h3>Gráfica económica</h3>
                                    <Line data={{
                                        labels: producto.labels,
                                        datasets: [
                                        {
                                            label: "Inversión",
                                            backgroundColor: "rgb(255, 99, 132)",
                                            borderColor: "rgb(255, 99, 132)",
                                            data: producto.prices,
                                        }],
                                    }} />
                                </div>
                                <div className='date'>
                                    <h3>Gráfica de cantidad</h3>
                                    <Line data={{
                                        labels: producto.labels,
                                        datasets: [
                                        {
                                            label: "Cantidad Disponible",
                                            backgroundColor: "rgb(255, 99, 132)",
                                            borderColor: "rgb(255, 99, 132)",
                                            data: producto.cantidad,
                                        },
                                        {
                                            label: "Consumido",
                                            backgroundColor: "rgb(13, 56, 248)",
                                            borderColor: "rgb(13, 56, 248)",
                                            data: producto.usado,
                                            },
                                        ],
                                    }} />
                                </div>
                            </div>
                            <div className='container-reduce-graph'>
                                <div className='date'>
                                    {
                                        ((producto.prices[producto.prices.length -2] -  producto.prices[producto.prices.length -1])/(producto.prices[producto.prices.length -1]))*100 > 0 ?
                                    <div className='lecture'>
                                        <AiOutlineCheckCircle className="icon green"/>
                                        <span>La inversión aumento en un  
                                            {
                                                // Valor de crecimiento 
                                            ' '+((producto.prices[producto.prices.length -2] -  producto.prices[producto.prices.length -1])/(producto.prices[producto.prices.length -1]))*100 + '% ' 
                                            } 
                                            respecto al mes anterior</span><br />
                                    </div>
                                        : 'espere'
                                    }
                                    <div className='lecture'>
                                        <AiOutlineCheckCircle className="icon green"/><span>Promedio de consumo: {producto.usado[producto.usado.length - 1] / 30} unidades por día en el último mes.</span><br />
                                    </div>
                                    <div className='lecture'>
                                        <AiOutlineCheckCircle className="icon green"/><span>Rentabilidad del producto: <strong>Positiva</strong></span><br />
                                    </div> 
                                </div>
                            </div>
                        </div>
                        
                        <footer className="modal-footer-exist">
                            <img src={producto.producto.imgProfile} alt="" /><br />
                            <span>
                                {producto.nameProduct} <br />
                                {
                                    !producto.producto.registros.length ? null :
                                    <span>Proveedor: {producto.producto.registros[producto.producto.registros.length - 1].proveedor}</span>
                                }
                                <br /><br />
                                {
                                    producto.producto.cantidadActual > 15 ? 
                                    <strong>Disponibles</strong>
                                    : producto.producto.cantidadActual > 5 || producto.producto.cantidadActual < 15 ?
                                    <strong>Pendiente</strong> 
                                    :
                                    <strong>Agotado</strong>


                                }
                                <strong>
                                    
                                </strong>
                            </span>
                        </footer>
                    </section>
                }
                
            </div>
            }
        </div>
    )
}