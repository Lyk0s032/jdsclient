import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { AiFillDelete, AiOutlineEdit, AiOutlineArrowDown,AiOutlineAppstoreAdd, AiOutlineStop, AiOutlineDown, AiOutlineCheck} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../../../store/actions/actions';
export default function ProductoInfo(props){
    const dispatch = useDispatch();
    const params = useParams();
    const business = props.business;
    const producto = useSelector(store => store.productToShowMenu);
    const Loading = useSelector(store => store.loadingProductToShowMenu);
    const inventary = useSelector(store => store.inventaryBox);
    const loadingInventary = useSelector(store => store.loadingInventaryBox);

    const [search, setSearch] = useState(true)
    const [index, setIndex] = useState(null);
    const [error, setError] = useState(null);
    const [edit, setEdit] = useState(null);

    // Elementos a enviar para actualizar producto.
    const [img, setImg] = useState(null);
    const [name, setName] = useState(null);
    const [valor, setValor] = useState(null);
    const [description, setDescription] = useState(null);
    const [descuento, setDescuento] = useState(null);

    console.log(inventary);
    // Actualizar el número de consumo por venta.
    function updateHowManyReceta(cantidad, itemId, productoId){
        const body = {
            cantidad,
            itemId,
            productoId
        }
        axios({
            method:'post',
            url: '/receta',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                dispatch(actions.AxiosGetInventaryBox(business.id));
                setError(null);
            }    
        })
        .catch((err) => {
                console.log(err);
            if(err.response.status == 404){
                setError('Ha ocurrido un error');

            }else if(err.response.status == 401){
                setError('Ha ocurrido un error');
            }
        });
    }

    // Actualizar la información del producto

    const [mistakeUpdate, setMistakeUpdate] = useState(null);
    const [update, setUpdate] = useState(null);

    function updateProduct(itemId){
        const body = {
            imgItem: img,
            nameItem: name,
            details: description,
            price: valor,
            descuento,
            itemId
        }

        if(!body.imgItem || !body.nameItem || !body.details || !body.price || !itemId){
            setUpdate(null);
            setMistakeUpdate('No puedes dejar campos vacios');
        }else{
            // dispara la acción del axios
            axios({
                method:'put',
                url: '/items/update',
                data: body
            })
            .then((response) => {
                if(response.status == 200){
                    setUpdate('¡Actualizado con éxito!');
                    setMistakeUpdate(null);
                }    
            })
            .catch((err) => {
                    console.log(err);
                if(err.response.status == 404){
                    setUpdate(null);
                    setMistakeUpdate('Ha ocurrido un error');
                    
    
                }else if(err.response.status == 401){
                    setUpdate(null);
                    setMistakeUpdate('Ha ocurrido un error');
                }
            });
        }


    }

    // useEffect
    useEffect(() => {
        dispatch(actions.AxiosGetInventaryBox(business.id)); 
    }, [])
     
    return ( 
        !Loading 
        ? 
        <div className="f" >
            <div className='facture' id="facture">
                {/* <FactureProduct business={business} producto={producto} index={index}/> */}
            </div>
            <div className='top-hidden'>
                <button onClick={() => {
                    const productEspecifity = document.querySelector("#productEspecifity").classList.toggle("info-categoryActive");
                    // Al cerrar, refresque la categoría del menu
                    dispatch(actions.AxiosGetCategoryByID(params.name, business.id));  

                }}><AiOutlineArrowDown /></button>
            </div>


            <div className='add-producto-to-receta' id="addReceta">
                <div><button className='hidden' 
                onClick={() => {
                        document.querySelector("#addReceta").classList.toggle('add-producto-to-receta-active');
                        dispatch(actions.ShowGetProductToMenuModal(producto));
                }}><AiOutlineDown className="icon" />Ocultar</button></div>
               <div className='header-list-producs'>
                    <h1>Agrega los consumibles</h1>
               </div>
                {
                    loadingInventary != false || !inventary ? <h1>Cargando...</h1> :
                    
                <div className='scroll-container-products'>
                                    <strong>{error}</strong>

                    {
                        inventary.inventario.map((item) => {

                            return (
                                <div className='box-inventary' key={item.id}>
                                    <div className='title'><strong>{item.nameBox}</strong></div>
                                    <table className='div-container-info-select-div'>
                                        {
                                            !item.productos.length ? <span>No hay productos en esta caja</span> :
                                            item.productos.map((pr,i) => {
                                                const a = producto.products.filter((item) => item.receta.productId == pr.id);
                                                let t = 0;// Cantidad

                                                if(!a.length) { console.log('no existe, esta vacio')
                                                }else {
                                                    console.log({msg: 'si existe', a})
                                                    t += a[0].receta.cantidad;
                                                }
                                                return (
                                                    <tr key={pr.id}>
                                                        <td><img src={pr.imgProfile} alt="" /></td>
                                                        <td><span>{pr.nameProduct}</span></td>
                                                        <td><strong>{pr.price} COP</strong></td>
                                                        <td >
                                                            <span>Unidad <strong id={'valor'+pr.id} value={t}>{t}</strong></span>
                                                        </td>
                                                        <td>
                                                            {
                                                                <button onClick={() => {
                                                                   if(Number(document.querySelector('#valor'+pr.id).innerHTML) - 1 >= 0){
                                                                        updateHowManyReceta(-1, producto.id, pr.id);
                                                                        document.querySelector("#valor"+pr.id).innerHTML = Number(document.querySelector("#valor"+pr.id).innerHTML) - 1;
                                                                   }
        
                                                                }}>-</button>
                                                            }
                                                        </td>
                                                        
                                                        <td><button onClick={() => {
                                                            updateHowManyReceta(1, producto.id, pr.id)
                                                            dispatch(actions.AxiosGetInventaryBox(business.id)); 
                                                            
                                                            document.querySelector("#valor"+pr.id).innerHTML = Number(document.querySelector("#valor"+pr.id).innerHTML) + 1;
                                                        }}>+</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>



            <div className='scroll-div'>
                <div className='container-scroll'>
                    <div className='left'>
                        <img src={producto.imgItem} alt="" />
                    </div>
                    <div className='right'>
                        <h3>{producto.nameProduct}</h3>
                        <div className="info">
                            {
                                edit ? <div className='form-edit'>
                                    <table className="content-table">
                                        <thead className="top-titles"> 
                                            <tr> 
                                                <th></th> 
                                                <th></th> 
                                            </tr> 
                                        </thead> 
                                            <tr> 
                                                <td>Nombre</td> 
                                                <td><input className="input-change-valors" defaultValue={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}/></td> 
                                            </tr>
                                            <tr> 
                                                <td>Precio de venta</td> 
                                                <td><input className="input-change-valors" defaultValue={valor}
                                                onChange={(e) => {
                                                    setValor(e.target.value);
                                                }}/> COP</td> 
                                            </tr>
                                            <tr> 
                                                <td>Descripción</td> 
                                                <td><textarea className="textarea-change-valors" defaultValue={description}
                                                onChange={(e) => {
                                                    setDescription(e.target.value);
                                                }}/></td> 
                                            </tr>
                                            <tr> 
                                                <td>Descuento (Porcentaje)</td> 
                                                <td>
                                                    <input className="input-change-valors" defaultValue={descuento} 
                                                    onChange={(e) => {
                                                        setDescuento(e.target.value);
                                                    }}/> %                                                  
                                                </td> 
                                            </tr>
                                            {
                                                name != producto.nameItem || description != producto.details || valor != producto.price || descuento != producto.descuento ? 
                                                <button className='update' onClick={() => {
                                                    updateProduct(producto.id);
                                                }}>Confirmar cambios</button>:null
                                            }
                                        <br />
                                        <span className='error' style={{"fontSize":"12px", "color": "green", "marginLeft": "10px"}}>{update}</span>
                                        <span className='error' style={{"fontSize":"12px", "color": "red", "marginLeft": "10px"}}>{mistakeUpdate}</span>

                                    </table>
                                </div> :
                            
                                <table className="content-table">
                                    <thead className="top-titles"> 
                                        <tr> 
                                            <th></th> 
                                            <th></th> 
                                        </tr> 
                                    </thead> 
                                        <tr> 
                                            <td>Nombre</td> 
                                            <td><strong>{producto.nameItem}</strong> </td> 
                                        </tr>
                                        <tr> 
                                            <td>Precio de venta</td> 
                                            <td>{producto.price} COP</td> 
                                        </tr>
                                        <tr> 
                                            <td>Descripción</td> 
                                            <td>{producto.details}</td> 
                                        </tr>
                                        <tr> 
                                            <td>Descuento (Porcentaje)</td> 
                                            <td>
                                                {
                                                producto.descuento + '%' 
                                                }                                            
                                            </td> 
                                        </tr>
                                        <tr> 
                                            <td>Estado</td> 
                                            <td>
                                                {
                                                producto.state 
                                                }                                            
                                            </td> 
                                        </tr>

                                </table>
                                }
                            <div className="buttons-actions">
                                <button className='add' onClick={() => {
                                    document.querySelector("#addReceta").classList.toggle('add-producto-to-receta-active');
                                }}><AiOutlineAppstoreAdd className="icon"  />Editar receta</button>
                                {
                                    edit ?                                     
                                    <button className='add' onClick={() => {
                                        setEdit(null);
                                        setImg(null);
                                        setName(null);
                                        setValor(null);
                                        setName(null);
                                        setDescuento(null);

                                        
                                    }}><AiOutlineEdit className="icon"  />Cancelar</button>
                                    :
                                    <button className='add' onClick={() => {
                                        setEdit(true)
                                        setImg(producto.imgItem);
                                        setName(producto.nameItem);
                                        setValor(producto.price);
                                        setDescription(producto.details);
                                        setDescuento(producto.descuento);
                                    }}><AiOutlineEdit className="icon"  />Actualizar información</button>
                                }
                                {
                                    producto.state == 'pending' || producto.state == 'notavailable'? 
                                        <button className='add green' onClick={async () =>{
                                            axios({
                                                method:'put',
                                                url: '/items/update/state',
                                                data: {
                                                    itemId: producto.id,
                                                    state: 'available'
                                                }
                                            }).then((item) => {
                                                    dispatch(actions.AxiosGetCategoryByID(params.name, business.id));  
                                            })
                                        }}><AiOutlineCheck className="icon" />Habilitar</button> 
                                    :   <button className='add' onClick={async () =>{
                                        axios({
                                            method:'put',
                                            url: '/items/update/state',
                                            data: {
                                                itemId: producto.id,
                                                state: 'notavailable'
                                            }
                                        }).then((item) => {
                                                dispatch(actions.AxiosGetCategoryByID(params.name, business.id));  
                                        })
                                    }}><AiOutlineStop className="icon"  />Suspender</button>  
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-history'>
                    <h3>Consumo por producción</h3>
                        <div className='table-history'>
                            <table className="content-table">
                                <thead className="top-titles">
                                    <tr>
                                        <th>Producto</th> 
                                        <th>Cantidad</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !producto.products.length ? <span>Pendiente</span> :
                                        producto.products.map((item) => {
                                            return (
                                                <tr key={item.id}>  
                                                    <td><span className='date'>{item.nameProduct}</span></td> 
                                                    <td><span>{item.receta.cantidad}</span></td> 
                                                    <td><strong>{item.price} COP</strong></td> 
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody> 
                            </table>
                        </div>
                </div>
            </div>

        </div> 
        : 
        <h1>Carganxxod...</h1>
    )
}