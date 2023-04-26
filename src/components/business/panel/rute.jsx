import React from "react";
import { MdNavigateNext } from 'react-icons/md';


export default function Rute(props){
    return (
        <div className="rute">
            <div className="items">
                <span>Home</span> 
                <MdNavigateNext className="icon"/>
                <span>{props.ruta}</span> 
            </div>
        </div>
    )
}