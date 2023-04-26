import react, { useEffect } from 'react';

export default function LoadingBuss(props){
    const usuario = props.usuario;
    useEffect(() => {
        document.querySelector("body").style.backgroundColor = "white";
    }, [])
    return (
        <div className='loading'>
            <div className="container-info-loading">
                <div className='gif'>
                    <img src="https://media.tenor.com/WaP8sT953fEAAAAi/netflix-logo.gif" alt="" />
                </div>
                <div className='txt-with-move'>
                    <h1 className='statich1'>¡Hola {usuario.name.split(' ')[0]}!</h1> 
                    <b>
                        <div className='innerIam'>
                            <h1>Preparando tu espacio de trabajo</h1>
                            <h1>Ya casi esta listo el escritorio</h1>
                            <h1>Nos alegra demasiado tener aquí</h1>
                            <h1>Ponemos la Inteligencia Artificial a tu disposición</h1>
                            <h1>Esperamos que disfrutes la experiencia</h1>

                        </div> 
                    </b>
                </div>
            </div>
        </div>
    )
}