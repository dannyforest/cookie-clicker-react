import React, { useState, useEffect } from 'react';
import styled from "styled-components";

interface CookieClickerProps {
    fireworkFrequency?: number; // Prop to determine when to show fireworks
}

const CookieClicker: React.FC<CookieClickerProps> = ({ fireworkFrequency = 20  }) => {
    const [count, setCount] = useState<number>(() => {
        const storedCount = localStorage.getItem('cookieCount');
        return storedCount ? parseInt(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('cookieCount', count.toString());
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleReset = () => {
        setCount(0);
        localStorage.setItem('cookieCount', '0');
    };

    return (
        <div>
            <Cookie onClick={handleClick}/>
            <p>Cookie Clicks: {count}</p>
            {count % fireworkFrequency === 0 && count !== 0 && <p>🎆 Fireworks! 🎆</p>}
            <button onClick={handleReset}>Reset Score</button>
        </div>
    );
};

interface CookieProps {
    onClick: () => void;
}

const Cookie: React.FC<CookieProps> = ({ onClick }) => (
    <StyledCookieImage
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"
        alt="Click me cookie"
        onClick={onClick}
    />
);

const StyledCookieImage = styled.img`
    width: 200px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1); // Slightly enlarges the image on hover
    }
`;

export default CookieClicker;
