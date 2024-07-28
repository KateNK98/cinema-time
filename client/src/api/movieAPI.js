import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/movies'

export const getAllMovies = () => request.get(BASE_URL);