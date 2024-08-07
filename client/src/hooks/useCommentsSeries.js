import { useEffect, useState } from 'react';

import movieCommentsAPI from '../api/movie-comments-api';


export function useCreateCommentSerie() {
    const createHandler = (movieId, comment) => movieCommentsAPI.create(movieId, comment)

    return createHandler;
}

export function useGetAllCommentsSerie(movieId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await movieCommentsAPI.getAllSerieComments(movieId);

            setComments(result);
        })()
    }, [movieId]);

    return [comments, setComments];
}