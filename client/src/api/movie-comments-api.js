import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/cinema/movies/';

const buildUrl = (movieId) => `${BASE_URL}/${movieId}/comments`;

const create = (movieId, username, text) => requester.post(buildUrl(movieId), {username, text});

const getAllMovieComments = async (movieId) => {
    const result = await requester.get(buildUrl(movieId));

    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAllMovieComments,
}