import {combineReducers} from 'redux';

import usersReducer from './userReducer';
import movieReducer from './movieReducer';
import commentsReducer from './commentReducer';
import ratingReducer from './raitingReducer';

export default combineReducers({
    user: usersReducer,
    movies: movieReducer,
    comment: commentsReducer,
    rating: ratingReducer
});