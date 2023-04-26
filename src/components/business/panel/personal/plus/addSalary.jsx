import react, { useState } from 'react';
import axios from 'axios';
export default function AddSalary(props){
    const [base, setBase] = useState(null);
    const [aux, setAux] = useState(null);
    const [prest, setPrest] = useState(null);
    const [day, setDay] = useState(null);
    const [method, setMethod] = useState(null);
    const [error, setError] = useState(null);
    const usuario = props.usuario;
    
    const handleSalary = () => {
        const body = {
            salario: base,
            prestaciones: prest,
            transporte: aux,
            dayPay: day,
            method,
            businessId: usuario.businessId,
            idPeople: usuario.id
        }
        axios({
            method:'post',
            url: '/createSalary/',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                setError(null);
            }
        })
        .catch((err) => {
            if(err.response.status == 404){
                setError('Este usuario no existe');

            }else if(err.response.status == 501){
                setError('Ha ocurrido un error');
                
            }else if(err.response.status == 401){
                setError('No puedes dejar campos vacios');
            }
        });
    }
    return (
        <div className='div-addSalary'>
            <div className='header-forms'>
                <h2>Definir Salario...</h2>
                <button onClick={() => {
                    document.querySelector("#salaryAdd").classList.toggle('add-salary-div-active');
                }}>Regresar </button>
            </div>
            <div className='box-container'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSalary();
                }}>
                    <label htmlFor="salary">Define salario base</label><br />
                    <input type="text" className='input' placeholder='00.00 COP' 
                    onChange={(e) => {
                        setBase(e.target.value);
                    }}/><br /><br />

                    <label htmlFor="salary">Prestaciones sociales</label><br />
                    <input type="text" className='input' placeholder='00.00 COP' 
                    onChange={(e) => {
                        setPrest(e.target.value);
                    }}/><br /><br />

                    <label htmlFor="salary">Auxilio de transporte</label><br />
                    <input type="text" className='input' placeholder='00.00 COP' 
                    onChange={(e) => {
                        setAux(e.target.value);
                    }}/><br /><br />

                    <label htmlFor="salary">Día de pago</label><br />
                    <select name="" id="" className='input'
                    onChange={(e) => {
                        setDay(e.target.value);
                    }}>
                        <option value="15">15 y 30</option>
                        <option value="20">20 y 05</option>
                    </select><br /><br />
                    <label htmlFor="salary"
                    >Forma de pago</label><br />
                    <select name="" id="" className='input' 
                    onChange={(e) => {
                        setMethod(e.target.value);
                    }}>
                        <option value="Efectivo">Efectivo</option>
                        <option value="bC">Bancolombia</option>
                        <option value="Nequi">Nequi</option>

                    </select><br /><br />
                    <button>Definir salario</button><br />
                    <span>{error}</span>
                </form>
            </div>
        </div>
    )
}