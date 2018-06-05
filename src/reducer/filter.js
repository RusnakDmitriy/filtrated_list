import {SELECTED_FILTER} from '../constants';

const defaultFilter={
    selected: undefined
}

export default (dataFilter=defaultFilter, action)=>{
    const {type, payload}=action;
    switch(type){
        case(SELECTED_FILTER):
            return {selected: payload}
    }
    return dataFilter
}
