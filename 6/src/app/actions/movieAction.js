import {SET_MOVIE_LIST, setMovieList} from "../constants/movieConstants";

export const setMoviesList = (moviesList) => (dispatch, getState) => {
    let state = getState();
    let stateMovie = state.movies;

    if (stateMovie.length === 0) {
        return  dispatch({
            type: SET_MOVIE_LIST,
            list: moviesList
        })
    }
};