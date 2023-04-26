import react, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BoxFinanceLoading } from './boxLoading';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PanelFinanceLoading(props){

    return (

        <div className="">
  
            <div className='div-container-component' key={1}>
                <div className='title'>
                <Skeleton width={'100%'} height={20}/>
                </div>
                    <div className='container-items-finance'>
                        <BoxFinanceLoading />

                        <BoxFinanceLoading/>

                        <BoxFinanceLoading />

                        <BoxFinanceLoading/>

                    </div>
                   
                <div className='graphi-sell-month'>
            
                    <img style={{width:'20%', border:'none', marginLeft:'40%'}} src="https://biblioteca.abogacia.es/interface/themes/xebook/images/homeloading.gif" alt="" />                        
                </div>
                <div className="team-working">
                    <div className="container-team">
                        <div className="top-nav">
                        <Skeleton />

                        </div>

                        
                        <table className="content-table">
                            <thead className="top-titles"> 
                                <tr key={10}> 
                                    <th>#</th> 
                                    <th>Valor</th> 
                                    <th>Metódo</th> 
                                    <th>A cargo de</th>
                                    <th>Fecha</th>
                                    <th></th>  


                                </tr> 
                            </thead> 
                                <tbody>                               
                                    <tr key={1}> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td></td>
                                    </tr>
                                    <tr key={2}> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td></td>
                                    </tr>  
                                    <tr key={3}> 
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td> 
                                        <td><Skeleton /></td> 
                                        <td></td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>   
            </div>
        </div>
    )
}