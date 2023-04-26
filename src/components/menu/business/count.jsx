import react from 'react';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

export default function Count(){
    useEffect(() => {
    }, []);
    return (
        <div className='counter-pay'>
            <div className='close'>
                <button onClick={() => {
                    document.querySelector('#finance-count').classList.toggle('watch-count-active');
                    document.querySelector('body').style.overflowY = "auto";

                }}>
                    <AiOutlineClose className='icon' />
                </button>
            </div>
            <div className='header'>
                <div className='price'>
                    <strong>Valor actual</strong>
                    <h1>147.000 <span>COP</span></h1>
                    
                    <div className='button'>
                        <button>Pedir cuenta </button>
                    </div>
                </div>
            </div>
            <div className='table-products'>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Hora</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                            <tr>
                                <td>Hamburguesa small</td>
                                <td>1</td>
                                <td>18:30 PM</td>
                                <td>|7.000 COP</td>
                            </tr>
                            <tr>
                                <td>Pizza extra grande</td>
                                <td>1</td>
                                <td>18:30 PM</td>
                                <td>47.000 COP</td>
                            </tr>
                            
                            <tr>
                                <td>Pizza extra grande</td>
                                <td>1</td>
                                <td>18:30 PM</td>
                                <td>47.000 COP</td>
                            </tr>
                            <tr>
                                <td>Hamburguesa small</td>
                                <td>1</td>
                                <td>18:30 PM</td>
                                <td>7.000 COP</td>
                            </tr>
                            <tr>
                                <td>Pizza extra grande</td>
                                <td>1</td>
                                <td>18:30 PM</td>
                                <td>47.000 COP</td>
                            </tr>
                            
                        </tbody>
                        <thead className='total'>
                        <tr>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th><h1>147.000 <span>COP</span></h1></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}