import React, { useEffect } from "react";
import { Routes, Route} from 'react-router-dom';

import NavBar from "./nav/nav";
import Panel from './panel/principal/panel';
import Pedido from './panel/pedido/pedido';
import Personal from './panel/personal/personal';
import Finance from './panel/finance/finance';
import Inventary from './panel/inventary/inventary';
import Bills from './bills/bills';
import { useDispatch, useSelector } from "react-redux";

import * as actions  from '../store/actions/actions.js';
import ModalCreateUser from "./panel/personal/plus/createUser";
import Carta from "./panel/carta/carta";
import QR from "./panel/qr/qr";
import Configuration from "./configuration/configuration";
import LoadingBuss from "./loading";
import Request from "./request";

export default function Business(){
  const dispatch = useDispatch();
  const usuario = useSelector(store => store.usuario); 
  const business = useSelector(store => store.business);
  const loading = useSelector(store => store.gettingBusiness);

  useEffect(() => {
      dispatch(actions.AxiosGetInfoBusiness(usuario.businessId)); 
  }, [usuario.businessId])
    return (
        !business || loading == true ?
          <LoadingBuss usuario={usuario} />
        : business == 'notrequest' ?
          <Request usuario={usuario} />
        :
        <div>
          <NavBar business={business} />  
          <div className='universal'>
            <Routes>
              { /* Panel default*/}
              <Route exact path="/" element={<Panel business={business} />} />
              { /* Panel Ventas*/}
              <Route exact path="/p/*" element={<Pedido business={business} />} />
              { /* Panel Gastos*/}
              <Route exact path="/bills/*" element={<Bills business={business}/>} />
              { /* Panel team*/}
              <Route exact path="/personal/*" element={<Personal business={business} />} />
              { /* Panel Finance*/}
              <Route exact path="/sells/*" element={<Finance business={business} />} />
              { /* Panel Inventary*/}
              <Route exact path="/inventary/*" element={<Inventary business={business}/>} />


              { /* Panel MENU - CREATE CARTA*/}
              <Route exact path="/menu/*" element={<Carta business={business}/>} />

              { /* PANEL PARA CONFIGURAR MESAS Y LOS CÓDIGOS QR DISPONIBLES*/ }
              <Route exact path="/qr/*" element={<QR business={business}/>} />


              { /* CONFIGURATION */ }
              <Route exact path="/configuration/*" element={<Configuration business={business} />} />


            </Routes>
          </div>
  
        </div>

    )
}


 