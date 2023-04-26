import react, { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { MdNavigateBefore } from 'react-icons/md';
import { BsGraphUp, BsGraphDown, BsThreeDots} from 'react-icons/bs';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as actions from '../../../store/actions/actions';
import FactureBill from './facture/facture';
import GraphProduct from './facture/graph';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import RequestSeccion from '../../requests/requestSeccion';
import PanelFinanceLoading from '../../panel/finance/loading/panelFinanceLoading';

export default function Count(props){

    const business = props.business;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stocks = useSelector(store => store.stocks);
    const loading = useSelector(store => store.loadingStocks);
    const items = useSelector(store => store.factureProduct);
    const [Month, setMonth] = useState(2);
    const [year, setYear] = useState(2023);
    console.log(stocks);
    console.log(loading);

    useEffect(() => {
        dispatch(actions.AxiosGetStock(1,2023,Month));  
    },[business.id, Month]) 
    const months =  ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];
    
    return (
            !stocks || loading != false ? <PanelFinanceLoading /> :
            stocks == 'request' ? <RequestSeccion /> :
            <div className='count'>
                <div className='div-container-component'> 
                    <div className='header-options-back' onClick={() => {
                        navigate('/business/bills/');
                    }}>
                        <button><MdNavigateBefore className="icon" /> Regresar    </button>
                    </div>
                    <div className='filter-div'>
                        <h2>Existencias</h2>
                        
                        <select name="" className='month' id="" onChange={(e) => setMonth(e.target.value)}>
                            <option defaultChecked >selecionar mes</option>
                            <option value={3}>Marzo</option>
                            <option value={2}>Febrero</option>
                            <option value={1}>Enero</option>
                        </select>
                    </div>
                    <div className='title'>
                        <h1>{months[Number(Month)]}</h1>
                    </div>
                    <div className='container-finance-divs'>
                    <div className='graphi-sell-month'>
                    <Line  className="graph" data={{
                                labels: ['enero', 'febrero', 'marzo', 'abril'],
                                datasets: [
                                {
                                    label: "Ventas",
                                    backgroundColor: "rgb(255, 99, 132)",
                                    borderColor: "rgb(255, 99, 132)",
                                    data: [100,200,300,400],
                                }],
                            }} />
                    </div>
                    <div className='container-items-finance'>
                        <div className='item-small-finance' >
                            <h3>Efectivo</h3>
                            <h1><span>COP</span></h1>

                            <div className='porcent'>
                                <strong><BsGraphUp className='icon'/></strong> <span className="txt danger">Aumento 10%</span>
                            </div>
                        </div>
                        <div className='item-small-finance'>
                            <h3>Nequi</h3>
                            <h1>7.500.000 <span>COP</span></h1>

                            <div className='porcent'>
                                <strong><BsGraphDown className='icon'/></strong> <span className="txt positive">Redujo 1.5%</span>
                            </div>
                        </div>
                        <div className='item-small-finance'>
                            <h3>Pago digítal</h3>
                            <h1>12.500.000 <span>COP</span></h1>

                            <div className='porcent'>
                                <strong><BsGraphUp className='icon'/></strong> <span className="txt">Aumento 0.5%</span>
                            </div>
                        </div>
                        <div className='item-small-finance'>
                            <h3>Total</h3>
                            <h1>22.500.000 <span>COP</span></h1>

                            <div className='porcent'>
                                <strong><BsGraphUp className='icon'/></strong> <span className="txt danger">Aumento 4%</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                    <div className="team-working">
                        <div className="container-team">
                            <div className="top-nav">
                                <h1>Registro</h1>
                                <button>Descargar </button>
                            </div>

                            
                            <table className="content-table">
                                <thead className="top-titles" key={111}> 
                                    <tr key={10}>
                                        <th className='responsive-h'>#</th> 
                                        <th  className='responsive-h'>Caja</th> 
                                        <th>Producto</th> 
                                        <th>Valor (COP)</th> 
                                        <th>Cantidad</th>
                                        <th  className='responsive-h'>Metódo</th> 
                                        <th>Fecha</th>
                                        <th ></th> 


                                    </tr> 
                                </thead> 
                                    <tbody>                                     
                                    {
                                        !stocks.fill ?
                                        <h1>Nada que hacer</h1> :
                                        stocks.fill.map((item) => {
                                            return (
                                                <tr key={item.id}> 
                                                    <td  className='responsive-h'>{item.id}</td>
                                                    <td  className='responsive-h'>
                                                       dd 
                                                    </td> 
                                                    <td>{item.producto.nameProduct}</td>
                                                    <td>{item.precioTotal} </td>
                                                    <td>{item.cantidad}</td> 
                                                    <td  className='responsive-h'>{item.metodo}</td> 
                                                    <td>{item.fechaCompra.split('T')[0]}</td> 
                                                    <td>
                                                        <div className="dropdown">
                                                            <button onClick={() => {
                                                                // BOTÓN ABRIR OPCIONES
                                                                dispatch(actions.ShowGetFacture(item));
                                                                const dropdown = document.querySelector("#dropdown").classList.toggle("list_outActive"); 
                                                            }}><BsThreeDots className="icon"/></button>


                                                            <div className='list_out' id="dropdown">
                                                                <div className='close'>
                                                                    <button onClick={() => {
                                                                        const closeDropDown = document.querySelector("#dropdown").classList.toggle("list_outActive"); 
                                                                    }} >
                                                                        <AiOutlineDown className="icon" />
                                                                    </button>
                                                                </div>
                                                                { 
                                                                     !items ? null :
                                                                <div key={items.id}>
                                                                    <div className='head-list'> <h3>Existencias - Liquidos - {items.id}</h3></div>      
                                                                        <ul>
                                                                            <li><button onClick={() => {
                                                                                    navigate('facture/a');
                                                                                }}>Factura</button></li>
                                                                            <li><button onClick={() => {
                                                                                    const dropdown = document.querySelector("#dropdown").classList.toggle("list_outActive"); 
                                                                                    navigate(`graph/${items.id}/`)
                                                                                    }
                                                                                }>Comparación mes anterior</button></li>
                                                                        </ul>          
                                                                </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                            </table>
                        </div>
                    </div>  
                    <Routes>

                        <Route path="facture/:reference/" element={<FactureBill business={business} />} />
                        <Route path="graph/:reference" element={<GraphProduct />} />

                    </Routes>
                </div>
            </div>
    )
}