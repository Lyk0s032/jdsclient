import react from 'react';
import Rute from '../panel/rute';
import PanelBills from './panelBills';
import { Routes, Route } from 'react-router-dom';
import Count from './counts/count';
import Nomina from './counts/nomina';
import ServicesBill from './counts/serviceBill';
import OthersBills from './counts/others';
export default function Bills(props){
    const business = props.business;
    return (
        <div className='Bills'>
            <div className='title'>
                <Rute ruta="Gastos" />
            </div>
            <Routes>
                <Route path="" element={<PanelBills />} />
                <Route path="/count/existencias/*" element={<Count business={business} />} />
                <Route path="/count/nomina/*" element={<Nomina />} />
                <Route path="/count/services/*" element={<ServicesBill business={business}/>} />
                <Route path="/count/others/*" element={<OthersBills />} /> 

            </Routes>
        </div>
    )
}