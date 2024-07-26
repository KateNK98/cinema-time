import{Routes, Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';
import Movies from './components/movies/Movies.jsx';
import Series from './components/series/Series.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import CreateMoviesSeries from './components/createMoviesSeries/CreateMoviesSeries.jsx';


function App() {

  return (
    <>
    <header>
    <Header />
    </header>
    
    <Container className='container-fluid'>
            <main id="main-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create-movies-or-series' element={<CreateMoviesSeries />} />
              </Routes>
            </main>
    </Container>
    </>
  )
}

export default App
