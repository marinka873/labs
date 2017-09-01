import {ADD_RATING} from "../constants/ratingConstants";

export function addRaiting(value, userName, movieId) {
    return {
        type: ADD_RATING,
        raiting: {
            value: value,
            user: userName,
            movieId: movieId
        }
    }
}