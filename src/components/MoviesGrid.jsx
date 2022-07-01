import styles from "./MoviesGrid.module.css";
import { MovieCard } from "./MoviesCard";
import React, { useEffect, useState } from 'react';
import { get } from "../utils/httpClient";
import { Loading } from "./Loading";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery ();
  const search = query.get("search");


  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
     ? "/search/movie?query=" + search  
     : "/discover/movie"; 
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Loading />;
  }

    return (
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </ul>
    );
}