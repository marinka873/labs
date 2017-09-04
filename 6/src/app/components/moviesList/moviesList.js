import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {setMoviesList} from '../../actions/movieAction';
import movieJSON from '../../movie.json';
import Navbar from '../navbar/navbar';


class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.props.setMoviesList(movieJSON);
    }

    handleChangeSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        });

        let searchValue = this.state.search;

        let filterMoviesList = this.props.filmsList.filter((search) => {
            return search.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        });

        return filterMoviesList.map((search, i) => {
            return <div className="component__search" key={i}>
                <h3>{search.name}</h3>
                <img src={search.image}/>
                <p>{search.description}</p>
            </div>
        })
    };

    renderMoviesList = () => {
       return this.props.filmsList.map((filmList, i) => {
            return <div key={i}>
                <Link to={`/currentMovie/${filmList.id}`}>
                    <h3>{filmList.name}</h3>
                </Link>
                <img src={filmList.image}/>
                <p>{filmList.description}</p>
            </div>
        })
    };

    render() {
        return (
            <div className="container-film">
                <Navbar/>

                <div className="component-search">
                    <form className="form-group">
                        <input className="form-control" id="focusedInput" type="text" placeholder="Search movies ..."
                               value={this.state.search} onChange={this.handleChangeSearch}/>
                    </form>
                </div>

                <h1>Movie list:</h1>

                {this.renderMoviesList()}

            </div>
        )
    }
}

MoviesList.defaultProps = {
    filmsList: []
};

MoviesList.PropTypes = {
    setMoviesList: PropTypes.func.isRequired,
    filmsList: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        filmsList: state.movies
    }
};

const mapDispatchToProps = () => {
    return dispatch => ({
        setMoviesList: (movieJSON) => {
            dispatch(setMoviesList(movieJSON))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);