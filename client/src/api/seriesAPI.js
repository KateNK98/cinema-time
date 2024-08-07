import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/series'

export const getAllSeries = async () => {
    const result = await request.get(BASE_URL);
    const series = Object.values(result);

    return series;
};

export const getLatestSeries = async () => {
    const params = new URLSearchParams({
        sordBy: '_createdOn desc',
        pageSize: 4,
    });

    console.log(params.toString());

    const result = await request.get(`${BASE_URL}?${params.toString()}`);

    const latestSeries = Object.values(result);

    return latestSeries;
};


export const getOneSerie = (serieId) => request.get(`${BASE_URL}/${serieId}`);

export const create = (serieData) => request.post(`${BASE_URL}`, serieData)

export const remove = (serieId) => request.del(`${BASE_URL}/${serieId}`);

export const update = (serieId, serieData) => request.put(`${BASE_URL}/${serieId}`, serieData)

const seriesAPI = {
    getAllSeries,
    getOneSerie,
    getLatestSeries,
    create,
    remove,
    update,
};

export default seriesAPI;