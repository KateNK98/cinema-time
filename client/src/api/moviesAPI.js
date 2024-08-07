import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/movies'

export const getAllMovies = async () => {
    const result = await request.get(BASE_URL);
    const movies = Object.values(result);

    return movies;
};

export const getLatestMovies = async () => {
    const params = new URLSearchParams({
        sordBy: '_createdOn desc',
        pageSize: 4,
    });

    console.log(params.toString());

    const result = await request.get(`${BASE_URL}?${params.toString()}`);

    const latestMovies = Object.values(result);

    return latestMovies;
};

export const getRatedMovie = async () => {
    const params = new URLSearchParams({
        sordBy: 'rate desc',
        pageSize: 1,
    });

    console.log(params.toString());

    const result = await request.get(`${BASE_URL}?${params.toString()}`);

    const ratedMovies = Object.values(result);

    return ratedMovies;

    // const params = new URLSearchParams();
    // params.append('sortBy', 'rate desc');  // Automatically handles space encoding
    // params.append('pageSize', '1');

    // console.log('Fetching URL:', `${BASE_URL}?${params.toString()}`);

    // try {
    //     const result = await request.get(`${BASE_URL}?${params.toString()}`);
    //     console.log('Fetched Result:', result);

    //     const ratedMovie = Object.values(result);
    //     console.log('Rated Movie:', ratedMovie);

    //     return ratedMovie;
    // } catch (error) {
    //     console.error('Error fetching rated movie:', error);
    //     throw error;
    // }
};

export const getOneMovie = (movieId) => request.get(`${BASE_URL}/${movieId}`);

export const create = (movieData) => request.post(`${BASE_URL}`, movieData)

export const remove = (movieId) => request.del(`${BASE_URL}/${movieId}`);

export const update = (movieId, movieData) => request.put(`${BASE_URL}/${movieId}`, movieData)

const moviesAPI = {
    getAllMovies,
    getOneMovie,
    getLatestMovies,
    getRatedMovie,
    create,
    remove,
    update,
};

export default moviesAPI;