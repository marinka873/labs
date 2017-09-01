import {ADD_COMMENT} from "../constants/commentsConstants";

export function addComment(userComment, currentUser, currentMovie, dateComments) {
    return {
        type: ADD_COMMENT,
        comment: {
            comment: userComment,
            commentUser: currentUser,
            commentsMovie: currentMovie,
            commentsDate: dateComments
        }
    }
}