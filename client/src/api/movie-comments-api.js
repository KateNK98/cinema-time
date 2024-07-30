import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/cinema/movies/';

const buildUrl = (movieId) => `${BASE_URL}/${movieId}/comments`;

const create = async (movieId, username, text) => {
    const result = await requester.post(buildUrl(movieId), {username, text})

    const comments = Object.values(result);

    return comments;
};

export default {
    create,
}