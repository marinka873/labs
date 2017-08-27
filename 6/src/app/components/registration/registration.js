import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {userSignup} from '../../actions/userAction';
import movieJSON from '../../movie.json';
import {setMoviesList} from '../../actions/movieAction';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            filList: []
        };
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
     this.props.loadMovie(movieJSON);
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

    addUser(event) {
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

        console.log(localStorage.getItem(userEmail));
        console.log(localStorage.getItem(userPassword));
    }

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
        password: state.user.password,

        filmList: state.movie.filList
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        userInfo: (login, password) => {
            dispatch(userSignup(login, password))
        },

        loadMovie: (movieJSON) => {

            dispatch(setMoviesList(movieJSON))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);