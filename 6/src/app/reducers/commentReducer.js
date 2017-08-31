import {ADD_COMMENT} from "../constants/commentsConstants";

const initialState =[ ];

export default function commentsReducer(state = initialState, action = []){
    switch (action.type){
        case ADD_COMMENT:
            return [
                ...state,
                action.comments];
            break;
        default:
            return state;
            break;
    }
}