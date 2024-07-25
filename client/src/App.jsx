import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.jsx';
import VideoHome from './components/homeVideo/VideoHome.jsx';
import HomeMovie from './components/homeMovie/HomeMovie.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSeries from './components/homeSeries/HomeSeries.jsx';
import LatestMoviesSeries from './components/latestMoviesSeries/LaestMoviesSeries.jsx';

function App() {

  return (
    <>
    <Header />

    <Container className='container-fluid'>
            <VideoHome />
            <HomeMovie />
            <HomeSeries />
            <LatestMoviesSeries />
    </Container>
    </>
  )
}

export default App
