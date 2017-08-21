
export const ADD_USER = 'ADD_USER';
export const USER_LOGOUT = 'USER_LOGOUT';

export default function addUser (newUser) {
    return {type: "ADD_USER", payload: newUser}
}


