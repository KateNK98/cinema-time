import { useEffect, useState } from 'react';

import moviesAPI from '../api/moviesAPI';


export function useGetAllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesAPI.getAllMovies()
        .then(result => setMovies(result));
    }, []);

    return [movies, setMovies]
}

export function useGetOneMovies(movieId) {
    const [movie, setMovie] = useState({
        title: '',
        year: '',
        genre: '',
        rate: 0,
        summary: '',
        imgURL: '',
        director: '',
        writers: '',
        main_cast: '',
    });

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getOneMovie(movieId);
            setMovie(result);
        })();
    }, [movieId]);

    return [
        movie,
        setMovie,
    ];

}

export function useCreateMovie() {
    const movieCreateHandler = (movieData) => moviesAPI.create(movieData);

    return movieCreateHandler;
}