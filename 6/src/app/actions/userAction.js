import axios from 'axios';
import {USER_LOGOUT, USER_SIGNUP, USER_TEXT} from "../constants/userConstans";



export function userSignup (userInformation){
    return {
        type: USER_SIGNUP,
        payload: userInformation
    }
}

export function userLogout(){
    return {
        type: USER_LOGOUT
    }
}



export function userText(text) {
    return{
        type: USER_TEXT,
        payload: text
    }
}