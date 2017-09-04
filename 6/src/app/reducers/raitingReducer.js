import {ADD_RATING} from "../constants/ratingConstants";

const initialState = [];

export default function ratingReducer (state = initialState, action){
    switch(action.type){
        case ADD_RATING:
            return addRating(state, action.rating);
            break;
        default:
            return state;
            break;
    }
}

function addRating(state, rating) {

    let filteredState = state.filter((ratingValue) => {
            return ratingValue.user !== rating.user || ratingValue.movieId !== rating.movieId
    });

    return [
        ...filteredState,
        rating];
}