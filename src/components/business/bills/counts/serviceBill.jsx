import react, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import * as actions from '../../../store/actions/actions';
import FactureNomina from './facture/factureNomina';

import { AiOutlineDown } from 'react-icons/ai';
import { MdNavigateBefore } from 'react-icons/md';
import { BsGraphUp, BsGraphDown, BsThreeDots} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import BoxHowManyServices from './box';
import BoxCurrentlyPayed from './services/boxInfo';
import EstadisticaServices from './services/Estadistica';
import RequestSeccion from '../../requests/requestSeccion';
import PanelFinanceLoading from '../../panel/finance/loading/panelFinanceLoading';



export default function ServicesBill(props){
    const business = props.business;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allSer = useSelector(store => store.servicesAll);
    const loadingAll = useSelector(store => store.loadingServicesAll);

    const service = useSelector(store => store.services);
    const loadingServices = useSelector(store => store.loadingServices);
    useEffect(() => {
        dispatch(actions.AxiosGetServices(business.id, true));
        dispatch(actions.AxiosGetServicesPay(business.id, '2023-04', true));
    }, [business.id])
    return(
        loadingServices == true || !service  || !allSer || loadingAll == true ? <PanelFinanceLoading /> : 
        allSer == 'request' ? <RequestSeccion /> :
        <div className='nomina'>
            <div className='div-container-component'> 
                <div className='header-options-back'>
                    <button onClick={() => {
                        navigate('/business/bills');
                    }}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='filter-div'>
                    <h2>Gastos en servicios</h2>
                </div><br /><br />
                <div className='container-finance-divs'>
                        <EstadisticaServices services={allSer} />
                    <div className='container-items-finance'>
                        <BoxHowManyServices services={allSer}/>
                        
                        <BoxCurrentlyPayed service={service} />


                        <div className='item-small-finance' onClick={() => {
                            navigate('/business/configuration/services/addService')
                        }}>
                            <h3>Agregar pago</h3>
                            <strong>¡Agregar nuevo pago!</strong>
                        </div>

                        <div className='item-small-finance' onClick={() => {
                            navigate('/business/configuration/jds/help')
                        }}>
                            <h3>Help</h3>
                            <strong>Nuestra guía</strong>
                        </div>
                    </div>    
                </div>

                <div className="team-working">
                    <div className="container-team">
                        <div className="top-nav">
                            <h1>Registro</h1>
                            <button>Descargar </button>
                            <select className="select" name="" id="" onChange={(e) => {
                                dispatch(actions.AxiosGetServicesPay(business.id, e.target.value, false));
                            }}>
                                <option default key={1}>seleccionar mes</option>
                                <option value="2023-04" key={2}>Este mes</option>
                                <option value="2023-03" key={3}>Marzo</option>
                                <option value="2023-02" key={4}>Febrero</option>

                            </select>
                        </div>

                        
                        <table className="content-table">
                            <thead className="top-titles" key={111}> 
                                <tr key={10}>
                                    <th className='responsive-h'>#</th> 
                                    <th>Servicio</th> 
                                    <th>Valor (COP)</th> 
                                    <th className='responsive-h'>Metódo</th> 
                                    <th >Fecha</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                    { 
                                        service != null ?
                                            service.searchPagoServices.length <= 0 ?
                                            <span>No hay registros</span>
                                            :
                                            service.searchPagoServices.map((item,i) => {
                                                return (
                                                    <tr key={item.id}> 
                                                        <td className='responsive-h'>{i+1}</td>
                                                        <td>{item.service.name}</td> 
                                                        <td>{new Intl.NumberFormat().format(item.valor)} COP </td>
                                                        <td className='responsive-h'>{item.metodo}</td> 
                                                        <td>{item.fecha.split('T')[0]}</td> 
                                                        <td>
                                                            <button onClick={() => navigate('facture/2343432') }>
                                                                Factura
                                                            </button>                                                
                                                        </td>
                                                    </tr>  
                                                )
                                            })
                                            :<h1>nada</h1>
                                        
                                    }
                                </tbody>
                        </table>
                    </div>
                </div>  
                <Routes>

                    <Route path="facture/:reference/" element={<FactureNomina />} />

                </Routes>
            </div>
        </div>
    )
}