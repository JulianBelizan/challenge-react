// eslint-disable-next-line
import { MoviesGrid } from "./components/MoviesGrid";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App(){
    return (
    <Router>
        <header>
            <Link to="/">
            <h1 className={styles.title}>Movies</h1>
            </Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId"><MovieDetails /></Route>
                <Route path="/"><LandingPage /></Route>
            </Switch>
        </main>
    </Router>
);
}

