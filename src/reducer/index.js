import React from 'react';
import {combineReducers} from 'redux';
import getData from './getData';
import getPersonalData from './getPersonalData';
import filter from './filter';

export default combineReducers({
    getData,
    getPersonalData,
    filter
})