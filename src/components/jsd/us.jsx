import react from 'react';
import Jeands from './assets/jeands.png';

export default function Us(){
    return(
        <div className='containerall'>
                        <div className="quien">
                            
                            <div>
                                <section className="contenedor-nosotros">
                                    <div className="contenedor-sobre-nosotros">
                                        <div className="container-lado">
                                            <div className="container-text">
                                                    <h3>¿Quienes somos?</h3>
                                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>
                                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>

                                            </div>
                                        </div>
                                        <div  className="container-lado">
                                            <img className="imagen left" src={Jeands} alt="contentos" />
                                        </div>
                                    </div>
                                    <div className="contenedor-sobre-nosotros">
                                        <div className="container-lado">
                                            <img className="imagen rigth" src={Jeands} alt="contentos" />
                                        </div>
                                        <div className="container-lado">
                                            <div className="container-text">
                                                <h3>Nuestra misión y visión</h3>
                                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>
                                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>
            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contenedor-sobre-nosotros last">
                                        <div className="container-lado">
                                            <div className="container-text">
                                                <h3>Agradecimientos</h3>
                                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>
                                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis amet, culpa porro optio officia minima aspernatur tempore quia enim modi voluptatibus ducimus rerum et eum voluptates veniam vitae, deleniti suscipit.</span>
                
                                            </div>
                                        </div>
                                        <div  className="container-lado">
                                            <img className="imagen left" src={Jeands} alt="contentos" />
                                        </div>
                                    </div>
                    
                                </section>
                                <div className="fundadores">
                                    <div className="contenedor-del-titulo">
                                        <div className="line"></div>
                                        <h2 className="titulo">Fundadores</h2>
                                    </div>
                                    <div className="cards">
                                        <div className="card">
                                            <div className="container-img">
                                                <img src="https://www.stelorder.com/wp-content/uploads/2021/09/portada-empresario-individual.jpg" alt="" />
                                            </div>
                                            <div className="contenido-texto-crd">
                                                <h4>Jonathan Lopez Cadena</h4>
                                                <p>Fundador</p>
                                                <span>Lider de diseño, con alta experiencia en diseño gráfico, desarrollo web. 
                                                    Especializado en UX y UI
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="container-img">
                                                <img src="https://www.stelorder.com/wp-content/uploads/2021/09/portada-empresario-individual.jpg" alt="" />
                                            </div>
                                            <div className="contenido-texto-crd">
                                                <h4>Kevin Andrés Bolaños</h4>
                                                <p>Fundador</p>
                                                <span>Lider de diseño, con alta experiencia en diseño gráfico, desarrollo web. 
                                                    Especializado en UX y UI
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}