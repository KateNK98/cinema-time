import { useEffect, useState } from 'react';
import * as movieAPI from '../../api/movieAPI';
import MoviesListItem from './movies-list-item/MoviesListItem';

import styles from './MoviesList.module.css'

export default function MoviesList() {
const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieAPI.getAllMovies()
        .then(result => setMovies(result));
    }, []);

    return(
        <div className="row  className='mb-3'">
            <div className="col-12">
                <h2>Movie</h2>
            </div>

            <div className="row">
                <div className="col">
                    <div className={styles.list_view}>
                    {movies.map(movie => <MoviesListItem key={movie._id} {...movie} />)}
                    </div>
                </div>
            </div>

        </div>
    )
}