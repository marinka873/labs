import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {userLogout} from "../../actions/userAction";

class Navbar extends React.Component {

    logout = () => {
        localStorage.clear();
        this.props.userLogout();
        this.props.history.push('/');
    };

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to="/moviesList" className="navbar-brand">
                            Movie List </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Current user: {this.props.login}</a></li>
                            <li className="navbar-link" onClick={this.logout}><a>
                                Logout </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    userLogin: {}
};

const mapStateToProps = (state) => {
    return {
        login: state.user.login
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        userLogout: () => {
            dispatch(userLogout())
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);