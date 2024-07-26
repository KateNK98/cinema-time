import HomeMovie from "./homeMovie/HomeMovie";
import HomeSeries from "./homeSeries/HomeSeries";
import VideoHome from "./homeVideo/VideoHome";
import LatestMoviesSeries from "./latestMoviesSeries/LaestMoviesSeries";

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