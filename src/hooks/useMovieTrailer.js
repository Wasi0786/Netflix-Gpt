import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  // fetch trailer video && updating the store with traler video data

  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json?.results?.filter(
      (video) => video?.type === "Trailer "
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log("trailer......" + trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
    // eslint-disable-next-line 
  }, []);
};

export default useMovieTrailer;
