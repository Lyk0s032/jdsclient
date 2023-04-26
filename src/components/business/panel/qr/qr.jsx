import react, { useEffect } from 'react';
import Rute from '../rute';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import QrPanel from './qrPanel';
export default function QR(props){
    const dispatch = useDispatch();
    const business = props.business;
    const inventary = useSelector(store => store.inventaryBox);
    const loadingInventary = useSelector(store => store.loadingInventaryBox);
    const navigate = useNavigate();
    
    useEffect(() => {
        document.querySelector("body").style.background = "#EBF7FF";
    }, [])
    return (
        <div className='inventary'>
            <div className='title'>
                <Rute ruta="Código QR y mesas" />
            </div>
            {/* Detalles del producto*/}
            <div className='div-container-component' key={1}>
            
                <Routes> 
                     <Route path="/*" element={<QrPanel business={business} inventary={inventary} />} />
                    {/* <Route path="box/:name/*" element={<Box business={business} inventary={inventary} />} />  */}

                </Routes>
                {/* Detalles del producto*/}
            </div>
           
            
        </div>
    )
}

