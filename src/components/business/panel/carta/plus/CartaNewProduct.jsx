import axios from 'axios';
import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../../../store/actions/actions';

export default function NewProductMenu(props){
    const business = props.business;
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nameProducto, setNameProduct] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [img, setImg] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [check, setCheck] = useState(null);

    function handleNewProductToMain(){
        if(!nameProducto || !description || !price || !img){
    
            setMistake('No puedes dejar ningún campo vacio');

        }else{
            setMistake(null);
            const body = {
                imgItem: img,
                nameItem:nameProducto,
                details:description,
                price,
                descuento:0,
                categoryId: props.box.id
            }
            axios({
                method:'post',
                url: '/items',
                data: body
            })
            .then((response) => {
                if(response.status == 200){
                    setCheck('Bien hecho!');
                    setTimeout(() => {
                        dispatch(actions.AxiosGetCategoryByID(params.name, business.id));  
                        navigate('/business/menu/box/'+params.name);  

                    }, [1000]);
                }    
            })
            .catch((err) => {
                    console.log(err);
                if(err.response.status == 404){
                    setMistake('Este usuario no existe');
    
                }else if(err.response.status == 401){
                    setMistake('No puedes dejar campos vacios');
                    
                }
            });
        }
    }
    return (
<div className="modal-create-product" id="modal2">
        <div className="modal-dialog"> 
            <header className="modal-header">
                <h1>{props.box.nameCategory} | Nuevo Producto en tu Menu</h1>
                <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                    document.body.style.overflowY = 'scroll';
                    navigate('/business/menu/box/'+props.box.nameCategory);
                }}>
                    ✕  
                </button>
            </header>
            <section className="container-modal-createProduct">
                <div className='container-form'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleNewProductToMain();
                    }}>
                        <div className='left'>
                            <div className='form-box'>
                                <div className='img'>
                                    <img src={img} alt="" />
                                </div>
                                <input type="text" className='input-img' placeholder='Escribe la url de tu imagen aquí'
                                onChange={(e) => {
                                    setImg(e.target.value);
                                }}/><br />
                            </div>
                        </div>
                        <div className='right'>
                            <div className='form-inputs'>
                                <div className='responsive'>
                                    <label htmlFor="name">Nombre del producto</label><br />
                                    <input type="text" className='input' onChange={(e) => {
                                        setNameProduct(e.target.value);
                                    }}/>
                                </div>
                                <div className='responsive'>
                                    <label htmlFor="name">Precio de venta</label><br />
                                    <input type="text" className='input' placeholder="00 COP" onChange={(e) => {
                                        setPrice(e.target.value);
                                    }} />
                                </div>
                                <div className='responsive select '>
                                    <label htmlFor="reference">Pequeña descripción</label><br />
                                    <textarea type="text" className='input' id="reference" onChange={(e) => {
                                        setDescription(e.target.value);
                                    }} /><br />
                                </div>
                                <div className='responsive select'>
                                    <span>Toda esta información es de vital importancia, por favor tenga precaución.</span><br /><br />
                                </div>
                                
                                
                                <input type="submit" value="Agregar producto al menu" className='create-btn' /><br /><br />
                                <span className='error'>{mistake}</span>
                                <span className='check'>{check}</span>
                            </div>
                        </div>
                    </form>
                </div>
                <footer className="modal-footer">
                    <span>
                        Una vez terminada la creación y configuración de este producto, aparecerá entre las opciones para que tus clientes lo puedan consumir. <br />
                        Cuando crees el producto, será necesario especificar que elementos consume de tu inventario. De lo contrario, la aplicación no podrá contabilizar de forma
                        precisa tus ventas, gastos y todo tu estado financiero. <br /><br />
                        Recuerda que JDS trabaja con Inteligencia artificial y fue diseñado para ayudarte. Por esta razón la información que introduzcas debe ser lo más clara posible. 
                    
                    </span>
                </footer>
            </section>
        </div>
    </div>
    )
}