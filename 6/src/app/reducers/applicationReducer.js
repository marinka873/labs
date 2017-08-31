import {combineReducers} from 'redux';

import usersReducer from './userReducer';
import movieReducer from './movieReducer';
import commentsReducer from './commentReducer';

export default combineReducers({
   user: usersReducer,
   movies: movieReducer,
    comments: commentsReducer
});