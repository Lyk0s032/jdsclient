import react from 'react';
import NavLeft from './navLeft';
import { AiOutlineBars, AiOutlineSearch, AiOutlineSetting} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import {MdOutlineNotificationsNone, MdOutlineAccountCircle} from 'react-icons/md';
import { ResponsiveMain } from './navF';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NavBar(props){
    const usuario = useSelector(store => store.usuario);

    const navigate = useNavigate();
    return (
        <div className='' id="nav-jds">
            <div className="navBar">
                <div className="jds">
                <button onClick={() => { ResponsiveMain() }}><AiOutlineBars className='icon'/></button>
                    <h2 className='icon'>JDS</h2>
                </div>
                <div className="navRight">
                    <ul>
                        <li>
                            <button>
                                <AiOutlineSearch className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button>
                                <MdOutlineNotificationsNone className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                navigate('/business/configuration');
                            }}>
                                <AiOutlineSetting className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button>
                                <MdOutlineAccountCircle className='icon'/>
                                <span>{usuario.name}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <NavLeft business={props.business} />
        </div>
    )
}