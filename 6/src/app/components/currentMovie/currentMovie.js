import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../navbar/navbar';
import Comments from '../comments/comments';
import Rating from '../raiting/raiting';

class CurrentMovie extends React.Component {

    renderMovie = () => {
        let movieId = this.props.match.params.id;

        let MovieId = this.props.filmsList.filter((movie) => {
            return movie.id === movieId
        });
        return MovieId.map((movie, i) => {
                return <div key={i}>
                    <h1>{movie.name}</h1>
                    <img src={movie.image}/>
                    <p>{movie.description}</p>
                </div>
            }
        );
    };

    render() {
        return (
            <div className="component-navbar">
                <Navbar history={this.props.history}/>
                <div className="jumbotron">
                    <div>{this.renderMovie()}</div>
                    <Rating movieId={this.props.match.params.id}/>
                    <Comments movieId={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}

CurrentMovie.defaultProps = {
    filmsList: []
};

CurrentMovie.PropTypes = {
    renderMovie: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        filmsList: state.movies
    }
};

export default connect(mapStateToProps)(CurrentMovie);