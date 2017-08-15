import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

class Registration extends React.Component{
    render(){
        return <div className="container-registration">
            <h1>Login</h1>
            <form className="container-registration__form">
            <input type="text" placeholder="Login" className="container-registration__form__input-login"/>
            <br/>
            <input type="password" placeholder="Password" className="container-registration__form__input-password"/>
            <br/>
            <button className="container-registration__form__button" >Submit</button>
            </form>
        </div>
    }
}

export default Registration;

ReactDOM.render(<Registration/>,
    document.getElementById('registration'));




function getUser(state = [], action){
    if(action.type === 'user'){
        return[
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(getUser);

store.subscribe( () => {
    console.log('User', store.getState());
});

store.dispatch({type: 'user', payload: 'User name'});




const addEventButton = document.querySelector('.button');
    if (event){
        addEventButton.addEventListener('click', () => {
            const userName = document.querySelector('.login').value;
            console.log('user name ');
    });
}
