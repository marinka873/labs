import React from 'react';
import ReactDOM from 'react-dom';

import './navbar.scss';

class Navbar extends React.Component(){


    render(){
        return (<nav className="container__nav">
            <ul>
                <li className="container__nav--logo">Film List</li>
                <li><a className="container__nav--link">Login</a></li>
                <li><a className="container__nav--link">Logout</a></li>
            </ul>
        </nav>)
    }
}


export default Navbar;