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
export default function OthersBills(){
    const navigate = useNavigate();

    return(
        <div className='Others'>
            <div className='div-container-component'> 
                <div className='header-options-back'>
                    <button onClick={() => {
                        navigate('/business/bills');
                    }}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='filter-div'>
                    <h2>Otros gastos</h2>
                    
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
                            <h3>Nro Categorias</h3>
                            <h1>5</h1>

                        </div>
                        <div className='item-small-finance'>
                            <h3>Realizado en Pagos</h3>
                            <h1>17.500.000 <span>COP</span></h1>

                        </div>
                        <div className='item-small-finance'>
                            <h3>Realizados</h3>
                            <h1>4 </h1>

                            <div className='porcent'>
                                <strong><BsGraphUp className='icon'/></strong> <span className="txt">Aumento 0.5%</span>
                            </div>
                        </div>
                        <div className='item-small-finance'>
                            <h3>Pendientes</h3>
                            <h1>1</h1>

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
                                <option value="this" key={1}>Todas</option>
                                <option value="this" key={1}>Construciones</option>
                                <option value="this" key={2}>Impuestos</option>
                            </select>
                            <label htmlFor="">Seleciona Carpeta</label>
                        </div>

                        
                        <table className="content-table">
                            <thead className="top-titles" key={111}> 
                                <tr key={10}>
                                    <th className='responsive-h'>#</th> 
                                    <th>Categoría</th> 
                                    <th>Valor (COP)</th> 
                                    <th className='responsive-h'>Metódo</th> 
                                    <th>Fecha</th>
                                    <th></th> 


                                </tr> 
                            </thead> 
                                <tbody>
                                    <tr key={2}> 
                                        <td className='responsive-h'>1</td>
                                        <td >Energía y Agua</td> 
                                        <td>450.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
                                    <tr key={2}> 
                                        <td className='responsive-h'>1</td>
                                        <td>Energía y Agua</td> 
                                        <td>450.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>8/03/2023</td> 
                                        <td>
                                            <button onClick={() => navigate('facture/2343432') }>
                                                Factura
                                            </button>                                                
                                        </td>
                                    </tr>
                                    <tr key={2}> 
                                        <td className='responsive-h'>1</td>
                                        <td>Energía y Agua</td> 
                                        <td>450.000 COP </td>
                                        <td className='responsive-h'>Cuenta Bancaría</td> 
                                        <td>8/03/2023</td> 
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