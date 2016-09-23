import axios from 'axios';
import { API_URL } from 'config';
import * as types from './actionTypes';


const request = axios.create({
    baseURL : API_URL,
    withCredentials: true,
});

export const enviaArquivo = (data) => {
    return dispatch => {
        request.post('/usi/pageArquivo/upload', data).then((response) => {
            dispatch({
                type : types.UPLOAD_SUCCESS,
                payload : response.data
            });
        });
    }
}
