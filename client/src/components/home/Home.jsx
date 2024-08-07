import { useEffect, useState } from "react";

import LatestMovie from "./latest-movie/LatestMovie";
import VideoHome from "./homeVideo/VideoHome";
import moviesAPI from "../../api/moviesAPI";
import LatestSerie from "./lates-series/LatestSeries";
import seriesAPI from "../../api/seriesAPI";

import styles from '../home/Home.module.css'


export default function Home() {
    const [latestMovies, setLatestMovies] = useState([]);
    const [latestSeries, setLatestSeries] = useState([]);    

    useEffect (() => {
        (async () => {
            const resultMovies = await moviesAPI.getLatestMovies();

            setLatestMovies(resultMovies);
        })();
    }, []);

    useEffect (() => {
        (async () => {
            const resultSeries = await seriesAPI.getLatestSeries();

            setLatestSeries(resultSeries);
        })();
    }, []);

    return(
        <>
            <VideoHome />
            <div className="row mt-5 mb-5">
                <div className="col">
                    <h2>Latest movies</h2>
                    <div className={styles.list_view}>
                    {latestMovies.length > 0
                ? latestMovies.map(movie => <LatestMovie key={movie._id} {...movie} />)
                : <p>No movies to show</p>
            }
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col">
                    <h2>Latest series</h2>
                    <div className={styles.list_view}>
                    {latestSeries.length > 0
                ? latestSeries.map(serie => <LatestSerie key={serie._id} {...serie} />)
                : <p>No series to show</p>
            }
                    </div>
                </div>
            </div>
        </>
    )
}