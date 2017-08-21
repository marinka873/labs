import React from 'react';
import connect from 'react-redux';
import { Link } from 'react-router';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import'./Registration.scss';

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

    }
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    addUser(event){
        event.preventDefault();

        let userEmail = this.state.email;
        let userPassword = this.state.password;

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
        return ( <BrowserRouter history={history}>
            <div className="container-registration">
                <h1>Login:</h1>
                <form onSubmit={this.addUser.bind(this)} className="container-registration__form">
                    <input type="email" placeholder="Email" className="container-registration__form__input" onChange={this.handleChangeEmail} value={this.state.email}/>
                    <br/>
                    <input type="password" placeholder="Password" className="container-registration__form__input" onChange={this.handleChangePassword} value={this.state.password}/>
                    <br/>
                    <button type="submit" className="container-registration__form__button"> Submit</button>
                </form>
                        </div>
            </BrowserRouter>
        );
    }
}

export default Registration;
