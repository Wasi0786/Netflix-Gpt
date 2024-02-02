import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="  bg-black ">
        <div className="relative pl-12 -mt-72 z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Populer"} movies={movies?.populerMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
