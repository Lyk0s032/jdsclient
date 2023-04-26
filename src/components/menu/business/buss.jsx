import react, { useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../store/actions/actions';

export default function Buss(props){
    const storeP = props.storeP;
    const loadingStore = props.loadingStore;

    return (
            loadingStore == true || !storeP ?
            <div className='loadingBusiness'><h1>Cargando...</h1></div> :
            <div className='pr'>
            
            <div className='container-img'>
                <div className='container-slider-img'>
                    
                    <div className='butons-div'>
                        <button className='left'><AiOutlineLeft className="icon" /></button>
                        <button className='right'><AiOutlineRight className="icon" /></button>
                    
                    </div>
                   <img src="https://www.starbucks.com.om/sites/starbucks-om/files/styles/c03_image_text_1133x476/public/2022-11/SBX%20WC%20horizontal%20Banner%201133%20x%20476%20Eng%20.jpg.webp?itok=WriH2cfu" alt="" />
               
                </div>
            </div>
            <div className='filter-categories'>
                <div className='scroll'>
                    <ul>
                    {
                            !storeP.categorias.length ? <h1>No hay</h1> : 
                            storeP.categorias.map((category) => {
                                return (
                                    <li>
                                        <button>
                                        {
                                            category.nameCategory
                                        }
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>


                </div>
            </div>

            <div className='categories'>
                {
                  !storeP.categorias.length ? <h1>No hay categorías disponibles</h1> :  
                  storeP.categorias.map((category) => {
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
            <div className='show-product' id="showProduct">
                <div className='close-div'>
                    <button className='close' onClick={() => {
                        document.querySelector("#showProduct").classList.toggle('show-product-active');
                    }}><AiOutlineClose /></button>
                </div>
                <div className='container-product-to-show'>
                    <div className='container-img'>
                        <img src="https://pbs.twimg.com/ext_tw_video_thumb/1631777564497944576/pu/img/eh0ePUAHzPIddH4w?format=jpg&name=4096x4096" alt="" />
                    </div>
                    <div className='container-description-product'>
                        <div className='title'>
                            <h1>Capuchino</h1>
                            <div className='price'>
                                <h2>
                                    7,600 <span>COP</span>
                                </h2>
                                <span className='descuento'>10% descuento</span>
                            </div>
                        </div>
                        <div className='description'>
                            <div className='title'>
                                <strong>Descripción</strong>
                            </div>
                            <div className='des'>
                                <span>Delicioso capuchino para disfrutar en familia.</span>

                            </div>
                        </div>
                        <div className='adition'>
                            <ul>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                                <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li> <li>
                                    <div className='plus'>
                                        <input type="checkbox" className='checkbox' />
                                        <div className='desc'>
                                            <h3>Extra queso</h3>
                                            <span>3.000 COP</span>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                        </div>
                        <div className='add'>
                            <button>Agregar</button>
                            <h2>34.000 <span>COP</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
