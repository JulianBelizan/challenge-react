import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { getMovieImg } from '../utils/getMovieImg';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then(data => {
        setIsLoading(false);
        setMovie(data);
    })
}, [movieId]);

if (isLoading) {
    return <Loading />
}

if (!movie) {
    return null;
};


    const imageUrl = getMovieImg(movie.poster_path, 500);
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
            <p><strong>Status:</strong> {movie.status}</p>
            <p><strong>Release:</strong> {movie.release_date}</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            
        </div>
    </div>
}