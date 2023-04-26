import react, { useEffect, useState } from 'react';
import ConfirmationPay from './confirmation';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Nomina(props){
    const business = props.business;
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    const [pay, setPay] = useState(false);

    function handleOpenPayroll(user){
        setPay(true);
        document.querySelector("#pay").classList.toggle('pay-personal-nomic-active');
        setUserId(user);
    }
   
    return (
        <div className='Nomina'>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/personal/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div  className='first-panel'>
                    <h2>
                        Nómina pendiente
                    </h2>
                    <div className='list-people'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='responsive-h'></th>
                                    <th>Nombre</th>
                                    <th className='responsive-h'>Nro Documento</th>
                                    <th>Valor a pagar</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    business.trabajadores.map((item,i) =>{
                                        return (
                                        <tr key={item.id}>
                                            <td className='responsive-h'><input type="checkbox" /></td>
                                            <td >{item.name}</td>
                                            <td className='responsive-h'>{item.numberDocument}</td>
                                            <td>250.000 COP</td>
                                            <td>
                                                <button onClick={() => {
                                                    handleOpenPayroll(item.numberDocument);
                                                    document.querySelector("body").style.overflowY = "hidden";
                                                
                                                }}>
                                                    Revisar
                                                </button> 
                                            </td>
                                        </tr>
                                        )
                                    })
                                }                       

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='pay-personal-nomic' id="pay">
                    {
                        !pay ? null :
                        <ConfirmationPay userId={1122333} business={business} />
                    }
                </div>
                <div  className='first-panel'>
                    <h2>
                        Nómina actualizada
                    </h2>
                    <div className='list-people'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='responsive-h'></th>
                                    <th>Nombre</th>
                                    <th>Nro Documento</th>
                                    <th>Valor pagado</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='responsive-h'><input type="checkbox" /></td>
                                    <td>Kevin Andrés Bolaños Orrego</td>
                                    <td>1005832422</td>
                                    <td>1.200.000</td>
                                    <td><button>Revisar</button> </td>
                                </tr>
                                <tr>
                                    <td className='responsive-h'><input type="checkbox" /></td>
                                    <td>Kevin Andrés Bolaños Orrego</td>
                                    <td>1005832422</td>
                                    <td>1.200.000</td>
                                    <td><button>Revisar</button> </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}