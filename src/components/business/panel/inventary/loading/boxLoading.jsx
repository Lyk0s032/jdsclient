import react, { useEffect, useState } from 'react';
import {AiFillDelete,AiOutlineEdit, AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams,  } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md'; 
import Skeleton from 'react-loading-skeleton';

export default function BoxLoading(props){
    const navigate = useNavigate();
    const params = useParams();
    const business = props.business;
    const box = useSelector(store => store.BoxById);
    const loading = useSelector(store => store.loadingBoxById);
    const active = useSelector(store => store.activeModal);
    const [showProduct, setShowProduct] = useState(null);
    console.log(params.name)
    useEffect(() => {
        document.querySelector("body").style.overflowY = "auto";        
    }, [])
    return (
        <div>
            <div className='header-options-back'>
                <button onClick={() => navigate('/business/inventary')}><MdNavigateBefore className="icon" /> Regresar    </button>
            </div>
            <div className='title'>
                <Skeleton style={{width:'20%'}}  />
            </div>
            <div className='top-header-bottons'>
                    <Skeleton />
                </div>
                <div className='container-inventary'>
                    <table className="content-table">
                        <thead className="top-titles"> 
                            <tr> 
                                <th><span className="ti">Producto</span></th> 
                                <th><span className="ti">Cantidad</span></th> 
                                <th><span className="ti">Valor/Unidad</span></th> 
                                <th><span className="ti">Valor/Total</span></th> 
                                <th><span className="ti">Estado</span></th>
                                <th></th> 
                                <th></th> 

                            </tr> 
                        </thead>
                        <tbody>
                            <tr > 
                                <td key={1} >
                                     <Skeleton style={{width:'40px',height:'40px',float:'left'}} circle={true}/>
                                     <Skeleton style={{marginTop:'10px', float:'left',width:'1000%'}} />        
                                </td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr > 
                                <td key={1} >
                                     <Skeleton style={{width:'40px',height:'40px',float:'left'}} circle={true}/>
                                     <Skeleton style={{marginTop:'10px', float:'left',width:'1000%'}} />        
                                </td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr > 
                                <td key={1} >
                                     <Skeleton style={{width:'40px',height:'40px',float:'left'}} circle={true}/>
                                     <Skeleton style={{marginTop:'10px', float:'left',width:'1000%'}} />        
                                </td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td> 
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td><Skeleton style={{width:'1000%'}} /></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div> 
    )
}