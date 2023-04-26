import react, { useEffect } from 'react';
import Rute from '../rute';
import PanelInventary from './inventaryPrincipal';
import ProductDetails from './product';
import { Routes, Route, useNavigate} from 'react-router-dom';
import ModalNewProduct from '../../modals/addNewProduct';
import ModalNewCategory from '../../modals/addNewCategory';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import Box from './box';
import PanelInventaryLoading from './loading/inventaryPrincipalLoading';
import BoxLoading from './loading/boxLoading';
import RequestSeccion from '../../requests/requestSeccion';
export default function Inventary(props){
    const dispatch = useDispatch();
    const business = props.business;
    const inventary = useSelector(store => store.inventaryBox);
    const loadingInventary = useSelector(store => store.loadingInventaryBox);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(actions.AxiosGetInventaryBox(business.id)); 

    }, [])
    return (
        <div className='inventary'>
            <div className='title'>
                <Rute ruta="Inventario" />
            </div>

            {/* Detalles del producto*/}
            <div className='div-container-component' key={1}>           
                <Routes> 
                    <Route path="/*" element={loadingInventary == true || !inventary 
                    ?<PanelInventaryLoading />
                    : inventary == 'request' ? <RequestSeccion />
                    :<PanelInventary business={business} inventary={inventary} />} />
                    <Route path="box/:name/*" element={ loadingInventary == true || !inventary ?  <BoxLoading /> 
                    : inventary == 'request' ? <RequestSeccion />
                    : <Box business={business} inventary={inventary} /> } />

                </Routes>
                {/* Detalles del producto*/}
            </div>
           
            
        </div>
    )
}

