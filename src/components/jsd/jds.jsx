import react, { useEffect } from 'react';
import Jeands from './assets/jeands.png';
import { Route, Routes } from 'react-router-dom';
import Us from './us';
import NavJDS from './nav';
import Fotter from './fotter';
 
export default function JDS(){
    useEffect(() => {
        document.querySelector("body").style.backgroundColor = "white"
    })
    return (
        <div >
            <NavJDS />    
                <Routes>
                    <Route path="" element={<Us />} />
                </Routes>
            <Fotter />
        </div>
    )
}