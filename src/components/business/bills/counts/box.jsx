import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoxHowManyServices(props){
    const services = props.services;
    const [valor, setValor] = useState(0);
    
    const navigate = useNavigate();
    return (
        <div className='item-small-finance' onClick={() => {
            navigate('/business/configuration/services');
        }} >
            <h3>Nro Servicios</h3>
            <h1>{services.searchServices.length}</h1>
        </div>
    )
}