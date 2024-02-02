import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div>
      <div>
        <h1 className=" p-6 -mb-4 text-2xl text-white font-bold py-4">{title}</h1>
      </div>
      <div className=" overflow-x-auto  p-6">
        <div className=" w-[3200px] ">
          <div className="flex space-x-3">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
