import react from 'react';
import Rute from '../rute';
import { AiFillCheckCircle, AiOutlineBorderlessTable, AiOutlineQrcode, AiOutlineCreditCard} from 'react-icons/ai';
import { MdOutlineMonetizationOn, MdPending, MdPeopleOutline } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';
import {BsStarFill } from 'react-icons/bs';

export default function Panel(){
    return (
        <div className='panel'>
            <div className='top'>
                <Rute />
            </div>
            { /* GENERAL */}
            <div className="div-container-component">
                <div className='title'>
                    <h3>Información general</h3>
                </div>
                <div className='large'>
                    <div className='container-img'>
                        <img src="https://images6.alphacoders.com/366/366291.jpg" alt="" />
                    </div>
                    <div className='panel-info-details'>
                        <nav>
                            <ul>
                                <li>
                                    <button>
                                        <AiFillCheckCircle className='icon'/>
                                        <span><strong>12</strong> Mesas activas</span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <AiFillCheckCircle className='icon'/>
                                        <span><strong>3</strong> Empleados</span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <MdPending className='icon pd'/>
                                        <span> Meta del día</span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <AiFillCheckCircle className='icon'/>
                                        <span>Quejas</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='small'>
                    <div className="img-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png" alt="" />
                    </div>
                    <div className="panel-info-details">
                        <h2>Estado</h2>
                        <AiFillCheckCircle className='icon'/><span>Abierto (Activo)</span>
                    </div>
                </div>
            </div>
            { /* GENERAL INFO */}
            <div className="div-container-component">
                <div className='list-box'>
                    <div className="small-box">
                        <div className='left'>
                            <strong>Vendido hoy</strong>
                            <h2>1.500.000<span>COP</span></h2>
                        </div>
                        <div className='right'>
                            <MdOutlineMonetizationOn className="icon" />
                        </div>
                    </div>
                    <div className="small-box">
                        <div className='left'>
                            <strong>Clientes del día</strong>
                            <h2>32<span>Atenciones</span></h2>
                        </div>
                        <div className='right'>
                            <MdPeopleOutline className="icon" />
                        </div>
                    </div>
                    <div className="small-box">
                        <div className='left'>
                            <strong> Gastos</strong>
                            <h2>1.500.000<span>COP</span></h2>
                        </div>
                        <div className='right'>
                            <AiOutlineBorderlessTable className="icon danger" />
                        </div>
                    </div>
                    <div className="small-box">
                        <div className='left'>
                            <strong>QR Abierto</strong>
                            <h2>150<span>Ocasiones</span></h2>
                        </div>
                        <div className='right'>
                            <AiOutlineQrcode className="icon" />
                        </div>
                    </div>
                    <div className="small-box">
                        <div className='left'>
                            <strong>Efectivo</strong>
                            <h2>950.000<span>COP</span></h2>
                        </div>
                        <div className='right'>
                            <FaMoneyBillAlt className="icon" />
                        </div>
                    </div>
                    <div className="small-box">
                        <div className='left'>
                            <strong>En pagos digítales</strong>
                            <h2>105.500.000<span>COP</span></h2>
                        </div>
                        <div className='right'>
                            <AiOutlineCreditCard className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            { /* GRAFICAS */}
            <div className="div-container-component">
                <div className='title'>
                    <h3>Estadisticas Generales</h3>
                </div>
                <div className='container-graphi'>
                    <div className='big-graphi'>
                        <div className='graphi'>
                            <img src="https://charts.livegap.com/2020/images/paper-es.png" />
                        </div>
                    </div>
                    <div className='smallest-graphi'>
                        <div className='small-graphi'>
                            <div className='graphi'>
                                <img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/doughnut-chart-example.svg" alt="" />
                            </div>
                        </div>
                        <div className='small-graphi'>
                            <div className='graphi'>
                                <img src="https://us.123rf.com/450wm/rubelhossain/rubelhossain2103/rubelhossain210301760/166287395-mostrando-47-y-53-por-ciento-aislado-sobre-fondo-blanco-57-47-por-ciento-gr%C3%A1fico-circular-s%C3%ADmbolo-de.jpg?ver=6" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            { /* PRODUCTO MÁS VENDIDO */}
            <div className="div-container-component">
                <div className='title'>
                    <h3>Productos más vendidos</h3>
                </div>
                <div className="container-products-list">
                    <div className="box-item-product">
                        <div className='container-img'>
                            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/04/Nachos-con-carne.jpg" alt="" />
                        </div>
                        <div className='info-item-food'>
                            <div className="info">
                                <span className="type-food">Comida rápida</span><br />
                                <strong className='name'>Nachos con carne molida</strong>
                                <h2 className='price'>75.000 <span>COP</span></h2>
                                <div className='stars'>
                                    <div className='container-stars'>
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                    </div> <span>10 opiniones</span>

                                </div>
                            </div>
                            <div className='buttons-hidden'><button>Revisar</button></div>

                        </div>
                    </div>
                    <div className="box-item-product">
                        <div className='container-img'>
                            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/04/Nachos-con-carne.jpg" alt="" />
                        </div>
                        <div className='info-item-food'>
                            <div className="info">
                                <span className="type-food">Comida rápida</span><br />
                                <strong className='name'>Nachos con carne molida</strong>
                                <h2 className='price'>75.000 <span>COP</span></h2>
                                <div className='stars'>
                                    <div className='container-stars'>
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                    </div> <span>10 opiniones</span>

                                </div>
                            </div>
                            <div className='buttons-hidden'><button>Revisar</button></div>

                        </div>
                    </div>
                    <div className="box-item-product">
                        <div className='container-img'>
                            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/04/Nachos-con-carne.jpg" alt="" />
                        </div>
                        <div className='info-item-food'>
                            <div className="info">
                                <span className="type-food">Comida rápida</span><br />
                                <strong className='name'>Nachos con carne molida</strong>
                                <h2 className='price'>75.000 <span>COP</span></h2>
                                <div className='stars'>
                                    <div className='container-stars'>
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                    </div> <span>10 opiniones</span>

                                </div>
                            </div>
                            <div className='buttons-hidden'><button>Revisar</button></div>

                        </div>
                    </div>
                    <div className="box-item-product">
                        <div className='container-img'>
                            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/04/Nachos-con-carne.jpg" alt="" />
                        </div>
                        <div className='info-item-food'>
                            <div className="info">
                                <span className="type-food">Comida rápida</span><br />
                                <strong className='name'>Nachos con carne molida</strong>
                                <h2 className='price'>75.000 <span>COP</span></h2>
                                <div className='stars'>
                                    <div className='container-stars'>
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                    </div> <span>10 opiniones</span>

                                </div>
                            </div>
                            <div className='buttons-hidden'><button>Revisar</button></div>

                        </div>
                    </div>
                    <div className="box-item-product">
                        <div className='container-img'>
                            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/04/Nachos-con-carne.jpg" alt="" />
                        </div>
                        <div className='info-item-food'>
                            <div className="info">
                                <span className="type-food">Comida rápida</span><br />
                                <strong className='name'>Nachos con carne molida</strong>
                                <h2 className='price'>75.000 <span>COP</span></h2>
                                <div className='stars'>
                                    <div className='container-stars'>
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                        <BsStarFill className="icon" />
                                    </div> <span>10 opiniones</span>

                                </div>
                            </div>
                            <div className='buttons-hidden'><button>Revisar</button></div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}