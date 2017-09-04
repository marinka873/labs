import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to="/moviesList" className="navbar-brand">
                            Movie List
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Current user:  {this.props.login}</a></li>
                            <li><NavLink to="/" className="navbar-link">
                                Logout </NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    userLogin: { }
};

const mapStateToProps = (state) => {
    return{
        login: state.user.login
    }
};

export default connect(mapStateToProps) (Navbar);