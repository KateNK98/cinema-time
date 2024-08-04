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
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import CreateSeries from './components/create-series/CreateSeries.jsx';
import Logout from './components/logout/Logout.jsx';
import EditMovies from './components/edit-movies/EditMovies.jsx';
import EditSeries from './components/edit-series/EditSeries.jsx';
import Athenticated from './components/common/route-guard/Authenticated.jsx';
import background_7 from "../public/images/background_7.png";

function App() {

  return (
    <AuthContextProvider>
      <header>
      <Header />
      </header>
      
      <Container fluid className='container-fluid' style={{ backgroundImage: `url(${background_7})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <main id="main-content" className='p-5'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/movies' element={<MoviesList />} />
                  <Route path='/movies/:movieId/details' element={<MovieDetails />} />
                  <Route path='/series' element={<Series />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  {/* <Route path='/movies/create' element={<Athenticated><CreateMovies /></Athenticated>} /> */}
                  <Route element={<Athenticated />}>
                    <Route path='/movies/create' element={<CreateMovies />} />
                    <Route path='/movies/:movieId/edit' element={<EditMovies />} />
                    <Route path='/series/create' element={<CreateSeries />} />
                    {/* <Route path='/series/edit' element={<EditSeries />} /> */}
                    <Route path='/logout' element={<Logout />} />
                  </Route>
                </Routes>
              </main>
      </Container>
    </AuthContextProvider>
  )
}

export default App
