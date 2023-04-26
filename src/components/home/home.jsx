import react from 'react';
import Fotter from '../jsd/fotter';
import NavDefault from './nav';
import { Navigate, Route, Routes } from 'react-router-dom';
import H from './h';
import Login from '../login/login';
import Planes from './planes';

export default function Home(props){
    const usuario = props.usuario;
    return (
        <div>
            <NavDefault />
            <Routes>
                <Route path="/" element={<H />} />
                <Route path="/login" element={usuario != null ? <Navigate to="/business" /> : <Login />} />
                <Route path="/planes" element={<Planes />} />

            </Routes>
            <Fotter />
        </div>
    )
}