import React, { useState, useEffect } from 'react';

export const Cookie = () => {
    // Initialize the counter from localStorage if available, otherwise start at 0
    const [counter, setCounter] = useState(() => {
        const savedCounter = localStorage.getItem('cookieCounter');
        return savedCounter !== null ? parseInt(savedCounter, 10) : 0;
    });

    // Function to handle the click event that increments the counter
    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    // Function to reset the counter
    const handleReset = () => {
        setCounter(0);
    }

    // Use useEffect to store the counter in localStorage when it changes
    useEffect(() => {
        localStorage.setItem('cookieCounter', String(counter));
    }, [counter]);

    return (
        <>
            <img src={'cookie.webp'} alt={'a very delicious looking cookie! Yummy yummy!'}
                 onClick={handleClick} // Add the onClick handler to the image
            />
            <h1>Cookie clicks: {counter}</h1> // Display the current counter
            <button onClick={handleReset}>Reset Counter</button>
        </>
    )
}
