import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Movie from "../movie/movie";
import {userSignup} from '../../actions/userAction';
import {setMoviesList} from '../../actions/movieAction';
import movieJSON from '../../movie.json';


class moviesList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render(){
        return(
            <div className="container-film">
                <h1>Movie list:</h1>

            </div>
        )
    }
}

moviesList.PropTypes ={

};

const mapStateToProps = (state) => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesList);