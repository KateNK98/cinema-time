import { useEffect, useState } from "react";
import HomeMovie from "./homeMovie/HomeMovie";
import HomeSeries from "./homeSeries/HomeSeries";
import VideoHome from "./homeVideo/VideoHome";
import LatestMoviesSeries from "./latestMoviesSeries/LaestMoviesSeries";
import moviesAPI from "../../api/movieAPI";

import styles from '../home/Home.module.css'

export default function Home() {
    const [showMovies, setShowMovies] = useState([]);

    useEffect (() => {
        (async () => {
            const resultMovies = await moviesAPI.getAllMovies();

            setShowMovies(resultMovies.reverse().slice(0, 4));
        })();
    }, []);

    return(
        <>
            <VideoHome />
            <div className="row">
                <div className="col">
                    <h2>Movie</h2>
                    <div className={styles.list_view}>
                    {showMovies.length > 0
                ? showMovies.map(movie => <HomeMovie key={movie._id} {...movie} />)
                : <p>No movies to show</p>
            }
                    </div>
                </div>
            </div>
            <HomeSeries />
            <LatestMoviesSeries />
        </>
    )
}