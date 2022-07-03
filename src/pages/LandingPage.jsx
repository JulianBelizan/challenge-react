import React from 'react';
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";
import { Filter } from '../components/Filter';

export function LandingPage() {
    const query = useQuery ();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 150);

    return (
        <div>
        <Search />
        <Filter />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
    );
}