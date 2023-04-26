import react, { useEffect } from 'react';

import { AiOutlineCalendar, AiOutlineWarning} from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { MdNavigateBefore } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';


export default function ProfileLoading(props){
 
    const params = useParams();
    const navigate = useNavigate();

    
    return(
        <div className="profile">
            <div className='div-container-component'>
                <div className='header-options-back'>
                    <button onClick={() => navigate('/business/personal')}><MdNavigateBefore className="icon" /> Regresar    </button>
                </div>
                <div className='profile-info-basic'>
                    <div className='img-profile'>
                        <Skeleton width={200} height={200} circle={true} />
                    </div>
                    <div className='description'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />

                        <br /><br />


                        <Skeleton style={{width:'20%',height:'30px'}}/>
                    </div>
                </div>
                <div className='info-nomina'>
                    <div className='info'>
                        <Skeleton style={{float:'left', width:'30%'}} />
                        <Skeleton style={{float:'right', width:'20%', marginTop:'-15px'}}/>
                        <Skeleton style={{float:'left', width:'30%'}} />
                        <Skeleton style={{float:'right', width:'20%', marginTop:'-15px'}}/>
                        <Skeleton style={{float:'left', width:'30%'}} />
                        <Skeleton style={{float:'right', width:'20%', marginTop:'-15px'}}/>
                    </div>
                </div>
                <div className='news-profile'>
                    <div className='header-div'>
                        <Skeleton />
                    </div>
                    <div className='container-new'>
                        <div className='left-icon'>
                            <Skeleton width={40} height={40} />

                        </div>
                        <div className='right-info'>
                            <Skeleton height={10} width={100} />
                            <Skeleton />
                            <Skeleton />

                        </div>
                    </div>
                    <div className='container-new'>
                        <div className='left-icon'>
                            <Skeleton width={40} height={40} />
                        </div>
                        <div className='right-info'>
                            <Skeleton height={10} width={100} />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>

                    <div className='container-new warning'>
                        <div className='left-icon'>
                            <Skeleton width={40} height={40} />
                        </div>
                        <div className='right-info'>
                            <Skeleton height={10} width={100} />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}