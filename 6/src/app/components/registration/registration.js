import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

import {userSignup} from '../../actions/userAction';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginError: false
        };
    }

    componentDidMount (){
        if (localStorage.getItem('userEmail') &&
            localStorage.getItem('userPassword')) {
            this.props.history.push('/moviesList');
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    addUser = (event) => {
        event.preventDefault();

        if (this.state.email.length > 0 && this.state.password.length > 0) {

            let userEmail = this.state.email;
            let userPassword = this.state.password;

            this.props.userSignup(userEmail, userPassword);

            let user = {
                keyEmail: userEmail,
                keyPassword: userPassword
            };

            localStorage.setItem('userEmail', user.keyEmail);
            localStorage.setItem('userPassword', user.keyPassword);
            this.props.history.push('/moviesList');
        }
        else {
            this.setState({
                loginError: true
            })
        }
    };

    render() {
        return (
            <div className="container-registration">
                <h1>Login:</h1>
                <form className="form-horizontal">
                    <fieldset>
                        <input type="email" placeholder="Email" onChange={this.handleChangeEmail}
                               value={this.state.email}/>
                        <br/>
                        <input type="password" placeholder="Password" onChange={this.handleChangePassword}
                               value={this.state.password}/>
                        <br/>
                            <button type="submit" className="btn btn-primary btn-lg" onClick={this.addUser}>Login
                            </button>
                    </fieldset>
                </form>
                {this.state.loginError && <div>
                    <h3>Error</h3>
                </div>}
            </div>
        );
    }
}

Registration.propTypes = {
    userSignup: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        password: state.user.password
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        userSignup: (login, password) => {
            dispatch(userSignup(login, password))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);