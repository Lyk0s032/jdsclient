import react, { useEffect } from 'react';

import * as actions from '../../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function ConfirmationPay(props){
    const dispatch = useDispatch(props);
    console.log(props);
    useEffect(() => {
        dispatch(actions.AxiosfactureToPayroll(props.userId, props.business.id, 31)); 
    }, [props.userId]);
    const userPayRoll = useSelector(store => store.factureToPayroll);
    const LoadingFactureToPayroll = useSelector(store => store.LoadingFactureToPayroll);
    let reduces;
    let totalReduces;
    let add = 0; 
    useEffect(() => {
        document.querySelector("body").style.overflowY = "hidden";
    }, [])
    return (
        LoadingFactureToPayroll == true ||  userPayRoll === null ?
        <div>
            Cargando...
            {console.log(userPayRoll)}
             
        </div> 
        :
        <div>
            {console.log(userPayRoll)}
            <div className='header-title-info'>
                <h3>Información - Pago de nómina, {userPayRoll.usuario.name}</h3>
                <button className='cancel' onClick={() => {
                    document.querySelector("#pay").classList.toggle('pay-personal-nomic-active')
                document.querySelector("body").style.overflowY = "auto";
                
                }}>x</button>
                    </div>
                    <div className='container-pay'>

                <div className='pay-basic'>
                    <strong>Pago básico</strong>
                    <table>

                        <thead>
                            <tr>
                                <th>
                                    Persona
                                </th>
                                <th>
                                    Salario
                                </th>
                                <th>
                                    Aux.Transporte
                                </th>
                                <th>
                                    Prestaciones Soc.
                                </th>
                                <th>
                                    Descuadres
                                </th>
                                <th>
                                    Bonificación
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        userPayRoll.usuario.name
                                    }
                                </td>
                                <td>
                                    {
                                        userPayRoll.usuario.salary.salario 
                                    }
                                </td>
                                <td>
                                    {
                                        userPayRoll.usuario.salary.transporte 
                                    }
                                </td>
                                <td>
                                    000
                                </td>
                                <td>
                                    {
                                        userPayRoll.listaMovimientos.map((item) => {
                                            if(item.type == 'rest' || item.type == 'adelant'){
                                                reduces += item.valor
                                            }
                                        })
                                        
                                    }
                                </td>
                                <td>
                                    {
                                        userPayRoll.usuario.salary.prestaciones 
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {
                    !userPayRoll.listaMovimientos.length ? null :
                    <div className='pay-basic'>
                    <strong>Reducciones</strong>
                    <table className='reduc'>

                        <thead>
                            <tr>
                                <th>
                                    Valor
                                </th>
                                <th>
                                    Tipo
                                </th>
                                <th>
                                    Razón
                                </th>
                                <th>
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            userPayRoll.listaMovimientos.map((item) => {
                                if(item.type == 'rest' || item.type == 'adelant'){
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.valor} COP</td>
                                            <td>
                                                {
                                                item.type == 'rest' ? 'Descuadre' : 'Prestamos'
                                                }
                                            </td>
                                            <td>{item.description} </td>
                                            <td>{item.createdAt.split('T')[0]}</td>
                                        </tr>
                                    )
                                }
                            })
                            }
                        </tbody>
                    </table>
                </div>
                }

                {
                    !userPayRoll.listaMovimientos.length ? null :
                    <div className='pay-basic'>
                    <strong>Agredados</strong>
                    <table className='reduc'>

                        <thead>
                            <tr>
                                <th>
                                    Valor
                                </th>
                                <th>
                                    Tipo
                                </th>
                                <th>
                                    Razón
                                </th>
                                <th>
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            userPayRoll.listaMovimientos.map((item) => {
                                if(item.type == 'plus'){
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.valor} COP</td>
                                            <td>
                                                Agregados
                                            </td>
                                            <td>{item.description} </td>
                                            <td>{item.createdAt.split('T')[0]}</td>
                                        </tr>
                                    )
                                }
                            })
                            }
                                        <tr key={12}>
                                            <td>- - -</td>
                                            <td>
                                                - - -
                                            </td>
                                            <td>- - - </td>
                                            <td>- - - </td>
                                        </tr>
                        </tbody>
                    </table>
                </div>
                }

            </div>
            <div className='hidden-edition' id="editionPay">
                <form >
                    <label htmlFor="toPay">Valor a pagar</label><br />
                    <input type="text" className='input' id="toPay" placeholder='00.00 COP'/><br /><br />
                    <label htmlFor="rasonable">Razón por la que desea ingresar un valor diferente</label><br />
                    <textarea name="" id="rasonable" cols="30" rows="10" placeholder='Escribe aquí...'></textarea>
                    <div className='span-box'>
                        <span>
                            Cambiar el valor de la nómina, puede alterar el sistema. Le recomendamos que sea cuidadoso al momento de modificar manualmente 
                            los valores. <br />
                            Por seguridad, la información del sistema se conservará en la factura. Se podrá apreciar que la factura fue editada
                            Por esta razón, le recomendamos que sea explicito en la razón por la que desea ingresar un valor diferente al del sistema.
                        </span>
                    </div>
                    <div className='confirm-checkbox'>
                        <input type="checkbox" id="checkboxpay" /><label htmlFor="checkboxpay">Acepto mi responsabilidad</label>
                    </div>
                    <button className='cancel' onClick={(e) => { 
                        e.preventDefault()
                        document.querySelector("#editionPay").classList.toggle('hidden-edition-active');
                    }}>Cancelar</button>
                    <button>Confirmar</button>
                </form>
            </div>
            <div className='confirmation-panel'>
                <div className='reduce-info'>
                    <span>Total a Pagar</span>
                    <h1>1.350.000 <span>COP</span></h1>
                </div>
                <div className='box-btns'>
                    <button className='btn danger'  onClick={() => {
                        document.querySelector("#pay").classList.toggle('pay-personal-nomic-active')
                    }}>Cancelar</button>
                    <button className='btn default' onClick={() => {
                        document.querySelector("#editionPay").classList.toggle('hidden-edition-active');
                    }}>Editar</button>
                    <button className='btn primary'>Confirmar</button>
                </div>
                
            </div>
        </div>
    )
}