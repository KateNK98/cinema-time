import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments-serie';

const create = (serieId, text) => requester.post(BASE_URL, {serieId, text});

const getAllSerieComments = (serieId) => {
    const params = new URLSearchParams({
        where: `serieId="${serieId}"`,
        load: `author=_ownerId:users`,
    });
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const serieCommentsAPI = {
    create,
    getAllSerieComments,
}

export default serieCommentsAPI;