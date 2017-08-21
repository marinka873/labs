export const FILM_LIST = require('../films.json');
export const GET_FILM_IMAGE = 'GET_FILM_IMAGE';
export const GET_FILM_NAME = 'GET_FILM_NAME';
export const GET_FILM_DESCRIPTION = 'GET_FILM_DESCRIPTION';


export function getFilmImage (image) {
    return {type: GET_FILM_IMAGE, payload: image}
}

export function getFilmName(name) {
    return {type: GET_FILM_NAME, payload:name}
}
export function getFilmDescription(description) {
    return {typr: GET_FILM_DESCRIPTION, payload: description}
}