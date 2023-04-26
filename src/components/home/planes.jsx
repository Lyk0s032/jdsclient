import react, { useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
export default function Planes(){
    useEffect(() => {
        document.querySelector("#navigate").style.backgroundColor = "white";
        document.querySelector("#navigate").style.borderBottom = "1px solid #ccc";

    })
    return (
        <div className='planes'>
            <div className='contenedores-box'>
                <div className='contenedor-item lade'>
                   <div className="center-titles">
                        <h1 className='name'>Plan uno</h1>
                        <h1 className='price'>69.999 <span>COP</span></h1>

                        <span>Por mes</span><br />

                        <button> Seleccionar </button>
                    </div> <br />
                    <div className='fotter'>
                            <strong>Plan completo </strong><br />
                        <div className='list'>
                            <span><AiOutlineCheck className='icon'/> Inventario automatizado</span><br />
                            <span><AiOutlineCheck className='icon'/> Estado financiero detallado</span><br />
                            <span><AiOutlineCheck className='icon'/> Nómina</span><br />
                            <span><AiOutlineCheck className='icon'/> Ventas</span><br />
                            <span><AiOutlineCheck className='icon'/> Estadisticas al detalle</span><br />
                            <span><AiOutlineCheck className='icon'/> Multiplataforma</span><br />
                            <span><AiOutlineCheck className='icon'/> Equipo de trabajo</span><br />
                            <span><AiOutlineCheck className='icon'/> Programación laboral</span><br />
                            <span><AiOutlineCheck className='icon'/> Facturación</span><br />
                            <span><AiOutlineCheck className='icon'/> etc</span><br />


                        </div>
                    </div>
                </div>
                <div className='contenedor-item'>
                    <div className='seller'><span>Más vendido</span></div>
                   <div className="center-titles">
                        <h1 className='name'>Dos año</h1>
                        <h1 className='price'>79.999 <span>COP</span></h1>

                        <span>Por mes</span><br />

                        <button> Seleccionar </button>
                    </div> <br />
                    <div className='fotter'>
                            <strong>Plan completo </strong><br />
                        <div className='list'>
                            <span><AiOutlineCheck className='icon'/> Inventario automatizado</span><br />
                            <span><AiOutlineCheck className='icon'/> Estado financiero detallado</span><br />
                            <span><AiOutlineCheck className='icon'/> Nómina</span><br />
                            <span><AiOutlineCheck className='icon'/> Ventas</span><br />
                            <span><AiOutlineCheck className='icon'/> Estadisticas al detalle</span><br />
                            <span><AiOutlineCheck className='icon'/> Multiplataforma</span><br />
                            <span><AiOutlineCheck className='icon'/> Equipo de trabajo</span><br />
                            <span><AiOutlineCheck className='icon'/> Programación laboral</span><br />
                            <span><AiOutlineCheck className='icon'/> Facturación</span><br />
                            <span><AiOutlineCheck className='icon'/> etc</span><br />


                        </div>
                    </div>

                    
                </div>
                <div className='contenedor-item lade'>
                   <div className="center-titles">
                        <h1 className='name'>Tres años</h1>
                        <h1 className='price'>69.999 <span>COP</span></h1>

                        <span>Por mes</span><br />

                        <button> Seleccionar </button>
                    </div> <br />
                    <div className='fotter'>
                            <strong>Plan completo </strong><br />
                        <div className='list'>
                            <span><AiOutlineCheck className='icon'/> Inventario automatizado</span><br />
                            <span><AiOutlineCheck className='icon'/> Estado financiero detallado</span><br />
                            <span><AiOutlineCheck className='icon'/> Nómina</span><br />
                            <span><AiOutlineCheck className='icon'/> Ventas</span><br />
                            <span><AiOutlineCheck className='icon'/> Estadisticas al detalle</span><br />
                            <span><AiOutlineCheck className='icon'/> Multiplataforma</span><br />
                            <span><AiOutlineCheck className='icon'/> Equipo de trabajo</span><br />
                            <span><AiOutlineCheck className='icon'/> Programación laboral</span><br />
                            <span><AiOutlineCheck className='icon'/> Facturación</span><br />
                            <span><AiOutlineCheck className='icon'/> etc</span><br />


                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}