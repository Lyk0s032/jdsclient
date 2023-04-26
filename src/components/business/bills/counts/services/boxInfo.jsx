import react, { useEffect, useState } from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function BoxCurrentlyPayed(props){
    const service = props.service;
    console.log(service);
    const [valor, setValor] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
        let j = 0;
        service.searchPagoServices.map(async (i,p)=> {
            j = j + i.valor
            
        })
        return setValor(j);

        
    }, [service]);
    return (
        <div className='item-small-finance' >
            <h3>Realizado en Pagos</h3>
            <h1>{new Intl.NumberFormat().format(valor)} <span>COP</span></h1>
        </div>
    )
}