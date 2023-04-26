import react from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function AddServices(props){
    const business = props.business;
    const navigate = useNavigate();
    return (
        <div>
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/configuration/services')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>Nueva cuenta de pago</h3>
                </div>

                <div className='container-list-options'>
                    <div className='configuration-options'>
                        <div className='title'>
                            <h1>Configurar detenidamente</h1>
                        </div>
                        <div className='container-create-services'>
                            <div className='top-services'>
                                <div className='add-count'>
                                    <form>
                                        <div className='container-inputs'>
                                            <label>
                                                Nombre de la cuenta
                                            </label><br />
                                            <input type="text" /><br />
                                            <span>Sea claro al momento de definir el nombre.</span>
                                        </div>
                                        <div className='container-inputs'>
                                            <label>
                                                Descripción
                                            </label><br />
                                            <textarea /><br />
                                            <span>
                                                Intente ser lo más breve y claro posible al escribir 
                                                la descripción de esta cuenta de pagos mensuales.
                                            </span>
                                        </div>
                                        <div className='container-inputs'>
                                            <label>Por favor, seleccionar el día de pago</label><br />
                                            <select name="" id="">
                                                <option defaultValue={0}>Seleccionar día de pago</option>
                                                <option value={1}>1</option>
                                            </select><br />
                                            <span>
                                                Intente ser lo más breve y claro posible al escribir 
                                                la descripción de esta cuenta de pagos mensuales.
                                            </span>
                                        </div>

                                        <div className='container-inputs'>
                                            <label>Seleccione un color distintivo</label><br />
                                            <select name="" id="">
                                                <option value="red">Rojo</option>
                                            </select><br />
                                            <span>
                                                Este color le permitirá leer las estadisticas de forma más sencilla, y así evitar
                                                confusiones al momento de hacer interpretaciones sobre los resultados.
                                            </span>
                                        </div>

                                        <div className='container-inputs'>
                                            <button>Confirmar</button>
                                            <span>
                                                Al crear esta cuenta de servicios, usted le está indicando a la plataforma que 
                                                todos los meses usted todos los meses tiene una responsabilidad economicas. <br />

                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    )
}