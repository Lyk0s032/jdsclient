import react, { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom';
import Buss from './business/buss';
import ProductModal from './modal/modal';
import Nav from './nav/nav';
import * as actions from '../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import QR from './business/qr';
export default function Menu(){
    const body = document.querySelector("body").style.overflowY = "auto";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const loadingStore = useSelector(store => store.loadingStore);
    const storeP = useSelector(store => store.storeP);

    useEffect(() => {
        document.querySelector('body').style.background = "white";
        dispatch(actions.AxiosGetStoreByName(params.business));

    },[params.business])
    return(
        loadingStore != false || !storeP ? 
        <h1>Cargando...</h1>
        :
        <div className='menu'>
            <Nav storeP={storeP} />
            <div className='menu-list-container'>
                <Routes>
                    <Route path="" element={<Buss loadingStore={loadingStore} storeP={storeP} />} />
                    <Route path="/m/:ref/*" element={<QR loadingStore={loadingStore} storeP={storeP}  />} />

                </Routes>
            </div>
        </div>
    )
}