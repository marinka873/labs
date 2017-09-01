import {ADD_RATING} from "../constants/ratingConstants";

export function addRaiting(value, userName, idMovie) {
    return {
        type: ADD_RATING,
        raiting: {
            value: value,
            user: userName,
            movieId: idMovie
        }
    }
}