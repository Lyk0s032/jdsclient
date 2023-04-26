import react from 'react';
import Fotter from '../jsd/fotter';

export default function H(){
    return (
        <div className='home'> 
                <div className='container-first-scroll'>
                        <div className='container-div-big-text'>
                            <h1>Servicios ilimitados para tu negocio</h1>
                            <h2>Lleva tu empresa o emprendimiento a otro nivel</h2><br /><br />
                            <h3>¿Estas listo para empezar? Escribe tu correo para empresar la membresia</h3>

                            <form>
                                <input type="text" placeholder='Escribe tu correo eléctronico' />
                                <button>Empezar</button>
                            </form>

                        </div>
                </div>
                <div className='container-second-scroll'>
                        <div className='div-center'>
                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/008/854/312/original/computer-laptop-with-transparent-screen-free-png.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Automatiza tu negocio</h2>
                                    <span>Control automatico de tu inventario, estado financiero, nómina, ventas, estadisticad, etc.</span>
                                </div>
                            </div>
                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/008/854/312/original/computer-laptop-with-transparent-screen-free-png.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Conectate desde cualquier lugar</h2>
                                    <span>Puedes revisar el estado de tu negocio desde donde desees: Tu computadora, dispositivo móvil, tv, etc.</span>
                                </div>
                            </div>
                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/008/854/312/original/computer-laptop-with-transparent-screen-free-png.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Tu equipo</h2>
                                    <span>Brinda acceso a todo tu equipo de trabajo, podrán observar sus pagos, programación laboral, etc.</span>
                                </div>
                            </div>
                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/008/854/312/original/computer-laptop-with-transparent-screen-free-png.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Descarga toda tu información</h2>
                                    <span>Facturas digitales, registros de ventas, compras, etc. Toda tu información puede ser descargada en cualquier momento.</span>
                                </div>
                            </div>


                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Genera tus propios códigos QR</h2>
                                    <span>A través de los códigos QR, podrás automatizar tus ventas, pedidos, domicilios, y muchos más.</span>
                                </div>
                            </div>
                            <div className='box-info-home'>
                                <div className='container-img'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/87/87720.png" alt="" />
                                </div>
                                <div className='container-info'>
                                    <h2>Soporte 24 / 7</h2>
                                    <span>JDS, comprometidos con la excelencia y la automatización de procesos, garantía de funcionamiento 24 / 7 - 365</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='last-info'>
                    <div className='center-last-info'>
                        <div className='info'>
                            <h1>Nuestro centro de preguntas frecuentes</h1>
                            <button>Quiero ir</button>
                        </div>
                        <div className='container-acordeon'>
                            <div className='acordeon'>
                                <div className='visility-acordeon' onClick={() => {
                                    document.querySelector('#acordeon1').classList.toggle('hidden-acordeon-active');
                                }}>
                                    <h2>¿Cúanto tiempo dura la membresia?</h2>
                                </div>
                                <div className='hidden-acordeon' id="acordeon1">
                                    <div>
                                        <span>El tiempo de la membresia puede resultar variado, ya que la plataforma maneja diferentes planes y servicios. Pero en general, podemos encontrar membresia minimo de 6 meses hasta los 2 años.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='acordeon'>
                                <div className='visility-acordeon' onClick={() => {
                                    document.querySelector('#acordeon2').classList.toggle('hidden-acordeon-active');
                                }}>
                                    <h2>¿Para que tipo de negocios o empresas esta enfocado JDS?</h2>
                                </div>
                                <div className='hidden-acordeon' id="acordeon2">
                                    <div>
                                        <span>
                                            La plataforma JDS, tiene un enfoque multidireccional, es decir, puede ser utilizado para diferentes tipos de negocios. Entre ellos: <br /><br />
                                            - Restaurantes <br />
                                            - Cafeterías <br />
                                            - Comida rápida <br />
                                            - Street <br />
                                            - Bebidas <br />

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='acordeon'>
                                <div className='visility-acordeon' onClick={() => {
                                    document.querySelector('#acordeon3').classList.toggle('hidden-acordeon-active');
                                }}>
                                    <h2>¿Que costo tiene adquirir la membresia?</h2>
                                </div>
                                <div className='hidden-acordeon' id="acordeon3">
                                    <div>
                                        <span>Los costos al igual que el tiempo de suscripción, pueden ser variados. Pero la plataforma JDS tiene precios que van desde los 10.000.00 COP mensuales hasta los 100.000.00 COP <br /><br />
                                        Todo dependerá del tipo de plan, negocio y suscripción que se realice.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='acordeon'>
                                <div className='visility-acordeon' onClick={() => {
                                    document.querySelector('#acordeon4').classList.toggle('hidden-acordeon-active');
                                }}>
                                    <h2>Planes</h2>
                                </div>
                                <div className='hidden-acordeon' id="acordeon4">
                                    <div>
                                        <span>En JDS pensamos en la economía de todos, por esta razón tenes planes que permiten adaptarse a todos los contextos económicos. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
            </div>
    )
}