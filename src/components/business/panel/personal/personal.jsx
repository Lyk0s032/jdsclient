import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Rute from '../rute';
import PanelPersonal from './panelPersonal';
import ModalCreateUser from './plus/createUser';
import Nomina from './plus/nomina';
import Profile from './profile';





export default function Personal(props){
    const business = props.business;
    
    return (
        <div className='pedidos'>
            <div className='top'>
                <Rute ruta="Personal" />
            </div> 
            <Routes>
                <Route path="/*" element={<PanelPersonal business={business} />} />
                <Route path="nomina" element={<Nomina business={business}/>} />
                <Route path="profile/:document/*" element={<Profile business={business} />} /> 

            </Routes>
        </div>
    )
}