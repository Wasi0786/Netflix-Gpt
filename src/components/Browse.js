// import usePoppulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/UseTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies copy";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";


const Browse = () => {

  useNowPlayingMovies()
  usePopulerMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondryContainer/>
    </div>
  );
};

export default Browse;
