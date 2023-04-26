import react from 'react';
import { Route, Routes } from 'react-router-dom';
import NewSell from './newSell';
import Sells from './sell';

export default function PanelSells(props){
    const business = props.business;
    return (
        <div>
            <Routes>
                <Route path="" element={<Sells business={business} />}/>
                <Route path="new/*" element={<NewSell business={business} />}/>

            </Routes>
        </div>
    )
}