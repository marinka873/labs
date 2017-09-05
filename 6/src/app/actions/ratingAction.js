import {ADD_RATING} from "../constants/ratingConstants";

export function addRating(value, userName, movieId) {
    return {
        type: ADD_RATING,
        rating: {
            value: value,
            user: userName,
            movieId: movieId
        }
    }
}