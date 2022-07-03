import styles from "./MovieCard.module.css";
import React from 'react';
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}) {

    function setVoteClass(vote) {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    }

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
                <div className= {styles.movieInfo}>
                    <h3>{movie.title}</h3>
                    <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                </div>
            </div>
        </Link>
        </li>
        );
}