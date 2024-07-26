import VideoHome from './components/homeVideo/VideoHome.jsx';
import HomeMovie from './components/homeMovie/HomeMovie.jsx';
import HomeSeries from './components/homeSeries/HomeSeries.jsx';
import LatestMoviesSeries from './components/latestMoviesSeries/LaestMoviesSeries.jsx';

export default function Home() {
    return(
        <>
            <VideoHome />
            <HomeMovie />
            <HomeSeries />
            <LatestMoviesSeries />
        </>
    )
}