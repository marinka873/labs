import {ADD_COMMENT} from "../constants/comments";

export function addComment(userComment){
    return {
        type: ADD_COMMENT,
        comment: userComment
    }
}