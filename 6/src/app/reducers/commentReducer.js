import {ADD_COMMENT} from "../constants/commentsConstants";

const initialState = [ ];

export default function commentsReducer(state = initialState, action){
    switch (action.type){
        case ADD_COMMENT:
            return [
                ...state,
                action.comment];
            break;
        default:
            return state;
            break;
    }
}