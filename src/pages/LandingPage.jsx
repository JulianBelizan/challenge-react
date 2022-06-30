import { MoviesGrid } from "../components/MoviesGrid";
import React from 'react';
import { Search } from "../components/Search";

export function LandingPage() {
    return <div>
        <Search />
        <MoviesGrid />
    </div>;
}