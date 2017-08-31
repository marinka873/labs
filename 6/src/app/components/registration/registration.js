import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {userSignup} from '../../actions/userAction';

class Registration extends React.Component {
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
    };

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    addUser = (event) => {
        event.preventDefault();

        let userEmail = this.state.email;
        let userPassword = this.state.password;

        this.props.userInfo(userEmail, userPassword);

        let user = {
            keyEmail: userEmail,
            keyPassword: userPassword
        };

        localStorage.setItem(user.keyEmail, userEmail);
        localStorage.setItem(user.keyPassword, userPassword);
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
                        <Link to='/movieList'>
                            <button type="submit" className="btn btn-primary btn-lg" onClick={this.addUser}>Registration
                            </button>
                        </Link>
                    </fieldset>
                </form>

                <h4>Current user: {this.props.login}</h4>

                    <Link to="/moviesList">
                        <h2> Movie  list routing:</h2>
                    </Link>

            </div>
        );
    }
}

Registration.propTypes = {
    userInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login,
        password: state.user.password
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        userInfo: (login, password) => {
            dispatch(userSignup(login, password))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);