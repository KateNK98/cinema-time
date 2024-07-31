import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormMovies } from '../../hooks/useFormMovies';
import { useLogin } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();
  const {values, changeHandler, submitHandler} = useFormMovies(
    {email: '', password: ''}, 
    async ({email, password}) => {
      try {
        await login(email, password)
        navigate('/');
      } catch (err) {
        console.log(err.message);
      }
      
    }
  );

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={values.email} onChange={changeHandler} placeholder="Enter email" />
        <Form.Label>Password</Form.Label>
        <Form.Control autoComplete="off" type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  );
}
