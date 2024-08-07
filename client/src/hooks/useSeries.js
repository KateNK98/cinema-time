import { useEffect, useState } from 'react';

import seriesAPI from '../api/seriesAPI';

export function useGetAllSeries() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        seriesAPI.getAllSeries()
        .then(result => setSeries(result));
    }, []);

    return [series, setSeries]
}

export function useGetOneSeries(serieId) {
    const [serie, setSerie] = useState({
        title: '',
        year: '',
        genre: '',
        rate: '',
        summary: '',
        imgURL: '',
        director: '',
        writers: '',
        main_cast: '',
    });

    useEffect(() => {
        (async () => {
            const result = await seriesAPI.getOneSerie(serieId);
            setSerie(result);
        })();
    }, [serieId]);

    return [
        serie,
        setSerie,
    ];

}

export function useCreateSerie() {
    const serieCreateHandler = (serieData) => seriesAPI.create(serieData);

    return serieCreateHandler;
}