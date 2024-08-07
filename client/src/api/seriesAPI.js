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

export const getRatedSerie = async () => {
    const params = new URLSearchParams();
    params.append('sortBy', 'rate desc');  // Automatically handles space encoding
    params.append('pageSize', '1');

    console.log('Fetching URL:', `${BASE_URL}?${params.toString()}`);

    try {
        const result = await request.get(`${BASE_URL}?${params.toString()}`);
        console.log('Fetched Result:', result);

        const ratedSerie = Object.values(result);
        console.log('Rated Serie:', ratedSerie);

        return ratedSerie;
    } catch (error) {
        console.error('Error fetching rated serie:', error);
        throw error;
    }
};

export const getOneSerie = (serieId) => request.get(`${BASE_URL}/${serieId}`);

export const create = (serieData) => request.post(`${BASE_URL}`, serieData)

export const remove = (serieId) => request.del(`${BASE_URL}/${serieId}`);

export const update = (serieId, serieData) => request.put(`${BASE_URL}/${serieId}`, serieData)

const seriesAPI = {
    getAllSeries,
    getOneSerie,
    getLatestSeries,
    getRatedSerie,
    create,
    remove,
    update,
};

export default seriesAPI;