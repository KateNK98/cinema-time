import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/cinema/movies'

export const getAllMovies = async () => {
    const result = await request.get(BASE_URL);

    const movies = Object.values(result);

    return(movies);
};