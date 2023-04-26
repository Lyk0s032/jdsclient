import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './services';
import AddServices from './addServices';
import Watch from './watch';

export default function PanelServices(props){
    const business = props.business;
    return (
        <div>
            <Routes>
                <Route path="" element={<Services business={business} />}/>
                <Route exact path="/addService" element={<AddServices business={business} />} />
                <Route exact path="/watch/:service/*" element={<Watch business={business} />} />

            </Routes>
        </div>
    )
}