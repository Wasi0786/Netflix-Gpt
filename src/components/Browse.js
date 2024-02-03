// import usePoppulerMovies from "../hooks/usePopulerMovies";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/UseTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies copy";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
