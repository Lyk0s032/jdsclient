import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../store/actions/actions';
import { useDispatch } from 'react-redux';

export default function ModalNewProduct(props){
    const [nameProducto, setNameProduct] = useState(null);
    const [description, setDescription] = useState(null);
    const [howMany, setHowMany] = useState(null);
    const [price, setPrice] = useState(null);
    const [img, setImg] = useState(null);
    const [mistake, setMistake] = useState(null);
    const [check, setCheck] = useState(null);

    const params = useParams();
    const dispatch = useDispatch();

    function handleNewProduct(){
        if(!nameProducto || !howMany || !price || !img){
            setMistake('No puedes dejar campos vacios');
        }else{
            setMistake(null);
            const body = {
                img,
                nameProduct:nameProducto,
                details:description,
                price,
                unidad:props.box.unidad,
                cantidadActual: howMany,
                boxId: props.box.id,
                businessId: props.business.id
            }
            axios({
                method:'post',
                url: '/inventary/createProduct/new',
                data: body
            })
            .then((response) => {
                if(response.status == 200){
                    setCheck('Bien hecho!');
                    setTimeout(() => {
                        dispatch(actions.AxiosGetBoxById(props.business.id,params.name));  
                        document.body.style.overflowY = 'scroll';
                        navigate('/business/inventary/box/'+props.box.nameBox);
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

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    })
    const navigate = useNavigate();
    return(
        <div className="modal-create-product" id="modal2">
        <div className="modal-dialog"> 
            <header className="modal-header">
                <h1>{props.box.nameBox} | Nuevo Producto</h1>
                <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                    document.body.style.overflowY = 'scroll';
                    navigate('/business/inventary/box/'+props.box.nameBox);

                }}>
                    ✕  
                </button>
            </header>
            <section className="container-modal-createProduct">
                <div className='container-form'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleNewProduct();
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
                                    <label htmlFor="reference">Pequeña descripción</label><br />
                                    <input type="text" className='input' id="reference" onChange={(e) => {
                                        setDescription(e.target.value);
                                    }} /><br />
                                </div>
                                <div className='responsive select'>
                                    <span>Toda esta información es de vital importancia, por favor tenga precaución.</span><br /><br />
                                </div>
                                <div className='responsive'>
                                    <label htmlFor="name">Cantidad actual</label><br />
                                    <input type="number" className='input' onChange={(e) => {
                                        setHowMany(e.target.value);
                                    }} />
                                </div>
                                <div className='responsive'>
                                    <label htmlFor="name">Precio por unidad</label><br />
                                    <input type="text" className='input' onChange={(e) => {
                                        setPrice(e.target.value);
                                    }} />
                                </div>
                                
                                <input type="submit" value="Agregar producto" className='create-btn' /><br /><br />
                                <span className='error'>{mistake}</span>
                                <span className='check'>{check}</span>
                            </div>
                        </div>
                    </form>
                </div>
                <footer className="modal-footer">
                    <span>
                        Por favor, maneje con seriedad y discresión el control de productos en su inventario. <br />
                        Esta plataforma fue diseñada para ayudarle en la gestión del inventario y finanzas de su empresa, con 
                        la intención de automatizar sus procesos. Para garantizar un desempeño increible, le sugerimos 
                        que maneje con cautela la creación e ingreso de nuevos productos. 
                    
                    </span>
                </footer>
            </section>
        </div>
    </div>
    )
}