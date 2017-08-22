import axios from 'axios';
import getMovieName from '../actions/movieAction';
import getMovieIMage from '../actions/movieAction';
import getMovieDescription from '../actions/movieAction';



function getMovie() {
    return axios.get('../movie.json')
        .then((response) => {
        return response.data
        })
}

function MovieList(state = [], action){
    switch (action.type){


        default: return state;
    }
}