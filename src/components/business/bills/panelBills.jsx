import react from 'react';
import { AiOutlinePlus, AiOutlineSetting} from 'react-icons/ai';
import { MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function PanelBills(){
    const navigate = useNavigate();
    return(
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Gastos</h3>
                </div>
                <div className='gastos-divs'>
                    <div className='table'>
                        <table className='tb'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Último mes</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={() => navigate('count/existencias')}>
                                    <td className='type'>Existencias</td>
                                    <td>12.600.000 COP</td>
                                    <td>150.000.000 COP</td>
                                </tr>
                                <tr onClick={() => navigate('count/nomina')}>
                                    <td className='type'>Nómina</td>
                                    <td>12.435.000</td>
                                    <td>87.000.000</td>
                                </tr>
                                <tr onClick={() => navigate('count/services')}>
                                    <td className='type'>Servicios</td>
                                    <td>3.500.000</td>
                                    <td>80.000.000</td>
                                </tr>
                                <tr onClick={() => navigate('count/others')}>
                                    <td className='type'>Otros</td>
                                    <td>30.000.000</td>
                                    <td>239.000.000</td>
                                </tr>
                                <tr>
                                    <td className='type'>Total</td>
                                    <td className='dg'>30.000.000 COP</td>
                                    <td className='green'>239.000.000 COP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='right-buttons-container'>
                    <button className='primarybtn' onClick={() => {
                        const divHidden = document.querySelector("#CreateGastos").classList.toggle("create-gastos-Active");
                    }}>
                        <AiOutlinePlus className='icon' />
                        <span>Crear cuenta de gastos</span>
                    </button>
                    <button className='primarybtn'>
                        <AiOutlinePlus className='icon' />
                        <span>Agregar gasto</span>
                    </button>
                    <button className='defaultbtn'>
                        <AiOutlineSetting className='icon' />
                        <span>Configuración</span>
                    </button>
                </div>
                <div className='create-gastos' id="CreateGastos">
                    <div className='header'>
                        <h3>Crear cuenta de gastos</h3>
                        <button onClick={() => {
                            const divHidden = document.querySelector("#CreateGastos").classList.toggle("create-gastos-Active");
                        }} className='close'>x</button>
                    </div>
                    <div className='container-new-gastos'>
                        <form>
                            <div className='responsive'>
                                <label htmlFor="namecat">Nombre de cuenta</label><br />
                                <input type="text" className="input" id="namecat"/>
                            </div>
                            <div className='responsive'>
                                <label htmlFor="namecat">Contraseña - Opcional</label><br />
                                <input type="placeholder" className="input" id="namecat"/>
                            </div>
                            <div className='responsive'>
                                <label htmlFor="namecat">Uso de esta cuenta</label><br />
                                <select name="" className='select' id="">
                                    <option value="">Comida</option>
                                    <option value="">Inversiones</option>
                                    <option value="">Construcciones</option>
                                    <option value="">Impuestos</option>
                                    <option value="">Educación</option>
                                    <option value="">Otros</option>

                                </select>
                            </div>
                            <div className='responsive'>
                                <label htmlFor="namecat">Contraseña</label><br />
                                <input type="placeholder" className="input" id="namecat"/>
                            </div><br /><br />
                            <div className='responsive'>
                                <span>Le recomendamos por favor, crear las cuentas de gastos con mucha precaución. 
                                    Esta plataforma ha sido diseñada para que su negocio trabaje de manera mucho más ordenadas y 
                                    automatizada. Pero un mal manejo o mala practica con la plataforma, puede tener resultados no deseados
                                    en el orden de sus finanzas.
                                </span><br /><br />
                                <input type="checkbox"></input> <label htmlFor="">Acepto lo que he leido</label><br /><br />
                                <button>Crear cuenta de gastos</button><br /><br />
                                <button className='cancel'  onClick={(e) => {
                                    e.preventDefault()
                                    const divHidden = document.querySelector("#CreateGastos").classList.toggle("create-gastos-Active");
                                }}>Cancelar</button>
                            </div>

                        </form>
                    </div>  
                </div>
            </div>

        </div>
    )
}