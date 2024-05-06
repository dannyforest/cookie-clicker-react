import React, { useState, useEffect, MouseEventHandler } from 'react';

export const Cookie = () => {
    // Initialize the counter from localStorage if available, otherwise start at 0
    const [counter, setCounter] = useState(parseInt(localStorage.getItem('cookieCounter')??'0'));

    // Function to handle the click event that increments the counter
    const handleClick = () => {
        setCounter(counter+1);
    }
    const handleRightClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.preventDefault()
        setCounter(counter-1);
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
            <img src='cookie.webp' alt='a very delicious looking cookie! Yummy yummy!'
                onClick={handleClick} // Add the onClick handler to the image
                onContextMenu={(event) => { handleRightClick(event) }}
                style={
                    {
                        width: 400 + counter * 3,
                        height: 400 + counter * 3,
                    }
                }
            />
            <h1>Cookie clicks: {counter}</h1>
            <button onClick={handleReset}>Reset Counter</button>
        </>
    )
}
