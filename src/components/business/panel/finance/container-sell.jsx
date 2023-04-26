import react from 'react';
import * as actions from '../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import SellLoading from './loading/container-sellLoading';
export default function Sell(props){
    const sells = props.sells;
    const sell = useSelector(store => store.sell);
    const loadingSell = useSelector(store => store.loadingSell);
    const dispatch = useDispatch();
    return (
        loadingSell == true || !sell ? 
        <SellLoading />
        :
        <div>
            <div className='header-and-close'>
                <h1>Venta número 1</h1>
                <button onClick={() => {
                    document.querySelector("#info-sell").classList.toggle('container-register-sell-active');
                    dispatch(actions.ShowGetSell(null));
                }}>
                    <AiOutlineDown className="icon" />
                </button>
            </div>
            <div className='container-info-sells'>
                <div className='left-qr'>
                    <img src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg" alt="" />
                    <h3>Mesa número 1</h3>
                    <button>Descargar</button>
                </div>
                <div className='rigth-container-items'>
                    <div className='info-sell'>
                        <h2>Valor <span>{sell.price} COP</span></h2><br />
                        <strong>Metódo de pago <span>{sell.metodo}</span></strong>
                    </div>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='responsive-h'>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sell.items.length ? 
                                    sell.items.map((item,i) => {
                                        return (
                                            <tr key={item.id} >
                                                <td className='responsive-h'>{i+1}</td>
                                                <td>
                                                    <img src={item.imgItem} alt="" />
                                                    {item.nameItem.substr(0, 20)+'...'}
                                                </td>
                                                <td>{item.price} COP</td>
                                                <td>{item.chosee.cantidad} </td>
                                            </tr>
                                        )
                                    })
                                    : <span>No hay productos</span>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}