import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {setMoviesList} from '../../actions/movieAction';
import movieJSON from '../../movie.json';
import ComponentNavbar from '../navbar/Menu';


class moviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.props.loadMovie(movieJSON);
    }

    componentDidUpdate() {

    }

    handleChangeSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        });

        let searchValue = this.state.search;

        let filterMoviesList = this.props.filmsList.filter((searchMovie) => {
            return searchMovie.movieName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        });

        return filterMoviesList.map((searchMovie, i) => {
            return <div className="component__search" key={i}>
                <h3>{searchMovie.movieName}</h3>
                <img src={searchMovie.movieImage}/>
                <p>{searchMovie.movieDescription}</p>
            </div>
        })
    };

    renderMoviesList = () => {
        this.props.filmsList.map((filmList, i) => {
            return <div key={i}>
                <Link to={`/currentMovie/${filmList.id}`}>
                    <h3>{filmList.movieName}</h3>
                </Link>
                <img src={filmList.movieImage}/>
                <p>{filmList.movieDescription}</p>
            </div>
        })
    };

    render() {
        return (
            <div className="container-film">
                <ComponentNavbar/>

                <div className="component-search">
                    <form className="form-group">
                        <input className="form-control" id="focusedInput" type="text" placeholder="Search movies ..."
                               value={this.state.search} onChange={this.handleChangeSearch}/>
                    </form>
                </div>

                <h1>Movie list:</h1>

                {this.props.filmsList.map((filmList, id) => {
                    return <div key={id}>
                        <Link to={`/currentMovie/${filmList.id}`}>
                            <h3>{filmList.movieName}</h3>
                        </Link>
                        <img src={filmList.movieImage}/>
                        <p>{filmList.movieDescription}</p>
                    </div>
                })}

                {this.renderMoviesList()}

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