import styles from "./MovieCard.module.css";
import React from 'react';
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}) {
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return (
   
        <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
             <div className={styles.containerCard}>
                <img 
                width={150}
                height={250}
                src={imageUrl} 
                alt={movie.title} 
                className={styles.movieImage}
            />
            <div>{movie.title} {movie.vote_average}</div>
            </div>
        </Link>
        </li>
        );
}