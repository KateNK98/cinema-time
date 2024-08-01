import{Routes, Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';
import MoviesList from './components/movies-list/MoviesList.jsx';
import Series from './components/series/Series.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import CreateMovies from './components/create-movies/CreateMovies.jsx';
import MovieDetails from './components/movies-list/movies-list-item/movies-details/MovieDetails.jsx';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext.js';
import CreateSeries from './components/create-series/CreateSeries.jsx';


function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.set('accesToken', state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <header>
      <Header />
      </header>
      
      <Container className='container-fluid'>
              <main id="main-content">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/movies' element={<MoviesList />} />
                  <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                  <Route path='/series' element={<Series />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/movies/create' element={<CreateMovies />} />
                  <Route path='/series/create' element={<CreateSeries />} />
                </Routes>
              </main>
      </Container>
    </AuthContext.Provider>
  )
}

export default App
