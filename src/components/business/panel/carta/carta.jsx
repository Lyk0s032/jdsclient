import react, { useEffect } from 'react';
import Rute from '../rute';
import PanelCarta from './PanelCarta';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import Category from './category';

export default function Carta(props){
    const business = props.business;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(actions.AxiosGetCategories(1));
    }, [])

    return (
        <div className='carta'>
            <div className='title'>
                <Rute ruta="Menu" />
            </div>

            {/* Detalles del producto*/}
            <div className='div-container-component' key={1}>
            
                <Routes> 
                    <Route path="/*" element={<PanelCarta business={business} />} />
                    <Route path="/box/:name/*" element={<Category business={business} />} />


                </Routes>
                {/* Detalles del producto*/}
            </div>
        </div>
    )
}