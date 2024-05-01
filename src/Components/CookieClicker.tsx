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

    const [clickCount, setClickCount] = useState<number>(0);

    const handleClick = () => {
        // Incrémenter le compteur de clics
        setClickCount(clickCount + 1);

        // Vérifier si le nombre de clics est un multiple de 5
        if ((clickCount + 1) % 5 === 0) {
            // Afficher une alerte
            alert("You clicked the cookie 5 times!");
        }

        // Définir la fonction setBgColor pour changer la couleur de fond
        const setBgColor = (color: string) => {
            document.body.style.backgroundColor = color;
        };

        // Vérifier si le nombre de clics est un multiple de 3
        if ((clickCount + 1) % 3 === 0) {
            // Changer la couleur de fond en rouge
            setBgColor("#FF0000");
        } else if ((clickCount + 1) % 3 === 2) {
            // Changer la couleur de fond en bleu
            setBgColor("#0000FF");
        } else {
            // Changer la couleur de fond en vert
            setBgColor("#00FF00");
        }

        // Incrémenter le compteur de cookies
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
