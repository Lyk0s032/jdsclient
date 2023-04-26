import react from 'react';
import { Line } from 'react-chartjs-2';
const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Jun"];

export default function Estadistic(props){
    const service = props.service;
    return (
        <div className='lade line'>
            <Line data={{
                labels: service.pagos.map((pag) => {
                   return  new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date(pag.fecha.split('T')[0]))
                }).reverse(),
                datasets: [
                {
                    label: "Pagos",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: service.pagos.map((pag) => pag.valor).reverse(),
                },
                ],
            }} />
        </div>
    )
}