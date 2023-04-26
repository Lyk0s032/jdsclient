import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CartaNewCategory(props){
    const business = props.business;
    const [img, setImg] = useState(null);         // IMG
    const [name, setName] = useState(null);                 // Nombre
    const [type, setType] = useState(null);                 // Tipo de existencia
    const [description, setDescription] = useState(null);   // Description
    const [mistake, setMistake] = useState(null);   // Description
    const [check, setCheck] = useState(null);   // Description

    


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
    }, [])
    const navigate = useNavigate();

    function createCategory(){
        const body = {
            businessId: business.id,
            nameBox:name,
            type,
            description
        }
        axios({
            method:'post',
            url: '/createInventaryBox',
            data: body
        })
        .then((response) => {
            if(response.status == 200){
                setCheck('Bien hecho!');
                setTimeout(() => {
                    navigate('/business/inventary');
                }, [1000]);
            }    
        })
        .catch((err) => {
                console.log(err);
            if(err.response.status == 404){
                setMistake('Este usuario no existe');

            }else if(err.response.status == 401){
                setMistake('Contraseña incorrecta');
                
            }
        });
    }
    return(
        <div className="modal-create-product" id="modal2">
        <div className="modal-dialog"> 
            <header className="modal-header">
                <h1>Nueva categoría para tus clientes</h1>
                <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                    document.body.style.overflowY = 'scroll';
                    navigate('/business/menu/');
                }}>
                    ✕  
                </button>
            </header>
            <section className="container-modal-createProduct">
                <div className='container-form'>
                    <form onSubmit={(e) => {
                        e.preventDefault();

                        if(!name || !type || !unidad ||!description){
                            setMistake('no puedes dejar campos vacios');
                        }else{
                            setMistake(null);
                            createCategory();
                        }
                    }}>
                        <div className='right center'>
                            <div className='form-inputs'>
                                <div className='responsive'>
                                    <label htmlFor="reference">Imagen </label><br />
                                    <img src={img} style={{maxWidth:'100%', height:'100px'}} alt="" /><br />
                                </div>
                                <div className='responsive'></div>
                                <div className='responsive'>
                                    <label htmlFor="reference">Imagen de la categoría (Enlace - URL)</label><br />
                                    <input type="text" className='input' id="reference" onChange={(e) => {
                                        setImg(e.target.value);
                                    }}/><br />
                                </div>
                                <div className='responsive'>
                                    <label htmlFor="name">Nombre</label><br />
                                    <input type="text" className='input' onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>
                                
                                <div className='responsive select'>
                                    <label htmlFor="name">Tipo de productos</label><br />

                                    <select name="" id="" className='input select' onChange={(e) => {
                                        setType(e.target.value);
                                    }}>
                                        <option value="entrada">Entrada</option>
                                        <option value="liquidos">Liquidos</option>
                                        <option value="rapido">Comida rápida</option>
                                        <option value="rapido">Formal</option>
                                        <option value="helados">Postres</option>

                                        
                                    </select><br />
                                    <span>Esto es importante</span><br /><br />
                                </div>


                                <div className='responsive select'>
                                    <label htmlFor="">Descripción de la categoría</label><br />
                                    <textarea name="description" id="" cols="30" rows="10" onChange={(e) => {
                                        setDescription(e.target.value);

                                    }}></textarea>
                                </div>
                                <input type="submit" value="Crear categoría" className='create-btn' /><br />
                                <span className='error'>{mistake}</span>
                                <span>{check}</span>

                            </div>
                        </div>
                    </form>
                </div>
                <footer className="modal-footer">
                    <span>
                            Tus clientes solo podrán ver el nombre de la categoría y los productos que 
                            contenta la misma.
                    </span>
                </footer>
            </section>
        </div>
    </div>
    )
}