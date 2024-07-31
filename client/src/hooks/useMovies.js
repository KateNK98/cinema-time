import { useEffect, useState } from 'react';

import moviesAPI from '../api/movieAPI';

export function useGetAllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesAPI.getAllMovies()
        .then(result => setMovies(result));
    }, []);

    return [movies, setMovies]
}