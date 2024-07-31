// import { useEffect, useState } from "react"
// import moviesAPI from "../../../../api/movieAPI";
import { useState } from "react"
import { useParams } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import movieCommentsApi from "../../../../api/movie-comments-api";
import { useGetOneMovies } from "../../../../hooks/useMovies";


export default function MovieDetails() {
    // const [movie, setMovie] = useState({});
    const {movieId} = useParams();
    const[username, setUsername] = useState('');
    const [comment, setComment] = useState('')
    const [movie, setMovie] = useGetOneMovies(movieId);

    // useEffect(() => {
    //     (async () => {
    //         const result = await moviesAPI.getOneMovie(movieId);
    //         setMovie(result);
    //     })();
    // }, []);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await movieCommentsApi.create(movieId, username, comment);

        setMovie(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }));

        setUsername('');
        setComment('');
    };

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
                    <div className="row">


            <div className="text-center">
                <h2>Comments:</h2>
                </div>
                <div className="col">
                    <ul>
                        {Object.keys(movie.comments || {}).length > 0
                            ? Object.values(movie.comments).map(comment => (
                                <li key={comment._id}>
                                    <p>{comment.username}: {comment.text}</p>
                                </li>
                            ))
                            : <h3>No comments.</h3>
                        }
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>No comments.</p>
                </div>
            </div>
            <div className="row">
                <div className="text-end">
                    <a href="#" className="btn btn-primary">Edit</a>
                    <a href="#" className="btn btn-primary">Delete</a>
                </div>
            </div>

            <div>
                <article>
                    <label>Add new comment:</label>
                    <Form onSubmit={commentSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Ivan" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                            <Form.Control as="textarea" name="comment" placeholder="Comment......" onChange={(e) => setComment(e.target.value)} value={comment} rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Add Comment">Submit</Button>
                    </Form>
                </article>
            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}