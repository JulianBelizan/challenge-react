import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import styles from "./Loading.module.css";

export function Loading() {
    return (
        <div className={styles.loading}>
            <ImSpinner2 className={styles.spinning} size={60}/>
        </div>
    )
}