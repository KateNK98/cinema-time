import { useEffect, useState } from "react";
import LatestMovie from "./latest-movie/LatestMovie";
import HomeSeries from "./homeSeries/HomeSeries";
import VideoHome from "./homeVideo/VideoHome";
import moviesAPI from "../../api/moviesAPI";

import styles from '../home/Home.module.css'

export default function Home() {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect (() => {
        (async () => {
            const resultMovies = await moviesAPI.getLatestMovies();

            setLatestMovies(resultMovies);
        })();
    }, []);

    return(
        <>
            <VideoHome />
            <div className="row">
                <div className="col">
                    <h2>Movie</h2>
                    <div className={styles.list_view}>
                    {latestMovies.length > 0
                ? latestMovies.map(movie => <LatestMovie key={movie._id} {...movie} />)
                : <p>No movies to show</p>
            }
                    </div>
                </div>
            </div>
            <HomeSeries />
        </>
    )
}