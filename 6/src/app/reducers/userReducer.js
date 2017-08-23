import {USER_IS_LOGIN, USER_SIGNUP} from "../actions/userAction";

const initialState = [];

export default function usersReducer (state = initialState, action = {}){
    switch (action.type){
        case USER_SIGNUP:
            return action.payload;
            break;
        // case USER_LOGOUT:
        //     return initialState;
        //     break;

        default:
            return state;
            break;
    }
}