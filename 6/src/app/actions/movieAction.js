import {GET_MOVIE_DESCRIPTION, GET_MOVIE_IMAGE, GET_MOVIE_LIST, GET_MOVIE_NAME} from "../constants/movieConstants";

export function getMovieImage (image) {
    return {type: GET_MOVIE_IMAGE,
        payload: image}
}

export function getMovieName (name) {
    return {
        type: GET_MOVIE_NAME,
        payload:name}
}
export function getMovieDescription (description) {
    return {type: GET_MOVIE_DESCRIPTION,
        payload: description}
}

export function getMoviesList(moviesList){
    return {type: GET_MOVIE_LIST,
        payload: moviesList}
}