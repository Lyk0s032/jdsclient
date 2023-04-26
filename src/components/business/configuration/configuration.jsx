import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Default from './default';
import Cuenta from './cuenta';
import PanelServices from './services/panel';
import JdsCount from './jds/panel';
import PanelSells from './sells/default';

export default function Configuration(props){
    const business = props.business;
    return (
        <div>
            <Routes>
                <Route path="/" element={<Default business={business} />}/>
                <Route exact path="/count" element={<Cuenta business={business} />} />
                <Route exact path="/services/*" element={<PanelServices business={business} />} />
                <Route exact path="/jds/*" element={<JdsCount business={business} />} />
                <Route exact path="/sells/*" element={<PanelSells business={business} />} />


            </Routes>
        </div>
    )
}