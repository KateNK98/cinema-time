import { useEffect, useState } from 'react';

import serieCommentsAPI from '../api/series-comments-api';


export function useCreateCommentSerie() {
    const createHandler = (serieId, comment) => serieCommentsAPI.create(serieId, comment)

    return createHandler;
}

export function useGetAllCommentsSerie(serieId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await serieCommentsAPI.useGetAllCommentsSerie(serieId);

            setComments(result);
        })()
    }, [serieId]);

    return [comments, setComments];
}