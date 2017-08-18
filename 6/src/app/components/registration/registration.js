import React from 'react';
import ReactDOM from 'react-dom';

import'./Registration.scss';

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


        let userLocal = () => {
            if (localStorage.getItem(user.keyEmail) === null){
                console.log('Please register');
            } else {
                console.log('OK REGISTER');
            }
        };
userLocal();

        console.log(localStorage.getItem(userEmail));
        console.log(localStorage.getItem(userPassword));

}

    render(){
        return (
            <div className="container-registration">
                <h1>Login:</h1>
                <form onSubmit={this.addUser.bind(this)} className="container-registration__form">
                    <input type="email" ref="email" placeholder="Email" className="container-registration__form__input"/>
                    <br/>
                    <input type="password" ref="password" placeholder="Password" className="container-registration__form__input"/>
                    <br/>
                    <button type="submit" className="container-registration__form__button">Submit</button>
                </form>
                        </div>
        );
    }
}

export default Registration;

ReactDOM.render(<Registration/>,
    document.getElementById('registration'));