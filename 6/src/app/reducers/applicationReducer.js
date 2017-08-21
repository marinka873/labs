import {combineReducers} from 'redux';

import usersReducer from './userReducer';
import filmReducer from './filmReducer';

export default combineReducers({
    usersReducer,
    filmReducer
});