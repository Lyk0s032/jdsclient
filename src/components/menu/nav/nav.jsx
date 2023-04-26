import React from "react";
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { MdOutlinePerson } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Nav(props){
    const storeP = props.storeP;
    return (
        <div className="nav-menu">
            <div className="center-nav">
                <div className="main-to-hidden-btn">
                    <button onClick={() => {
                        document.querySelector("#left-nav").classList.toggle('hidden-nav-categories-active');
                    }}>
                        <AiOutlineBars className="icon" />
                    </button>
                </div>
                <div className="logo">
                    <img src={storeP.profileLogo} alt="" />
                </div>
                <div className="nav-options-menu" id="carta-restaurant">
                    <div className="img-logo-responsive">
                        <img src={storeP.profileLogo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <span>Domicilio</span>
                        </li>
                        <li className="tell"> 
                            <button> Hacer pedido</button>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="hidden-nav-categories" id="left-nav">
                <div className="close">
                    <button onClick={() => {
                        document.querySelector("#left-nav").classList.toggle('hidden-nav-categories-active');
                    }}>
                        <AiOutlineClose className="icon" />
                    </button>
                </div>
                <div className="img">
                    <img src={storeP.profileLogo} alt="" />
                </div>
                <div className="categories">
                    <h3>Categorias</h3>
                    <ul>

                        {
                        !storeP.categorias.length ? <span>No hay categorias</span> :
                        storeP.categorias.map((item) => {
                            return (
                                <li key={item.id}>{item.nameCategory}</li>
                            )
                        })
                        }
                    </ul>
                </div>

                <div className="redes">
                    <h3>Nuestras redes</h3>
                    <ul>
                        <li>
                            <BsFacebook className="icon fb" />
                            <span>Facebook</span>
                        </li>

                        <li>
                            <BsInstagram className="icon ig" />
                            <span>Instagram</span>
                        </li>
                        <li>
                            <BsLinkedin className="icon lk" />
                            <span>Linkedin</span>
                        </li>
                    </ul>
                </div>
                <div className="login">
                    <div className="container">
                        <strong>Equipo</strong><br /><br />
                        <button className="btn-icon">
                            <MdOutlinePerson className="icon" />
                        </button><br /><br />
                        <span>
                            Inicie sesión para ofrecer una atención más personalizada.
                        </span><br />
                        <button className="enter">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}