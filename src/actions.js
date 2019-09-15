import uuid from "uuid";

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//Add comment
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

//Remove comment
export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

//Edit comment
export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

//Thumb up
export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    };
}

//Thumb down
export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    };
}
