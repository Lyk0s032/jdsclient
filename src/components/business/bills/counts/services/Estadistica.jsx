import react, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { AiOutlineCheck, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiAlertTriangle } from 'react-icons/fi';
import { MdOutlineNotificationsActive } from 'react-icons/md';


export default function EstadisticaServices(props){
    const servicios = props.services;

    return (
        <div className='graphi-sell-month'>
           <div className='list-services'>
            {
                servicios.searchServices.map((service, i) =>{
                    return (
                        <div className='item-service'>
                            <h3>{service.name}</h3>
                            <strong>Estado: 
                                {
                                    service.active == 'active' ?
                                    <AiOutlineCheckCircle className='icon check' />
                                    : service.active == 'pending' ?
                                    <MdOutlineNotificationsActive className='icon alert' />
                                    : service.active == 'alert' ? <FiAlertTriangle className='icon danger' /> :null
                                } 
                            </strong>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}