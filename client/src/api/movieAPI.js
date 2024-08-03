import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/movies'

export const getAllMovies = async () => {
    const result = await request.get(BASE_URL);

    const movies = Object.values(result);

    return movies;
};

export const getOneMovie = (movieId) => request.get(`${BASE_URL}/${movieId}`);

export const create = (movieData) => request.post(`${BASE_URL}`, movieData)

const moviesAPI = {
    getAllMovies,
    getOneMovie,
    create,
};

export default moviesAPI;