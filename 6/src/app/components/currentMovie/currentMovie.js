import React from 'react';
import {connect} from 'react-redux';

import ComponentNavbar from '../navbar/Menu';
import UserComments from '../comments/comments';

class currentMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    getMovieId = () => {
        let movieUrlId = this.props.match.params.id;
        let selectMovieId = this.props.filmsList.filter((movie) => {
            return movie.idMovie === movieUrlId
        });
        return selectMovieId.map((movie, i) => {
                return <div key={i}>
                    <h1>{movie.movieName}</h1>
                    <img src={movie.movieImage}/>
                    <p>{movie.movieDescription}</p>
                </div>
            }
        );
    };

    render() {
        return (
            <div className="component-navbar">
                <ComponentNavbar/>

                <div className="jumbotron">

                    {this.getMovieId()}

                    <UserComments movieId={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}

currentMovie.defaultProps = {
    filmsList: [],
    userLogin: {}
};

const mapStateToProps = (state) => {
    return {
        filmsList: state.movies,
        login: state.user.login
    }
};

export default connect(mapStateToProps)(currentMovie);