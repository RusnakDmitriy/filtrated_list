import React from 'react';
import {START, SUCCESS, FAIL, GET_REQUEST, GET_PERSONAL_INFORMATION} from '../constants';
//import '../clients.json';

export function getData(){
    return (dispatch)=>{
        dispatch({
            type: GET_REQUEST+START
        })

        /*const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };*/

        import('../clients.json')
        //fetch('../clients.json', requestOptions)
            //.then(res=>res.json())
            .then(response=>dispatch({
                type: GET_REQUEST+SUCCESS,
                payload: {response}
            }))
            .catch(error=>dispatch({
                type: GET_REQUEST+FAIL,
                payload: {error}
            }))
    }
}

export function getPersonalData(item){
    return{
        type: GET_PERSONAL_INFORMATION,
        payload: {item}
    }
}