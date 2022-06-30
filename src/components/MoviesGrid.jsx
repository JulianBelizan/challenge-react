import styles from "./MoviesGrid.module.css";
import { MovieCard } from "./MoviesCard";
import React, { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import { Loading } from "./Loading";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

    return (
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </ul>
    );
}