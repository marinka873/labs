import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Navbar extends React.Component(){

    render(){
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Film List</a>
                </div>

            <ul className="nav navbar-nav">
                <li><a>Login</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </nav>
        )
    }
}

Navbar.PropTypes ={
};

const mapStateToProps = () => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);