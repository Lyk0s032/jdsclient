import react, { useEffect } from 'react';
import * as actions from '../../../store/actions/actions';
import Rute from '../rute';
import { useDispatch, useSelector } from 'react-redux';
import QrComponent from './qrComponent';
import { Route, Routes } from 'react-router-dom';
import ModalMesa from './modalMesa';

export default function Pedido(props){
    const dispatch = useDispatch();
    const business = props.business;
    const loadingMesas = useSelector(store => store.loadingMESASQR);
    const mesas = useSelector(store => store.mesasQR);

    useEffect(() => {
        document.querySelector("body").style.background = "white";
        dispatch(actions.AxiosGetMesasBusiness(business.id, true))
    }, [business.id])
    return (
        <div className='pedidos'>
            <div className='top'>
                <Rute ruta="Restaurante" />
            </div>
            <div className='div-container-component'>
                <div className='title'><h3>Mesas y pedidos</h3></div>
                {
                    loadingMesas == true || !mesas ? <h1>Cargando...</h1> :
                    mesas != 404 ? 
                    <div className="restaurante">
                        {console.log(mesas)}
                        <div className='container-mesas'>
                            {
                                mesas.map((table) => {
                                    return (
                                        <QrComponent key={table.id} table={table} />
                                    )
                                })
                            }
                            
                        </div>
                        <Routes>
                            <Route path="mesa/:ref" element={<ModalMesa business={business} />} />
                        </Routes>
                    </div>
                    : <div><h1>No hay</h1></div>
                }
            </div>
        </div>
    )
}