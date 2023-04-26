import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ModalNewCategory(props){
    const business = props.business;
    const [name, setName] = useState(null);                 // Nombre
    const [password, setPassword] = useState(null);         // Password
    const [type, setType] = useState(null);                 // Tipo de existencia
    const [unidad, setUnidad] = useState(null);             // Unidad
    const [description, setDescription] = useState(null);   // Description
    const [mistake, setMistake] = useState(null);           // Description
    const [check, setCheck] = useState(null);               // Description

    


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
    }, [])
    const navigate = useNavigate();

    function createCategory(){
        const body = {
            businessId: business.id,
            nameBox:name,
            type,
            unidad,
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
                    navigate(`/business/inventary/box/${name}`);
                    document.body.style.overflowY = 'scroll';
                    navigate('/business/inventary/');
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
                <h1>Nueva categoría</h1>
                <button className="close-modal" aria-label="close modal" data-close onClick={() => {
                    document.body.style.overflowY = 'scroll';
                    navigate('/business/inventary/');
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
                                    <label htmlFor="name">Nombre de la categoría</label><br />
                                    <input type="text" className='input' onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>
                                <div className='responsive'>
                                    <label htmlFor="reference">Contraseña (Opcional)</label><br />
                                    <input type="password" className='input' id="reference" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}/><br />
                                </div>
                                <div className='responsive select'>
                                    <label htmlFor="name">Tipo de productos</label><br />

                                    <select name="" id="" className='input select' onChange={(e) => {
                                        setType(e.target.value.split(' ')[0]);
                                        setUnidad(e.target.value.split(' ')[1]);

                                    }}>
                                        <option value="producto unidad">Por consumo (Unidad)</option>
                                        <option value="liquidos unidas">Liquídos (Unidad)</option>
                                        <option value="liquidos litros">Liquídos (Litros)</option>
                                        <option value="Producto gramos">Por gramos, libras o kilos</option>
                                        <option value="fiscos unidades">Activos físicos</option>
                                        <option value="digitales">Activos digítales</option>
                                    </select><br />
                                    <span>Esto es importante al momento de contabilizar los producto.</span><br /><br />
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
                        Puedes agregar una contraseña para proteger esta categoría. Recomendable 
                        para categorías de alto valor o privacidad.
                    </span>
                </footer>
            </section>
        </div>
    </div>
    )
}