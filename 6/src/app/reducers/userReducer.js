import {USER_SIGNUP, USER_LOGOUT} from "../constants/userConstans";

const initialState = {
    login: null,
    password: null
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNUP:
            return { ...state,
                login: action.login,
                password: action.password };
            break;
        case USER_LOGOUT:
            return initialState;
            break;
        default:
            return state;
            break;
    }
}