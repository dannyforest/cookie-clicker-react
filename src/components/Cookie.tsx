import React, { useState, useEffect } from 'react';
import {DataStore} from "@aws-amplify/datastore";
import {UserScore} from "../models";

interface Props {
    image: string;
    username: string;
}

export const Cookie = ({image, username}: Props) => {
    const localStorageKey = `cookieCounter${image}`;

    // Initialize the counter from localStorage if available, otherwise start at 0
    const [counter, setCounter] = useState(() => {
        const savedCounter = localStorage.getItem(localStorageKey);
        return savedCounter !== null ? parseInt(savedCounter, 10) : 0;
    });

    const [img, setImg] = useState(image);

    // Function to handle the click event that increments the counter
    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    const addOrUpdateUserScore = async () => {
        const userScores = await DataStore.query(UserScore, (c) => c.name.eq(username));
        const original = userScores[0];

        if (userScores.length > 0 && original.score > counter) {
            await DataStore.save(
                UserScore.copyOf(original, updated => {
                    updated.score = counter
                })
            );
        } else {
            await DataStore.save(new UserScore({name: username, score: counter}));
        }
    }

    // Function to reset the counter
    const handleReset = () => {
        // setImg('oreo-cookie.webp');
        setCounter(0);
    }

    // Use useEffect to store the counter in localStorage when it changes
    useEffect(() => {
        localStorage.setItem(localStorageKey, String(counter));

        if (counter > 0)
            addOrUpdateUserScore().then(r => {});
    }, [counter]);

    return (
        <div className={'cookie-container'}>
            <h1>{image}</h1>
            {/*<img src={img} alt={'a very delicious looking cookie! Yummy yummy!'}*/}
            <img src={image} alt={'a very delicious looking cookie! Yummy yummy!'}
                 onClick={handleClick} // Add the onClick handler to the image
            />
            <h1>Cookie clicks: {counter}</h1> {/* Display the current counter */}
            <button onClick={handleReset}>Reset Counter</button>
        </div>
    )
}
