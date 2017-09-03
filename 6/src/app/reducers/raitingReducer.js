import {ADD_RATING} from "../constants/ratingConstants";

const initialState = [];

export default function raitingReducer (state = initialState, action){
    switch(action.type){
        case ADD_RATING:
            return addRaiting(state, action.raiting);
            break;
        default:
            return state;
            break;
    }
}

function addRaiting(state, raiting) {

    let filteredState = state.filter((ratingValue) => {

    });

    return [
        ...filteredState,
        raiting];
}