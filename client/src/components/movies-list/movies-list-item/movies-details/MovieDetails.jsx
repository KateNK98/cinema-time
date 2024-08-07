import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetOneMovies } from "../../../../hooks/useMovies";
import { useFormMovies } from "../../../../hooks/useFormMovies";
import { useGetAllCommentsMovie, useCreateCommentMovie } from "../../../../hooks/useCommentsMovies";
import { useAuthContext } from "../../../../contexts/AuthContext";
import moviesAPI from "../../../../api/moviesAPI";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../../main.css'

const initialValues = {
    comment: ''
}

export default function MovieDetails() {
    const navigate = useNavigate();
    const {movieId} = useParams();
    const [comments, setComments] = useGetAllCommentsMovie(movieId);
    const createComment = useCreateCommentMovie();
    const {userId, email} = useAuthContext();
    const [movie] = useGetOneMovies(movieId);
    const {isAuthenticated} = useAuthContext();
    const {
        changeHandler,
        submitHandler,
        values,
    } = useFormMovies(initialValues, async ({comment}) => {
        try {
            const newComment = await createComment(movieId, comment);

            setComments(oldComments => [...oldComments, {...newComment, author: {email}}]);
        } catch (err) {
            console.log(err.message);
        }
    });

    const movieDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete "${movie.title}" movie?`);
        if (!isConfirmed) {
            return;
        }

        try {
            await moviesAPI.remove(movieId);

            navigate('/movies')
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === movie._ownerId;

    return(
        <div className="text-center mt-4">
            <div className="row">
                <div className="col">
                    <img className="mb-5 h-50" src={movie.imgURL} />
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
                            <p>{movie.writers}</p>
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
                        {comments.map(comment => (
                                <li key={comment._id}>
                                    <p>{comment.author.email}: {comment.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                    {comments.length === 0 && <h3>No comments.</h3>}
                </div>
            </div>
            {isOwner && (
                <div className="row">
                    <div className="text-end">
                        <Link to={`/movies/${movieId}/edit`} className="btn btn-primary me-3">Edit</Link>
                        <a href="#" onClick={movieDeleteHandler} className="btn btn-primary">Delete</a>
                    </div>
                </div>
            )}

            <div>
                {isAuthenticated && (
                    <article>
                        <label>Add new comment:</label>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='formControl' as="textarea" name="comment" placeholder="Comment......" onChange={changeHandler} value={values.comment} rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Add Comment">Submit</Button>
                        </Form>
                    </article>
                )}
            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}