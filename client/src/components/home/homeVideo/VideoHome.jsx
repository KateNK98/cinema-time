import { useGetAllMovies, useGetOneMovies } from "../../../hooks/useMovies";
import RatedMovie from "./rated-movie/RatedMovie";
import { useEffect, useState } from "react";
import moviesAPI from "../../../api/moviesAPI";
import styles from "./rated-movie/RatedMovie.module.css";

export default function VideoHome() {
  const [movies] = useGetAllMovies();
  const [ratedMovie, setRatedMovie] = useState([]);

  
  useEffect (() => {
    (async () => {
        const resultMovie = await moviesAPI.getRatedMovie();

        setRatedMovie(resultMovie);
    })();
}, []);

  return(
    <div className="row mt-3">
      <div className="col-8">
        <h2 className="mb-4">Our most liked animated movie</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" width="853" height="480" src="https://www.youtube.com/embed/hXzcyx9V0xw" title="Elemental | Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-4">
        <div>
          <h2 className="mb-5">Rated movies</h2>
          <div className={styles.list_view}>
            {ratedMovie.length > 0
              ? ratedMovie.map(movie => <RatedMovie key={movie._id} {...movie} />)
              : <p>No movies to show</p>
            }
          </div>
          {/* {movies.length > 0
            ? movies.map(movie => <VideoMovieDetails key={movie._id} {...movie} />)
            : <h3>No movies to show</h3>
          } */}
        </div>
      </div>
    </div>
  )
}