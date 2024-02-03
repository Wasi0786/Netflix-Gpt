import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../utils/moviesSlice";


const usePopulerMovies = () => {
  const dispatch = useDispatch();

  const getPopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addPopulerMovies(json?.results));
  };

  useEffect(() => {
    getPopulerMovies();
    // eslint-disable-next-line 
  }, []);
};

export default usePopulerMovies