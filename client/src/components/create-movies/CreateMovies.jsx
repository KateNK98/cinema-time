import { useFormMovies } from "../../hooks/useFormMovies";

import Form from 'react-bootstrap/Form';
import { useCreateMovie } from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const initialValues = {
    title: '',
    year: '',
    genre: '',
    rate: '',
    summary: '',
    imgURL: '',
    director: '',
    Writers: '',
    main_cast: '',
};


export default function CreateMovies() {
    const navigate = useNavigate();
    const createMovie = useCreateMovie();

    const createHandler = async (values) => {
        try {
            const {_id: movieId} = await createMovie(values);
            navigate(`/cinema/movies/${movieId}/details`);
        } catch (err) {
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useFormMovies(initialValues, createHandler);

    return(
        <>
        <h2>Create movie</h2>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" name="title" value={values.title} onChange={changeHandler} placeholder="Iron man" />
                <Form.Label>Movie poster:</Form.Label>
                <Form.Control type="file" name="imgURL" value={values.imgURL} onChange={changeHandler} />
                <Form.Label>Year:</Form.Label>
                <Form.Control type="number" name="year" value={values.year} onChange={changeHandler} placeholder="2008" />
                <Form.Label>Genre:</Form.Label>
                <Form.Control type="text" name="genre" value={values.genre} onChange={changeHandler} placeholder="Action, ..." />
                <Form.Label>Summary:</Form.Label>
                <Form.Control as="textarea" name="summary" value={values.summary} onChange={changeHandler}  rows={3} placeholder="After being held captive..." />
                <Form.Label>Rating out of 10:</Form.Label>
                <Form.Control type="number" name="rate" value={values.rate} onChange={changeHandler} placeholder="7.9" />
                <Form.Label>Directed by:</Form.Label>
                <Form.Control type="text" name="director" value={values.director} onChange={changeHandler} placeholder="Jon Favreau, ..." />
                <Form.Label>Writing by:</Form.Label>
                <Form.Control type="text" name="Writers" value={values.Writers} onChange={changeHandler} placeholder="Mark Fergus, ..." />
                <Form.Label>Main cast:</Form.Label>
                <Form.Control type="text" name="main_cast" value={values.main_cast} onChange={changeHandler} placeholder="Robert Downey Jr., ..." />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </>
    )
}