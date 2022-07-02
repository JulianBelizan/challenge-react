import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export function Search(){
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    const handleSubmit = (e) => {
     e.preventDefault();
  };
  
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                value={search}
                autoFocus
                onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search=" + value);
                }}
                placeholder='Search for a movie...'/>
                <button className={styles.searchButton} type="submit"><FaSearch size={20}/></button>
            </div>
        </form>
    )
}