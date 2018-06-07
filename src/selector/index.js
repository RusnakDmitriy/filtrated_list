import {createSelector} from 'reselect';

const itemState=state=>state.getPersonalData.personalState;
const filterData=state=>state.filter;
const listData=state=>state.getData.data;

export const itemSelector=createSelector(itemState, item=>{
    return item
})

export const filtratePersonalData=createSelector(listData, filterData, (list, filter)=>{
    const {searchValue, selected}=filter;
    let res=[];
    if(!searchValue) return list;

    list.forEach(item=>{
        Object.keys(item).forEach(key=>{
            Object.keys(item[key]).forEach(elem=>{
                if(elem==selected){
                    if(item[key][elem].toLowerCase().indexOf(searchValue.toLowerCase())!==-1){
                        if(res.indexOf(item)==-1)
                            res.push(item)
                    }
                } else if(selected=='all'){
                    if(item[key][elem].toLowerCase().indexOf(searchValue.toLowerCase())!==-1){
                        if(res.indexOf(item)==-1)
                            res.push(item)
                    }
                }
            })
        })
    })
    return res
})