export const FILM_LIST = require('../films.json');
export const GET_FILM_IMAGE = 'GET_FILM_IMAGE';
export const GET_FILM_NAME = 'GET_FILM_NAME';
export const GET_FILM_DESCRIPTION = 'GET_FILM_DESCRIPTION';


export default function getFilmImage (image) {
    return {type: GET_FILM_IMAGE, payload: image}
}