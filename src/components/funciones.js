import axios from "axios";
import * as actions from './store/actions/actions';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export function confirmPay(itemId, method){
    const loadingTrue = document.querySelector("#loadingSell").style.display = "block";
    const dispatch = useDispatch();
    const params = useParams();

    axios.put(`/car/update/stateandmethod/${itemId}/${method}`)
    .then((response) => {
        if(response.status == 201) {
            dispatch(actions.AxiosGetEspecifityQR(response.data.id, params.ref, true))     
        }
    }).catch((err) => {
        console.log('error');
        console.log(err)
    })
   
} 