import {ADD_RATING} from "../constants/ratingConstants";

export function addRaiting(userRaiting, currentUser, currentMovie) {
    return {
        type: ADD_RATING,
        raiting: {
            raiting: userRaiting,
            raitingUser: currentUser,
            raitingMovie: currentMovie
        }
    }
}