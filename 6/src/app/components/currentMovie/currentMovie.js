import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar/navbar';
import Comments from '../comments/comments';
import Raiting from '../raiting/raiting';

class CurrentMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    getMovieId = () => {
        let movieUrlId = this.props.match.params.id;
        let currentMovieId = this.props.filmsList.filter((movie) => {
            return movie.id === movieUrlId
        });
        return currentMovieId.map((movie, i) => {
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
                <Navbar/>

                <div className="jumbotron">

                    {this.getMovieId()}

                    <Raiting movieId={this.props.match.params.id}/>
                    <Comments movieId={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}

CurrentMovie.defaultProps = {
    filmsList: []
};

const mapStateToProps = (state) => {
    return {
        filmsList: state.movies
    }
};

export default connect(mapStateToProps)(CurrentMovie);