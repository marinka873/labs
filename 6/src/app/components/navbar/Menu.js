import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


class ComponentNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleChangeSearch =(event) => {
        this.setState({
            search: event.target.value
        })
    };

    render(){
        let films = this.props.filmsList;
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to="/" className="navbar-brand">
                            Movie List
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search movie"
                                value={this.state.search}  onChange={this.handleChangeSearch}/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>{this.props.login}</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

ComponentNavbar.defaultProps = {
    filmsList: [],
    userLogin: { }
};

const mapStateToProps = (state) => {
    return{
        filmsList: state.movies,
        login: state.user.login
    }
};

export default connect(mapStateToProps) (ComponentNavbar);