import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import currentMovie from '../currentMovie/currentMovie';
import {userSignup} from '../../actions/userAction';
import {setMoviesList} from '../../actions/movieAction';
import movieJSON from '../../movie.json';


class moviesList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMovie(movieJSON)
    }

    render(){
        return(

            <div className="container-film">
                <h1>Movie list:</h1>

                <Link to="/currentMovie">
                    <h2>Select current movie</h2>
                </Link>
            </div>
        )
    }
}

moviesList.PropTypes ={
    // loadMovie: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesList);