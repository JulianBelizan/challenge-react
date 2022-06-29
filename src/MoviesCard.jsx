import styles from "./MovieCard.module.css";
import React from 'react';

export function MovieCard({movie}) {
    console.log(styles)
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
        <img 
        width={230}
        height={345}
        src={imageUrl} 
        alt={movie.title} 
        className={styles.movieImage}/>
        <div>{movie.title}</div>
        </li>
        );
}