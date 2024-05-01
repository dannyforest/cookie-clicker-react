import React, { useState } from 'react';

export const Cookie = () => {
    // Initialize the state to store the counter
    const [counter, setCounter] = useState(0);

    // Function to handle the click event
    const handleClick = () => {
        setCounter(counter + 1); // Increment the counter
    }

    return (
        <>
            <img src={'cookie.webp'} alt={'a very delicious looking cookie! Yummy yummy!'}
                 onClick={handleClick} // Add the onClick handler
            />
            <h2>Cookie clicks: {counter}</h2>
        </>
    )
}
