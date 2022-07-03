import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Filter.module.css";

export function Filter() {
    const colors = {
        orange: '#FFBA5A',
        grey: '#a9a9a9'
    }
    const stars = Array(5).fill(0);
    const [currentValue, setCurrenValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrenValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

return (
    <div className={styles.container}>
        <h2>Filter by Rating</h2>
        <div className={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaStar 
                    key={index}
                    size={24}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey} 
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    />
                )
            })}
        </div>
    </div>
)
}

