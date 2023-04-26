import react from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
export default function SellLoading(props){
    const sells = props.sells;
    const sell = useSelector(store => store.sell);
    const loadingSell = useSelector(store => store.loadingSell);
    return (
        <div>
            <div className='header-and-close'>
                <h1><Skeleton width={300}/></h1>
                <button onClick={() => {
                    document.querySelector("#info-sell").classList.toggle('container-register-sell-active');
                    dispatch(actions.ShowGetSell(null));
                }}>
                    <AiOutlineDown className="icon" />
                </button>
            </div>
            <div className='container-info-sells'>
                <div className='left-qr'>
                    <Skeleton height={200}/>
                    <Skeleton width={200} />
                    <Skeleton width={100}/>
                </div>
                <div className='rigth-container-items'>
                    <div className='info-sell'>
                        <Skeleton style={{float:'left', width:'30%', height:'20px'}} />
                        <Skeleton style={{float:'right' , width:'20%', height:'20px',marginTop: '-15px'}}/>
                        <Skeleton style={{float:'left', width:'30%', height:'20px'}} />
                        <Skeleton style={{float:'right' , width:'20%', height:'20px',marginTop: '-15px'}}/>
                    </div>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={1}>
                                    <td><Skeleton /></td>
                                    <td>
                                        <Skeleton height={40} circle={true} style={{float:'left', width:'15%'}}/>
                                        <Skeleton style={{display:'inline-block', width:'50%', marginLeft:'10px'}} />
                                    </td>
                                    <td>{<Skeleton />}</td>
                                    <td>{<Skeleton />} </td>
                                </tr>
                                <tr key={2}>
                                    <td><Skeleton /></td>
                                    <td>
                                        <Skeleton height={40} circle={true} style={{float:'left', width:'15%'}}/>
                                        <Skeleton style={{display:'inline-block', width:'50%', marginLeft:'10px'}} />
                                    </td>
                                    <td>{<Skeleton />}</td>
                                    <td>{<Skeleton />} </td>
                                </tr>
                                <tr key={3}>
                                    <td><Skeleton /></td>
                                    <td>
                                        <Skeleton height={40} circle={true} style={{float:'left', width:'15%'}}/>
                                        <Skeleton style={{display:'inline-block', width:'50%', marginLeft:'10px'}} />
                                    </td>
                                    <td>{<Skeleton />}</td>
                                    <td>{<Skeleton />} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}