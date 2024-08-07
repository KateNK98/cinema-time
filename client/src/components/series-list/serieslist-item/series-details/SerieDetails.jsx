import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetOneSeries } from "../../../../hooks/useSeries";
import { useCreateCommentSerie, useGetAllCommentsSerie } from "../../../../hooks/useCommentsSeries";
import { useFormSeries } from "../../../../hooks/useFormSeries";
import seriesAPI from "../../../../api/seriesAPI";
import { useAuthContext } from "../../../../contexts/AuthContext";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../../main.css'


const initialValues = {
    comment: ''
}

export default function SerieDetails() {
    const navigate = useNavigate();
    const {serieId} = useParams();
    const [comments, setComments] = useGetAllCommentsSerie(serieId);
    const createComment = useCreateCommentSerie();
    const {userId, email} = useAuthContext();
    const [serie] = useGetOneSeries(serieId);
    const {isAuthenticated} = useAuthContext();
    const {
        changeHandler,
        submitHandler,
        values,
    } = useFormSeries(initialValues, async ({comment}) => {
        try {
            const newComment = await createComment(serieId, comment);

            setComments(oldComments => [...oldComments, {...newComment, author: {email}}]);
        } catch (err) {
            console.log(err.message);
        }
    });

    const serieDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete "${serie.title}" serie?`);
        if (!isConfirmed) {
            return;
        }

        try {
            await seriesAPI.remove(serieId);

            navigate('/series')
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === serie._ownerId;

    return(
        <div className="text-center mt-4">
            <div className="row">
                <div className="col">
                    <img className="mb-5 h-50" src={serie.imgURL} />
                    <div className="row">
                        <div className="col">
                            <h2>{serie.title}</h2>
                            <p>Year: {serie.year} &#x2756; Genre: {serie.genre}</p>
                            <p>Rating: {serie.rate}/10</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{serie.summary}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Directed by:</h3>
                            <p>{serie.director}</p>
                        </div>
                        <div className="col">
                            <h3>Writing by:</h3>
                            <p>{serie.writers}</p>
                        </div>
                        <div className="col">
                            <h3>Main cast:</h3>
                            <p>{serie.main_cast}</p>
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
                        <Link to={`/series/${serieId}/edit`} className="btn btn-primary me-3">Edit</Link>
                        <a href="#" onClick={serieDeleteHandler} className="btn btn-primary">Delete</a>
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