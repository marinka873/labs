
export const GET_MOVIE_IMAGE = 'GET_FILM_IMAGE';
export const GET_MOVIE_NAME = 'GET_FILM_NAME';
export const GET_MOVIE_DESCRIPTION = 'GET_FILM_DESCRIPTION';


export function getMovieImage (image) {
    return {type: GET_MOVIE_IMAGE, payload: image}
}

export function getMovieName (name) {
    return {type: GET_MOVIE_NAME, payload:name}
}
export function getMovieDescription (description) {
    return {typr: GET_MOVIE_DESCRIPTION, payload: description}
}