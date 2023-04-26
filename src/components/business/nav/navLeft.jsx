import react from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard, 
    AiOutlineOrderedList, AiOutlineAppstoreAdd,
    AiOutlineMoneyCollect, AiOutlineSetting,
    AiOutlineInbox, AiOutlineLogout, AiOutlineCloseCircle, AiOutlineQrcode, AiOutlineCopyrightCircle} from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { ResponsiveMain } from './navF';


export default function NavLeft(props){
    const business = props.business;
    console.log(business);
    return (
        <div className='navLeft' id="navLeft">
            <div className='restaurant-profile'>
                <div className='img'>
                    <img src={business.profileLogo} alt="" />
                </div>
                <div className="restaurant-profile-info">
                    <h2>{business.name}</h2>
                    <span>Abierto</span>
                </div>
            </div>
            <div className='nav-div'>
                <div className='title'><AiOutlineAppstoreAdd className='icon' /><strong>Acción rápida</strong></div>
                <nav>
                    <ul>
                        <li>
                            <Link className="link" to="" onClick={() => ResponsiveMain()}>
                                <div>
                                    <AiOutlineDashboard className="icon" />
                                    <span>Principal</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/business/p/">
                                <div>
                                    <AiOutlineOrderedList className="icon" />
                                    <span>Pedidos</span>
                                </div>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>

            <div className='nav-div'>
                <div className="title"><AiOutlineMoneyCollect className='icon' /><strong>Finanzas e inventario</strong></div>
                <nav>
                    <ul>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="sells">
                                <div>
                                    <AiOutlineDashboard className="icon" />
                                    <span>Ventas</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="bills/">
                                <div>
                                    <AiOutlineOrderedList className="icon" />
                                    <span>Gastos</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="personal/">
                                <div>
                                    <BsPeople className="icon" />
                                    <span>Operarios</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="inventary">
                                <div>
                                    <AiOutlineInbox className="icon" />
                                    <span>Inventario</span>
                                </div>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            <div className='nav-div'>
                <div className="title"><AiOutlineSetting className='icon' /><strong>Diseño y Configuración</strong></div>
                <nav>
                    <ul>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/">
                                <div>
                                    <AiOutlineDashboard className="icon" />
                                    <span>Cuenta</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/">
                                <div>
                                    <AiOutlineOrderedList className="icon" />
                                    <span>Cuentas</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/business/menu">
                                <div>
                                    <AiOutlineLogout className="icon" />
                                    <span>Menu</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/business/qr">
                                <div>
                                    <AiOutlineQrcode className="icon" />
                                    <span>Código QR y mesas</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link"
                            onClick={() => ResponsiveMain()}
                            to="/">
                                <div>
                                    <AiOutlineCloseCircle className="icon" />
                                    <span>Privacidad</span>
                                </div>
                            </Link>
                        </li>

                        
                    </ul>
                </nav>
            </div>
            <div className='fotter-left'>
                <AiOutlineCopyrightCircle className="icon" />
                <span>By JeanDS</span>
            </div>
        </div>
    )
}