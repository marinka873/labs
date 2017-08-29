import {combineReducers} from 'redux';

import usersReducer from './userReducer';
import movieReducer from './movieReducer';
import commentReducer from './commentReducer';

export default combineReducers({
   user: usersReducer,
   movie: movieReducer,
    comment: commentReducer
});