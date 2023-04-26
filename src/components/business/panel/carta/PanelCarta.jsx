import React from "react";
import ModalNewProduct from "../../modals/addNewProduct";
import ModalNewCategory from "../../modals/addNewCategory";

import { useNavigate } from "react-router-dom";
import { MdNavigateBefore } from 'react-icons/md';
import { AiOutlineCodeSandbox, AiOutlinePlus, AiOutlineEdit, AiOutlineSetting, AiFillDelete} from 'react-icons/ai';
import { Routes, Route } from 'react-router-dom';
import CartaNewCategory from "./plus/CartaNewCategory";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PanelCarta(props){
    const business = props.business;
    const navigate = useNavigate();
    const category = useSelector(store => store.category);
    const loading = useSelector(store => store.loadingProductoDetails);

   
    return (
        <div>
            <div className='title'>
                <h3>
                    Tu carta
                </h3>
            </div>
            <div className='header-options-back'>
                <button onClick={() => navigate('/business')}><MdNavigateBefore className="icon" /> Regresar    </button>
            </div>
            {
                loading != false || category == null ? <h1>Loading...</h1> :
                        <div className='box-category-inventary'>
                            <h1 className='title-h1'>Tus categorías</h1>
                            <div className='scroll'>
                                {
                                    category.map((item) => {
                                        return (
                                            <div className='box-inventary' key={item.id} onClick={() =>
                                                {
                                                    navigate('box/'+item.nameCategory)
                                                }}>
                                                <div className="header-container white">
                                                    <img src={item.imgCategory} alt="" />
                                                    <h1>{item.nameCategory}</h1>
                                                    <AiOutlineCodeSandbox className='icon' /><strong>{item.productos.length} productos en la carta</strong>
                                                </div>
                                                <div className='container'>
                                                    <span>Nro de diferentes existencias: <strong>10</strong></span><br />
                                                    <span>Última actualización: <strong>{item.updatedAt.split('T')[0]}</strong></span>
                                                        <br /><br />
                                                    <span>Estado <strong>Todo en orden</strong></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
            }
            <div className='top-header-bottons'>
                <div className='left'>
                    <label htmlFor="number_elements">Elementos</label>
                    <select name="" id="number_elements">
                        <option value=""> 40</option>
                        <option value=""> 60</option>
                        <option value=""> 80</option>
                        <option value=""> 100</option>
                    </select>
                </div>
                <div className="right">
                    <form>
                        <input type="text" placeholder='Nro referencia o nombre del producto' />
                    </form>
                    <label htmlFor="">Categorias</label>
                    <select name="" id="category_id">
                        <option value="">Refrescos</option>
                        <option value="">Verduras</option>
                        <option value="">Carnes</option>
                        <option value="">Otros</option>
                    </select>
                    <button className="btn"  onClick={() => {
                        navigate('category/newCategory');
                    }} > <AiOutlinePlus className="icon"/> Categoría</button>
                    <button className="btn create" onClick={() => {
                        navigate('category/newProduct');
                    }}><AiOutlinePlus className="icon"/> Producto</button>

                </div>
            </div>
            <Routes>
                <Route path="category/newCategory" element={<CartaNewCategory business={business} />} />
            </Routes>
        </div>
    )
}