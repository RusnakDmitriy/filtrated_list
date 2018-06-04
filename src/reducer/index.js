import React from 'react';
import {combineReducers} from 'redux';
import getData from './getData';
import getPersonalData from './getPersonalData';

export default combineReducers({
    getData,
    getPersonalData
})