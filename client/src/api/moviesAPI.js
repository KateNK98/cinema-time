import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/movies'

export const getAllMovies = async () => {
    const result = await request.get(BASE_URL);
    const movies = Object.values(result);

    return movies;
};

export const getLatestMovies = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    });

    console.log(urlSearchParams.toString());

    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestMovies = Object.values(result);

    return latestMovies;
};

export const getOneMovie = (movieId) => request.get(`${BASE_URL}/${movieId}`);

export const create = (movieData) => request.post(`${BASE_URL}`, movieData)

export const remove = (movieId) => request.del(`${BASE_URL}/${movieId}`);

export const update = (movieId, movieData) => request.put(`${BASE_URL}/${movieId}`, movieData)

const moviesAPI = {
    getAllMovies,
    getOneMovie,
    getLatestMovies,
    create,
    remove,
    update,
};

export default moviesAPI;