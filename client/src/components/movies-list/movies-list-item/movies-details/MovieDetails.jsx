import { useEffect, useState } from "react"
import moviesAPI from "../../../../api/movieAPI";
import { useParams } from "react-router-dom";
import MovieComments from "./movie-comments/MovieComments";

export default function MovieDetails() {
    const [movie, setMovie] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getOneMovie(movieId);
            setMovie(result);
        })();
    }, []);

    return(
        <div className="text-center mt-4">
            <div className="row">
                <div className="col">
                    <img className="mb-5" src={movie.imgURL} />
                    <div className="row">
                        <div className="col">
                            <h2>{movie.title}</h2>
                            <p>Year: {movie.year} &#x2756; Genre: {movie.genre}</p>
                            <p>Rating: {movie.rate}/10</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{movie.summary}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Directed by:</h3>
                            <p>{movie.director}</p>
                        </div>
                        <div className="col">
                            <h3>Writing by:</h3>
                            <p>{movie.Writers}</p>
                        </div>
                        <div className="col">
                            <h3>Main cast:</h3>
                            <p>{movie.main_cast}</p>
                        </div>
                    </div>
                    <div className="text-start">
                        <MovieComments />
                    </div>
                </div>
            </div>
        </div>
    )
}