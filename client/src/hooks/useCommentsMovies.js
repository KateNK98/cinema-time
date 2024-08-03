import { useEffect, useState } from 'react';
import movieCommentsAPI from '../api/movie-comments-api';

export function useCreateCommentMovie() {
    const createHandler = (movieId, comment) => movieCommentsAPI.create(movieId, comment)

    return createHandler;
}

export function useGetAllCommentsMovie(movieId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await movieCommentsAPI.getAllMovieComments(movieId);

            setComments(result);
        })()
    }, [movieId]);

    return [comments, setComments];
}