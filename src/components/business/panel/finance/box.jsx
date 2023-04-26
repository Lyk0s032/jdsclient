import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function BoxFinance(props){
    const sells = props.sells;
    const type = props.type;
    const [valor, setValor] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        let i = 0;
        let c = 0;
        sells.ventas.map((p) => {
            
            if(type == false){
                i = i + p.price;
                c = c + 1;
            }else{
                if(p.metodo == type){
                    i = i + p.price;  
                    c = c + 1;
                }
            }
            setCount(c);
            return setValor(i);
        }) 
    },[sells])  
    const navigate = useNavigate();
    return (
        <div className='item-small-finance'  onClick={() => {
            if(type == false){

            }else{
              navigate('type/'+type)
            }
        }}>
            <h3>{props.name}</h3>
            <h1>{new Intl.NumberFormat().format(valor)} <span>COP</span></h1>

            <strong> {count} </strong> <span className="txt">Este mes</span>
        </div>
    )
}