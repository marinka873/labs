import {ADD_COMMENT} from "../constants/commentsConstants";

export function addComment(userComments, currentUser, currentMovie, dateComments) {
    return {
        type: ADD_COMMENT,
        comments: {
            comments: userComments,
            commentsUser: currentUser,
            commentsMovie: currentMovie,
            commentsDate: dateComments
        }
    }
}