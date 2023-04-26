import react from 'react';
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineFieldTime, AiOutlinePoweroff } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export default function QrComponent(props){
    const table = props.table;
    const navigate = useNavigate();

    return (
        <div className={'box-mesa estado-' + table.state} onClick={() => navigate('mesa/'+table.reference)}>
            <div className='header-box'>
                <h1>#{table.nro_mesa}</h1>
            </div>
            {
                table.state == 1 ?
                <div className='desc'>
                    <AiOutlineCheck className='icon'/>
                    <span>Innactiva</span>
                </div>
                : 
                <div className='desc'>
                    <AiOutlineCheck className='icon'/>
                    <span>Mesa en uso...</span>
                </div>
            }
            <div className='bottom-nav'>

                    {
                        table.state == 1 ?
                        <ul>
                            <li>
                                <AiOutlineFieldTime className='icon amigable' /> <br />
                                <span>0 min</span>
                            </li>
                            <li>
                                <AiOutlinePoweroff className='icon off' /> <br />
                                <span>Innactiva</span>
                            </li>
                        </ul>
                        :
                        <ul>
                            <li>
                                <AiOutlineFieldTime className='icon amigable' /> <br />
                                <span>10 min</span>
                            </li>
                            <li>
                                <AiFillCheckCircle className='icon check' /> <br />
                                <span>En uso</span>
                            </li>
                        </ul>

                    }
            </div>
        </div>
    )
}