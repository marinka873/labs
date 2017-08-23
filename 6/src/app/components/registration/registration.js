import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {userSignup} from '../../actions/userAction';

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.addUser = this.addUser.bind(this);
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

        this.props.userInfo(userEmail, userPassword);

        let user ={
         keyEmail: userEmail,
         keyPassword: userPassword
        };

        localStorage.setItem(user.keyEmail, userEmail);
        localStorage.setItem(user.keyPassword, userPassword);

        console.log(localStorage.getItem(userEmail));
        console.log(localStorage.getItem(userPassword))
}

    render(){
        return (
            <div className="container-registration">
                <h1>Login:</h1>
                    <form onSubmit={this.addUser} className="form-horizontal">
                        <fieldset>
                        <input type="email" placeholder="Email" className="container-registration__form__input" onChange={this.handleChangeEmail} value={this.state.email}/>
                        <br/>
                        <input type="password" placeholder="Password" className="container-registration__form__input" onChange={this.handleChangePassword} value={this.state.password}/>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-lg">Registration</button>
                        </fieldset>
                    </form>
            </div>
        );
    }
}


    Registration.propTypes ={
        userInfo: PropTypes.func.isRequired
    };

const mapStateToProps = (state) => {
      return {user: state}
   }

const mapDispatchToProps = (dispatch) => ({
    userInfo: () => dispatch(userSignup())
    })


export default connect(mapStateToProps, mapDispatchToProps)(Registration);