import react from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import FactureNomina from './facture/factureNomina';

import { AiOutlineDown } from 'react-icons/ai';
import { MdNavigateBefore } from 'react-icons/md';
import { BsGraphUp, BsGraphDown, BsThreeDots} from 'react-icons/bs';


const labels = ["January", "February", "March", "April", "May", "June"];

const Money = {
  labels: labels,
  datasets: [
    {
      label: "Pagos",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [8400000, 7200000, 800000, 2400000, 4800000, 8400000, 10000000],
    },
    {
        label: "Adelantos",
        backgroundColor: "rgb(13, 56, 248)",
        borderColor: "rgb(13, 56, 248)",
        data: [0, 1200000, 400000, 0, 700000, 2400000],
      },
  ],
};
export default function Nomina(){
    const navigate = useNavigate();
    return(
        <div className='nomina'>
            <div className='div-container-component'> 
                <div className='header-options-back'>
                    <button onClick={() => {
                        navigate('/business/bills');
                    }}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='filter-div'>
                    <h2>Gastos de Nómina</h2>
                    
                    <select name="" className='month' id="">
                        <option value="">Marzo</option>
                        <option value="">Febrero</option>
                        <option value="">Enero</option>
                    </select>
                </div>
                <div className='title'>
                    <h1>Marzo</h1>
                </div>
                <div className='container-finance-divs'>
                <div className='graphi-sell-month'>
                    <Line data={Money} />
                </div>
                <div className='container-items-finance'>
                    <div className='item-small-finance' >
                        <h3>Nro Personas</h3>
                        <h1>7 <span></span></h1>

                        <div className='porcent'>
                            <strong><BsGraphUp className='icon'/></strong> <span className="txt danger">Pendiente</span>
                        </div>
                    </div>
                    <div className='item-small-finance'>
                        <h3>Realizado en Pagos</h3>
                        <h1>7.500.000 <span>COP</span></h1>

                        <div className='porcent'>
                            <strong><BsGraphDown className='icon'/></strong> <span className="txt positive">Redujo 1.5%</span>
                        </div>
                    </div>
                    <div className='item-small-finance'>
                        <h3>Reducciones</h3>
                        <h1>1.350.000 <span>COP</span></h1>

                        <div className='porcent'>
                            <strong><BsGraphUp className='icon'/></strong> <span className="txt">Aumento 0.5%</span>
                        </div>
                    </div>
                    <div className='item-small-finance'>
                        <h3>Prestamos</h3>
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
                            <select className="select" name="" id="">
                                <option value="this" key={1}>Este mes</option>
                                <option value="this" key={2}>Mes anterior</option>
                                <option value="this" key={3}>Últimos dos meses</option>
                                <option value="this" key={4}>Últimos 6 meses</option>

                            </select>
                        </div>

                        
                        <table className="content-table">
                            <thead className="top-titles" key={111}> 
                                <tr key={10}>
                                    <th className='responsive-h'>#</th> 
                                    <th>Nombre</th> 
                                    <th className='responsive-h'>Cargo</th> 
                                    <th>Valor (COP)</th> 
                                    <th className='responsive-h'>Metódo</th> 
                                    <th>Día pago</th>
                                    <th className='responsive-h'>Fecha</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                    <tr key={2}> 
                                        <td className='responsive-h'>1</td>
                                        <td className='first'>Elizabeth Santamaria Ulloa</td> 
                                        <td className='responsive-h'>Mesera</td>
                                        <td>750.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>15</td> 
                                        <td className='responsive-h'>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
                                    <tr key={3}> 
                                        <td className='responsive-h'>1</td>
                                        <td>Elizabeth Santamaria Ulloa</td> 
                                        <td className='responsive-h'>Mesera</td>
                                        <td>750.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>15</td> 
                                        <td className='responsive-h'>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
                                    <tr key={4}> 
                                        <td className='responsive-h'>1</td>
                                        <td>Elizabeth Santamaria Ulloa</td> 
                                        <td className='responsive-h'>Mesera</td>
                                        <td>750.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>15</td> 
                                        <td className='responsive-h'>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
                                    <tr key={5}> 
                                        <td className='responsive-h'>1</td>
                                        <td>Elizabeth Santamaria Ulloa</td> 
                                        <td className='responsive-h'>Mesera</td>
                                        <td>750.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>15</td> 
                                        <td className='responsive-h'>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
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