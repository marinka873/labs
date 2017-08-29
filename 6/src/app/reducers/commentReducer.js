import {ADD_COMMENT} from "../constants/comments";

const initialState = [ ];

export default function commentReducer(state = initialState, action){
    switch (action.type){
        case ADD_COMMENT:
            return [
                ...state,
                ...action.comment];
            break;
        default:
            return state;
            break;
    }
}