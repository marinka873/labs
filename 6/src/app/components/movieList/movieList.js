import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {setMoviesList} from '../../actions/movieAction';
import movieJSON from '../../movie.json';
import ComponentNavbar from '../navbar/Menu';


class moviesList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMovie(movieJSON);
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div className="container-film">
                <ComponentNavbar/>

                <h1>Movie list:</h1>

                {this.props.filmsList.map((filmList, id) => {
                    return <div key={id}>
                        <Link to={`/currentMovie/${filmList.idMovie}`}>
                            <h3>{filmList.movieName}</h3>
                        </Link>
                        <img src={filmList.movieImage} />
                        <p>{filmList.movieDescription}</p>
                    </div>
                })}
            </div>
        )
    }
}

moviesList.defaultProps = {
    filmsList: []
};

moviesList.PropTypes = {
    loadMovie: PropTypes.func.isRequired,
    filmsList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        filmsList: state.movies,
        login: state.user.login
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        loadMovie: (movieJSON) => {
            dispatch(setMoviesList(movieJSON))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesList);