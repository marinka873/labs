import {combineReducers} from 'redux';

import usersReducer from './userReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    usersReducer,
    movieReducer
});