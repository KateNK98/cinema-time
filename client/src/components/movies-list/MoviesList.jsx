// import { useEffect, useState } from 'react';

// import movieAPI from '../../api/movieAPI';

import { useGetAllMovies } from '../../hooks/useMovies';
import MoviesListItem from './movies-list-item/MoviesListItem';

import styles from './MoviesList.module.css'

export default function MoviesList() {
    const [movies] = useGetAllMovies();
    
// const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         movieAPI.getAllMovies()
//         .then(result => setMovies(result));
//     }, []);

    return(
        <div className="row mb-3">
            <div className="col-12 mt-3  text-center">
                <h2>Movies</h2>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className={styles.list_view}>
                        {movies.length > 0
                            ? movies.map(movie => <MoviesListItem key={movie._id} {...movie} />)
                            : <h3>No movies to show</h3>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}