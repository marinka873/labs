import {USER_LOGOUT, USER_SIGNUP} from "../constants/userConstans";

export function userSignup(userLogin, userPassword) {
    return {
        type: USER_SIGNUP,
        login: userLogin,
        password: userPassword
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}
