import react, { useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown, AiOutlineClose, AiOutlineBell } from 'react-icons/ai';
import Producto from './producto';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions';
import Count from './count';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from './list';
import Waiting from './waiting';
import Delivered from './delivered';

export default function QR(props){
    const storeP = props.storeP;
    const loadingStore = props.loadingStore;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(null);
    const params = useParams();
    const mesa = useSelector(store => store.mesa);
    const loadingMesa = useSelector(store => store.loadingMesa);

    useEffect(() => {
        dispatch(actions.AxiosGetMesa(storeP.id, params.ref, true))
    }, [params.ref])
    return (
            !mesa || loadingMesa == true ? 
            <h1>Cargando...</h1> : 
            mesa.state == 0 || mesa == 404 ? 
            <h1>No esta disponible. {console.log(mesa)}</h1>
            :
            <div className='pr'>
            <div className='filter-categories'>
                <h1>{mesa.business.name}</h1><br />
                <span>{mesa.business.description}</span><br /><br />
                <div className='scroll'>
                    {
                    !mesa.business.categorias.length ? <h1>No hay</h1> : 
                            
                    storeP.categorias.length >= 2 ?
                    <ul>
                        <li onClick={() => setFilter(null)}><button>Todo</button></li>
                        {
                        storeP.categorias.map((category) => {
                        return (
                            <li>
                                <button onClick={() => setFilter(category.nameCategory)}>
                                {
                                    category.nameCategory
                                }
                                </button>
                            </li>
                        )
                        })
                        }
                    </ul>
                    :
                    <ul>
                        {
                        storeP.categorias.map((category) => {
                        return (
                            <li>
                                <button onClick={() => setFilter(category.nameCategory)}>
                                    {
                                        category.nameCategory
                                    }
                                </button>
                            </li>
                        )
                        })
                        }
                    </ul>
                    }
                </div>
            </div>
            <div className='categories'>
                {
                !storeP.categorias.length ? <h1>No hay categorías disponibles</h1> :  
                storeP.categorias.map((category) => {
                if(!filter){
                    return (
                    <div className='category' key={category.id}>
                            <div className='category-header'>
                                <h2>{category.nameCategory} ({category.productos.length})</h2>
                        </div> 
                        <div className='container-category'>
                            {
                            !category.productos.length ? <h1>No hay productos en esta categoría</h1> :
                            category.productos.map((item) => {
                                return (
                                    <div className='item' key={item.id} onClick={() => {
                                        document.querySelector("#showProduct").classList.toggle('show-product-active');
                                        dispatch(actions.AxiosGetProductoQR(item));
                                    }}>
                                        <div className='img'>
                                            <img src={item.imgItem} alt="" />
                                        </div>
                                        <div className='container-div'>
                                            <div className='name'>
                                                <strong>{item.nameItem.slice(0,30)+'...'}</strong>
                                                <h3>{item.price} <span>COP</span></h3>
                                            </div>
                                            <div className='description'>
                                                <span>{item.details.slice(0,40)+'...'}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
    
                        </div>
                    </div>
                    )
                }else{
                    if(filter == category.nameCategory){
                        return (
                        <div className='category' key={category.id}>
                            <div className='category-header'>
                                <h2>{category.nameCategory} ({category.productos.length})</h2>
                            </div> 
                            <div className='container-category'>
                                {
                                !category.productos.length ? <h1>No hay productos en esta categoría</h1> :
                                category.productos.map((item) => {
                                return (
                                    <div className='item' key={item.id} onClick={() => {
                                        document.querySelector("#showProduct").classList.toggle('show-product-active');
                                        dispatch(actions.AxiosGetProductoQR(item));
                                    }}>
                                        <div className='img'>
                                            <img src={item.imgItem} alt="" />
                                        </div>
                                        <div className='container-div'>
                                            <div className='name'>
                                                <strong>{item.nameItem.slice(0,30)+'...'}</strong>
                                                <h3>{item.price} <span>COP</span></h3>
                                            </div>
                                            <div className='description'>
                                                <span>{item.details.slice(0,40)+'...'}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                                }
    
                        </div>
                    </div>
                        )
                    }
                }
                    return (
                        <div className='category' key={category.id}>
                            <div className='category-header'>
                                    <h2>{category.nameCategory} ({category.productos.length})</h2>
                            </div> 
                            <div className='container-category'>
                                    {
                                        !category.productos.length ? <h1>No hay productos en esta categoría</h1> :
                                        category.productos.map((item) => {
                                            return (
                                                <div className='item' key={item.id} onClick={() => {
                                                        document.querySelector("#showProduct").classList.toggle('show-product-active');
                                                        dispatch(actions.AxiosGetProductoQR(item));
                                                    }}>
                                                    <div className='img'>
                                                        <img src={item.imgItem} alt="" />
                                                    </div>
                                                    <div className='container-div'>
                                                        <div className='name'>
                                                            <strong>{item.nameItem.slice(0,30)+'...'}</strong>
                                                            <h3>{item.price} <span>COP</span></h3>
                                                        </div>
                                                        <div className='description'>
                                                            <span>{item.details.slice(0,40)+'...'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                </div>
                    ) 
                })

                }
            </div>
                {/* Producto para ver */}
                <div className='show-product' id="showProduct">
                    <Producto storeP={storeP} mesa={mesa} />
                </div>
                {/* Cuenta para ver dinero */}
                {
                    mesa.state == 2 && mesa.car.length >=1 ? 
                        mesa.car[0].estado == 'choosing' || mesa.car[0].estado == 'waiting' ?
                        <div className='fast-visition-count'>
                            <button className='take-count' onClick={() => {
                                document.querySelector('#finance-count').classList.toggle('watch-count-active');
                                document.querySelector('body').style.overflowY = "hidden";
                            }}>Mis pedidos</button>
                            <div className='info'>
                                <h2>{new Intl.NumberFormat().format(mesa.car[0].price)}<span>COP</span></h2>
                                <span>Valor actual</span>
                            </div>
                        </div>
                        : mesa.car[0].estado == 'iwannapay' ? 
                        <div className='fast-visition-count'>
                            <button className='take-count' onClick={() => {
                                document.querySelector('#finance-count').classList.toggle('watch-count-active');
                                document.querySelector('body').style.overflowY = "hidden";
                            }}><AiOutlineBell /> Pagando...</button>
                            <div className='info'>
                                <h2>{new Intl.NumberFormat().format(mesa.car[0].price)} <span>COP</span></h2>
                                <span>Valor actual</span>
                            </div>
                        </div>
                        :
                        <div className='fast-visition-count'>
                            <button className='take-count' onClick={() => {
                                document.querySelector('#finance-count').classList.toggle('watch-count-active');
                                document.querySelector('body').style.overflowY = "hidden";
                            }}>Pagar mi cuenta</button>
                            <div className='info'>
                                <h2>{new Intl.NumberFormat().format(mesa.car[0].price)} <span>COP</span></h2>
                                <span>Valor actual</span>
                            </div>
                        </div>
                    :null
                }
                {
                    mesa.state == 2 && mesa.car.length >=1  ?
                    
                        <div className='watch-count' id="finance-count">
                            {
                                mesa.car[0].estado == 'choosing' ?
                                    <List mesa={mesa} storeP={storeP}/>
                                : mesa.car[0].estado == 'waiting' ?
                                    <Waiting mesa={mesa} storeP={storeP} />
                                : mesa.car[0].estado == 'delivered' || mesa.car[0].estado == 'iwannapay' ?
                                    <Delivered mesa={mesa} storeP={storeP}/> 
                                : 
                                    <Count />
                            }
                            
                        </div>
                        
                    :null
                }
            </div>
    )
}