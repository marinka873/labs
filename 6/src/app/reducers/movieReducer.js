import {SET_MOVIE_LIST} from "../constants/movieConstants";

const initialState = [];

export default function movieReducer(state = initialState, action) {

    switch (action.type) {
        case SET_MOVIE_LIST:
            return [
                ...state,
                ...action.list
            ];
            break;
        default:
            return state;
            break;
    }
}
