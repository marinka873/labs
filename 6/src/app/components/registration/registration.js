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