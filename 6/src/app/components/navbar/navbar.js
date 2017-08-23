import React from 'react';
import ReactDOM from 'react-dom';


class Navbar extends React.Component(){


    render(){
        return (<nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Film List</a>
                </div>

            <ul className="nav navbar-nav">
                <li><a className="container__nav--link">Login</a></li>
                <li><a className="container__nav--link">Logout</a></li>
            </ul>
            </div>
        </nav>)
    }
}


export default Navbar;