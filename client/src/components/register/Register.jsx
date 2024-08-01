import Form from 'react-bootstrap/Form';
import { useRegister } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useFormMovies } from '../../hooks/useFormMovies';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const initialValues = {email: '', password: '', confirmPassword: ''};

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values.confirmPassword) {
            return setError('Password missmatch!');
        }

        try {
            await register(values.email, values.password)
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useFormMovies(initialValues, registerHandler);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={values.email} onChange={changeHandler} placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control autoComplete="off" type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" />
        <Form.Control autoComplete="off" type="password" name="confirmPassword" value={values.confirmPassword} onChange={changeHandler} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>

    {error && (
        // <p>
        //     <span>{error}</span>
        // </p>

        <Alert variant="danger">
            <p>
                <span>{error}</span>
            </p>
        </Alert>
        
    )}
        
    </Form>
  );
}
