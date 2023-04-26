import react, { useState } from 'react';
import { AiFillDelete, AiOutlineEdit, AiOutlineArrowDown,AiOutlineAppstoreAdd, AiOutlineStop } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import FactureProduct from './facture';

export default function ProductDetails(props){
    const business = props.business;
    const producto = useSelector(store => store.productToShowInventary);
    const Loading = useSelector(store => store.loadingProductToShowInventary);

    const [index, setIndex] = useState(null);
    console.log(producto);
    console.log(Loading);
    return ( 
        !Loading 
        ? 
        <div className="f" >
            <div className='facture' id="facture">
                <FactureProduct business={business} producto={producto} index={index}/>
            </div>
            <div className='top-hidden'>
                <button onClick={() => {
                    document.querySelector("body").style.overflowY = 'auto';
                    const productEspecifity = document.querySelector("#productEspecifity").classList.toggle("info-categoryActive");}}><AiOutlineArrowDown /></button>
            </div>
            <div className='scroll-div'>
                <div className='container-scroll'>
                    <div className='left'>
                        <img src={producto.imgProfile} alt="" />
                    </div>
                    <div className='right'>
                        <h3>{producto.nameProduct}</h3>
                        <div className="info">
                            <table className="content-table">
                                <thead className="top-titles"> 
                                    <tr> 
                                        <th></th> 
                                        <th></th> 
                                    </tr> 
                                </thead> 
                                    <tr> 
                                        <td>Cantidad disponible</td> 
                                        <td>{producto.cantidadActual}</td> 
                                    </tr>
                                    <tr> 
                                        <td>Valor Unidad</td> 
                                        <td>{producto.price} COP</td> 
                                    </tr>
                                    <tr> 
                                        <td>Valor total</td> 
                                        <td>{producto.price * producto.cantidadActual} COP</td> 
                                    </tr>
                                    <tr> 
                                        <td>Proveedor</td> 
                                        <td>
                                            {
                                                
                                            }                                            
                                        </td> 
                                    </tr>
                                    <tr> 
                                        <td>Última inversión</td> 
                                        <td></td> 
                                    </tr> 
                            </table>
                            <div className="buttons-actions">
                                <button className='add'><AiOutlineAppstoreAdd className="icon" />Agregar más</button>
                                <button className='add'><AiOutlineEdit className="icon" />Actualizar información</button>
                                <button className='add'><AiOutlineStop className="icon" />Suspender</button>
                                <button className='add'><AiFillDelete className="icon" />Eliminar</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-history'>
                    <h3>Historial de compras</h3>
                        <div className='table-history'>
                            <table className="content-table">
                                <thead className="top-titles"> 
                                    <tr> 
                                        <th>Fecha de regístro</th> 
                                        <th className="responsive-h">Valor</th>
                                        <th>Cantidad</th>
                                        <th className="responsive-h">A nombre de</th>
                                        <th ></th>
                                    </tr> 
                                </thead> 
                                <tbody>
                                    {
                                        !producto.registros.length ? 
                                            <h2>No hay registros de compra aun.</h2>
                                        :
                                        producto.registros.map((item, i) => {
                                            return (
                                                <tr key={item.id}> 
                                                    <td><span className='date'>{item.fechaCompra.split("T")[0]}</span></td> 
                                                    <td className="responsive-h"><span>{item.precioTotal}</span></td> 
                                                    <td><strong>{item.cantidad}</strong></td> 
                                                    <td className="responsive-h"><span>Kevin Andrés Bolaños</span></td> 
                                                    <td ><button onClick={() =>
                                                    {
                                                        const facture = document.querySelector("#facture").classList.toggle("factureActive");
                                                        setIndex(i);
                                                    }}>Ver factura</button></td>
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