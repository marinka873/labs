import {ADD_COMMENT} from "../constants/commentsConstants";

export function addComment(userComment, currentUser, currentMovie, dateComments) {
    return {
        type: ADD_COMMENT,
        comment: {
            comment: userComment,
            commentsUser: currentUser,
            commentsMovie: currentMovie,
            commentsDate: dateComments
        }
    }
}