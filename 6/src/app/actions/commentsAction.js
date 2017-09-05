import {ADD_COMMENT} from "../constants/commentsConstants";

export function addComment(value, user, movieId, date) {
    return {
        type: ADD_COMMENT,
        comment: {
            value: value,
            user: user,
            movieId: movieId,
            date: date
        }
    }
}