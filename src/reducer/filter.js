import {SELECTED_FILTER, SEARCH_FILTER} from '../constants';

const defaultFilter={
    searchValue: '',
    selected: 'all'
}

export default (dataFilter=defaultFilter, action)=>{
    const {type, payload}=action;
    switch(type){
        case(SELECTED_FILTER):
            return Object.assign({}, {...dataFilter, selected: payload});

        case(SEARCH_FILTER):
            return Object.assign({}, {...dataFilter, searchValue: payload});
    }
    return dataFilter
}
