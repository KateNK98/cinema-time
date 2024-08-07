import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFormMovies } from "../../hooks/useFormMovies";
import { useGetOneMovies } from "../../hooks/useMovies";
import moviesAPI from "../../api/moviesAPI";

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import '../../main.css'


const initialValues = ({
    title: '',
    year: '',
    genre: '',
    rate: 0,
    summary: '',
    imgURL: '',
    director: '',
    writers: '',
    main_cast: '',
})

export default function EditMovies() {
    const navigate = useNavigate();
    const {movieId} = useParams();
    const [movie] = useGetOneMovies(movieId);
    const initialFormValues = useMemo(() => Object.assign({}, initialValues, movie), [movie])
   
    const {
        changeHandler,
        submitHandler,
        values,
    } = useFormMovies(initialFormValues, async (values) => {
        const isConfirmed = confirm(`Are you sure you want to update "${movie.title}" movie?`);

        if (isConfirmed) {
        await moviesAPI.update(movieId, values);
        
        navigate(`/movies/${movieId}/details`);
        }
    });

    return(
        <>
        <h2>Edit movie</h2>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title:</Form.Label>
                <Form.Control className='formControl' type="text" name="title" value={values.title} onChange={changeHandler} placeholder="Iron man" />
                <Form.Label>Movie poster:</Form.Label>
                <Form.Control className='formControl' type="text" name="imgURL" value={values.imgURL} onChange={changeHandler} placeholder="https://site.com/image.png" />
                <Form.Label>Year:</Form.Label>
                <Form.Control className='formControl' type="number" name="year" value={values.year} onChange={changeHandler} placeholder="2008" />
                <Form.Label>Genre:</Form.Label>
                <Form.Control className='formControl' type="text" name="genre" value={values.genre} onChange={changeHandler} placeholder="Action, ..." />
                <Form.Label>Summary:</Form.Label>
                <Form.Control className='formControl' as="textarea" name="summary" value={values.summary} onChange={changeHandler}  rows={3} placeholder="After being held captive..." />
                <Form.Label>Rating out of 10:</Form.Label>
                <Form.Control className='formControl' type="number" name="rate" value={values.rate} onChange={changeHandler} placeholder="7" />
                <Form.Label>Directed by:</Form.Label>
                <Form.Control className='formControl' type="text" name="director" value={values.director} onChange={changeHandler} placeholder="Jon Favreau, ..." />
                <Form.Label>Writing by:</Form.Label>
                <Form.Control className='formControl' type="text" name="writers" value={values.writers} onChange={changeHandler} placeholder="Mark Fergus, ..." />
                <Form.Label>Main cast:</Form.Label>
                <Form.Control className='formControl' type="text" name="main_cast" value={values.main_cast} onChange={changeHandler} placeholder="Robert Downey Jr., ..." />
            </Form.Group>
            <Button variant="primary" type="submit">Edit movie</Button>
        </Form>

        </>
    )
}