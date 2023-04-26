import react, { useEffect } from 'react';
import * as actions from '../../../store/actions/actions';
import Rute from '../rute';
import ModalInfo from '../../modals/modalInfo';
import { Routes, Route } from 'react-router-dom';
import PanelFinance from './panel';
import ModalFinance from '../../modals/modalFinance';
import { useDispatch, useSelector } from 'react-redux';
import PanelFinanceLoading from './loading/panelFinanceLoading';
import ModalFinanceLoading from '../../modals/loading/modalFinanceLoading';
import RequestSeccion from '../../requests/requestSeccion';

export default function Finance(props){
    const business = props.business;
    const loadingSells = useSelector(store => store.loadingSells);
    const sells = useSelector(store => store.sells);

    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(actions.AxiosGetSells(business.id, '2023-04', true))

    }, [business.id])
    return (

        <div className='finance'>
             <div className='top'>
                <Rute ruta="Finanzas" />
            </div>
            {
                loadingSells == true || !sells ? 
                    <PanelFinanceLoading />
                : sells == 'request' ? <RequestSeccion /> :
                    <PanelFinance business={props.business} sells={sells} loadingSells={loadingSells} />
            }
            <Routes>
                <Route path="modal/:id" element={<ModalInfo sells={sells} />} />
                <Route path="type/:id" element={loadingSells == true || !sells ? <ModalFinanceLoading /> :
                    sells == 'request' ? <ModalFinanceLoading />:
                <ModalFinance sells={sells} />} />

            </Routes>
        </div>
    )
}