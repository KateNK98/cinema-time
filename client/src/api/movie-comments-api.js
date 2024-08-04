import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments-movie';

const create = (movieId, text) => requester.post(BASE_URL, {movieId, text});

// const getAllMovieComments = async (movieId) => await requester.get(BASE_URL);
const getAllMovieComments = (movieId) => {
    const params = new URLSearchParams({
        where: `movieId="${movieId}"`,
        load: `author=_ownerId:users`,
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const movieCommentsAPI = {
    create,
    getAllMovieComments,
}

export default movieCommentsAPI;