import React, { useState, useEffect } from 'react';

interface Props {
    defaultImage: string;
    containerClassName?: string;
}

export const Cookie: React.FC<Props> = ({ defaultImage, containerClassName }: Props) => {
    const localStorageKey: string = `cookieCounter_${defaultImage}`;
    const [counter, setCounter] = useState<number>(() => {
        const savedCounter = localStorage.getItem(localStorageKey);
        return savedCounter !== null ? parseInt(savedCounter, 10) : 0;
    });
    const [currentImage, setCurrentImage] = useState<string>(defaultImage);
    const [showMilestone, setShowMilestone] = useState<boolean>(false);

    const handleClick = () => {
        setCounter(prevCounter => {
            const newCounter = prevCounter + 1;
            if (newCounter === 30) {
                setShowMilestone(true);
            }
            return newCounter;
        });
    };

    const handleReset = () => {
        const resetConfirmed = window.confirm('Are you sure you want to reset the counter?');
        if (resetConfirmed) {
            setCounter(0);
        }
    };

    const handleChangeImage = () => {
        const newImage = prompt('Enter the URL of the new cookie image:');
        if (newImage) {
            setCurrentImage(newImage);
            localStorage.setItem(localStorageKey, String(newImage));
        }
    };

    useEffect(() => {
        localStorage.setItem(localStorageKey, String(counter));
    }, [counter]);

    return (
        <div className={`cookie-container ${containerClassName}`}>
            <h1>{currentImage}</h1>
            <img
                src={currentImage}
                alt={'a very delicious looking cookie! Yummy yummy!'}
                onClick={handleClick}
            />
            <h1>Cookie clicks: {counter}</h1>
            <button onClick={handleReset}>Reset Counter</button>
            <button onClick={handleChangeImage}>Change Image</button>
            {showMilestone && <p>You've reached 30 clicks! Great job!</p>}
        </div>
    );
};
