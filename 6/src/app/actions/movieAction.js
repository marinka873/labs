import {SET_MOVIE_LIST} from "../constants/movieConstants";


export function setMoviesList(moviesList){
    return {type: SET_MOVIE_LIST,
             list: moviesList}
}