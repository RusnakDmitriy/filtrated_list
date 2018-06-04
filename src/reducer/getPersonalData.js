import {GET_PERSONAL_INFORMATION} from '../constants';

export default (personalState={}, action)=>{
    const {type, payload}=action;
    switch(type){
        case(GET_PERSONAL_INFORMATION):
            return Object.assign({},{personalState: payload.item})
    }
    return personalState
}