import {createSelector} from 'reselect';

const itemState=state=>state.getPersonalData.personalState;

export const itemSelector=createSelector(itemState, item=>{
    return item
})