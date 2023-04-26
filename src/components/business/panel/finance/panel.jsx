import react, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import * as actions from '../../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sell from './container-sell';
import { BoxFinance } from './box';
import { Line } from 'react-chartjs-2';
import { BoxFinanceLoading } from './loading/boxLoading';
import SellLoading from './loading/container-sellLoading';
import { MdNavigateBefore } from 'react-icons/md';

export default function PanelFinance(props){
    const business = props.business;
    const loadingSells = props.loadingSells;
    const sells = props.sells;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const estadisticaSell = useSelector(store => store.estadisticaSell);
    const loadingEstadisticas = useSelector(store => store.loadingEstadisticaSell);

    const activeSell = useSelector(store => store.activeGetSell);

    useEffect(() => {
        dispatch(actions.AxiosGetEstadisticaSells(business.id))
    }, [business.id])

    return (
        loadingSells == true || !sells ? <h1>Cargando...</h1>
        :
        <div className="">
             {
                console.log(loadingSells)
            }
             {
                console.log(sells)
            }
             {
                console.log(business)
            }
            {
                console.log(estadisticaSell)
            }
            <div className='div-container-component' key={1}>
                <div className='title'>
                    <h3>Finanzas</h3>
                </div>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='container-finance-divs'>
                    
                    <div className='graphi-sell-month'>
                        {
                            loadingEstadisticas == true || !estadisticaSell || estadisticaSell == 'request' ?
                                <div>
                                    <img style={{width:'20%', border:'none', marginLeft:'40%'}} src="https://biblioteca.abogacia.es/interface/themes/xebook/images/homeloading.gif" alt="" />                        
                                </div>
                            :
                            <Line  className="graph" data={{
                                labels: estadisticaSell.registros.map((vl) => vl.month),
                                datasets: [
                                {
                                    label: "Ventas",
                                    backgroundColor: "rgb(255, 99, 132)",
                                    borderColor: "rgb(255, 99, 132)",
                                    data: estadisticaSell.registros.map((vl) => vl.valor),
                                }],
                            }} />

                        }
                    </div>
                    {
                        loadingSells == true || !sells ? 

                        <div className='container-items-finance'>
                            <BoxFinanceLoading />

                            <BoxFinanceLoading/>

                            <BoxFinanceLoading />

                            <BoxFinanceLoading/>

                        </div> 
                        :
                        <div className='container-items-finance'>
                            <BoxFinance sells={sells} type='efectivo' name={'Efectivo'}/>

                            <BoxFinance sells={sells} type='nequi' name={'Nequi'}/>

                            <BoxFinance sells={sells} type='digital' name={'Digital'}/>

                            <BoxFinance sells={sells} type={false} name={'Total'}/>

                        </div>
                    }
                </div>
                <div className="team-working">
                    <div className="container-team">
                        <div className="top-nav">
                            <h1>Registro de ventas</h1>
                            <button>Descargar </button>
                            <select className="select" name="" id="" onChange={(e) => {
                                dispatch(actions.AxiosGetSells(business.id, e.target.value, false))
                            }}>
                                <option key={0}>Seleccionar mes</option>
                                <option value="2023-04" key={1}>Este mes</option>
                                <option value="2023-03" key={2}>Mes anterior</option>

                            </select>

                        </div>

                        
                        <table className="content-table">
                            <thead className="top-titles" key={111}> 
                                <tr key={10}> 
                                    <th className='responsive-h'>#</th> 
                                    <th>Valor</th> 
                                    <th>Metódo</th> 
                                    <th>Fecha</th>


                                </tr> 
                            </thead> 
                                <tbody>
                                    {
                                        sells.ventas.length ?
                                        sells.ventas.map((sell, i) => {

                                            return(
                                                <tr key={sell.id} onClick={() => {
                                                    document.querySelector("#info-sell").classList.toggle('container-register-sell-active');
                                                    dispatch(actions.ShowGetSell(sell));
                                                }}> 
                                                    <td className='responsive-h'>{i+1}</td> 
                                                    <td>{new Intl.NumberFormat().format(sell.price)} COP</td>
                                                    <td>{sell.metodo.toUpperCase()}</td>
                                                    <td>{sell.createdAt.split('T')[0]}</td> 
                                                </tr>
                                            )
                                        })
                                        : <span>No hay ventas regístradas</span>

                                    }
                                    
                                </tbody>
                        </table>
                    </div>
                </div>
                <div className='container-register-sell' id="info-sell">
                    {
                        !activeSell ? <SellLoading /> :<Sell sells={sells}/>
                    }
                </div>     
            </div>
        </div>
    )
}