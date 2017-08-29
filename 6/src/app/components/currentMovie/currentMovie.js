import React from 'react';
import {connect} from 'react-redux';

import ComponentNavbar from '../navbar/Menu';
import UserComments from '../comments/comments';

class currentMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="component-navbar">
                <ComponentNavbar/>
                <div className="jumbotron">

                    {this.props.filmsList.map((currentFilm, id) => {
                        if (this.props.match.params.id === currentFilm.idMovie){
                            return (
                                <div key={id}>
                                    <h1>{currentFilm.movieName}</h1>
                                    <img src={currentFilm.movieImage}/>
                                    <p>{currentFilm.movieDescription}</p>
                                </div>
                            )
                        }

                    })}

                </div>

                <UserComments/>
            </div>
        )
    }
}

currentMovie.defaultProps = {
    filmsList: [],
    userLogin: { }
};

const mapStateToProps = (state) => {
    return{
        filmsList: state.movie,
        login: state.user.login
    }
};

export default connect(mapStateToProps) (currentMovie);