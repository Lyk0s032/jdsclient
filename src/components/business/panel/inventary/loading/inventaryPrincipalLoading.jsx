import react, { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineCodeSandbox, AiOutlineSetting} from 'react-icons/ai';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MdNavigateBefore } from 'react-icons/md'; 
import Skeleton from 'react-loading-skeleton';

export default function PanelInventaryLoading(props){
    const navigate = useNavigate();
    const business = props.business;
    const inventary = props.inventary;
    console.log(inventary);
    useEffect(() => {
        document.querySelector("body").style.overflowY = "auto";
    })
    return (
        <div>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='title'>
                    <h3>
                        Inventario
                    </h3>
                </div>
                
                <div className='box-category-inventary'>
                    <h1 className='title-h1' style={{margin:'0px',padding:'15px 10px'}}>
                        <Skeleton style={{width:'50%',height:'30px',margin:'0px'}} />
                    </h1>
                    <div className='scroll'>
                        <div className='box-inventary' onClick={() =>
                            {
                                navigate('box/')
                            }}>
                            <Skeleton height={200}/>
                            <div className='container'>
                                <Skeleton style={{width:'50%'}} />
                                <Skeleton style={{width:'90%'}} />
                                <Skeleton style={{width:'50%'}} />

                            </div>
                        </div>
                        <div className='box-inventary' onClick={() =>
                            {
                                navigate('box/')
                            }}>
                            <Skeleton height={200}/>
                            <div className='container'>
                                <Skeleton style={{width:'50%'}} />
                                <Skeleton style={{width:'90%'}} />
                                <Skeleton style={{width:'50%'}} />

                            </div>
                        </div>
                        <div className='box-inventary' onClick={() =>
                            {
                                navigate('box/')
                            }}>
                            <Skeleton height={200}/>
                            <div className='container'>
                                <Skeleton style={{width:'50%'}} />
                                <Skeleton style={{width:'90%'}} />
                                <Skeleton style={{width:'50%'}} />

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='top-header-bottons'>
                    <Skeleton />

                </div>
                <div className='container-inventary'>
                    <table className="content-table">
                        <thead className="top-titles"> 
                            <tr> 
                                <th><span className="ti">Último movimiento</span></th> 
                                <th><span className="ti">Nro Referencia</span></th> 
                                <th><span className="ti">Existencia</span></th> 
                                <th><span className="ti">Cantidad</span></th> 
                            </tr> 
                        </thead> 
                            <tbody>
                                <tr> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td>
                                </tr>
                                <tr> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td>
                                </tr>
                                <tr> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td> 
                                    <td><Skeleton /></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
        </div>
    )
} 