import styles from "./MoviesGrid.module.css";
import movies from "./movies.json";
import { MovieCard } from "./MoviesCard";
import React from 'react';

export function MoviesGrid() {
    return (
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </ul>
    );
}