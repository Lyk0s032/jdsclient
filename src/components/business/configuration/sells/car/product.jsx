import React from "react";

export default function ProductToCar(){
    return (
            <div>
                <div className='close'>
                    <button onClick={() => {
                        document.querySelector("#see-product").classList.toggle('see-product-active');
                    }}>x</button>
                </div>
                <div className='info-left-product'>
                    <div className='img'>
                        <img src="https://bakeitwithlove.com/wp-content/uploads/2022/01/what-to-serve-with-burgers-sq.jpg" alt="imgProducto" />
                    </div>
                    <div className='info-producto-modal'>
                        <h3>Hamburguesa</h3>
                        <span>Precio/u <h1>12.000 <span> COP</span></h1></span>
                    </div>
                </div>
                <div className='form-right-product'>

                    <h3 className='txt-config'>Especifica al venta</h3>
                    <form>
                        <div className='containerForm'>
                            <label>Cantidad</label><br />
                            <input type="text" className='input' defaultValue={0}/>
                        </div>
                        <div className='container-btn'>
                            <input type="submit" className="btn" value="Agregar al carrito" />
                        </div>
                    </form>
                </div>
            </div>
    )
}