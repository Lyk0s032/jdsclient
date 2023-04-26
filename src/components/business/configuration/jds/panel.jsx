import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Count from './count';
import Help from './help';
import Use from './use';

export default function JdsCount(props){
    const business = props.business;
    return (
        <div>
            <Routes>
                <Route path="" element={<Count business={business} />}/>
                <Route path="/help" element={<Help business={business} />}/>
                <Route path="/use" element={<Use business={business} />}/>


            </Routes>
        </div>
    )
}