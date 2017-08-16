import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Control, actions} from 'react-redux-form';

class Registration extends React.Component{

    addUser(event){
        event.preventDefault();

        let userEmail = this.refs.email.value;
        let userPassword = this.refs.password.value;
        let user ={
         keyEmail: userEmail,
         keyPassword: userPassword
        };

        localStorage.setItem(user.keyEmail, userEmail);
        localStorage.setItem(user.keyPassword, userPassword);

        console.log('email: ', userEmail);
        console.log('password', userPassword);

}

    render(){
        return (
            <div className="container-registration">
                <h1>Login:</h1>
                <form onSubmit={this.addUser.bind(this)}>
                    <input type="email" ref="email" placeholder="Login"/>
                    <br/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                        </div>
        );
    }
}

export default Registration;

ReactDOM.render(<Registration/>,
    document.getElementById('registration'));




// function getUser(state = [], action){
//     if(action.type === 'user'){
//         return[
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }
//
// const store = createStore(getUser);
//
// store.subscribe( () => {
//     console.log('User', store.getState());
// });
//
// store.dispatch({type: 'user', payload: 'User name'});
//
//
//
//
// const addEventButton = document.querySelector('.button');
//     if (event){
//         addEventButton.addEventListener('click', () => {
//             const userName = document.querySelector('.login').value;
//             console.log('user name ');
//     });
// }
