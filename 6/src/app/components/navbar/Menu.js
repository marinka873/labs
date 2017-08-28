import React from 'react';
import {NavLink} from 'react-router-dom';

class ComponentNavbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to="/" className="navbar-brand">
                             Film List
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default ComponentNavbar;