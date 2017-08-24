import axios from 'axios';

import getMovieList, {GET_MOVIE_LIST} from '../actions/movieAction';
import {GET_MOVIE_DESCRIPTION, GET_MOVIE_IMAGE, GET_MOVIE_NAME} from "../constants/movieConstants";


function getMoviesss() {
    return axios.get('../movie.json')
        .then((response) => {
        return response.data
            .then(data => {
               console.log(data)
            })
        })
}

export default function movieReducer(state = [], action = {}){
    switch (action.type){
        case GET_MOVIE_LIST:
            return action.payload;
            break;
        case GET_MOVIE_NAME:
            return action.payload;
            break;
        case GET_MOVIE_DESCRIPTION:
            return action.payload;
            break;
        case GET_MOVIE_IMAGE:
            return action.payload;
            break;
        default: return state;
        break;
    }
}
