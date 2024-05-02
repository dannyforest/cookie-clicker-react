import React, { useState, useEffect } from 'react';
import styled from "styled-components";

interface CookieClickerProps {
    fireworkFrequency?: number; // Prop to determine when to show fireworks
}

const CookieClicker: React.FC<CookieClickerProps> = ({ fireworkFrequency = 20 }) => {
    const [count, setCount] = useState<number>(() => {
        const storedCount = localStorage.getItem('cookieCount');
        return storedCount ? parseInt(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('cookieCount', count.toString());
    }, [count]);

    const [clickCount, setClickCount] = useState<number>(0);

    const [cookieSize, setCookieSize] = useState<"small" | "large">("small");

    const handleClick = () => {
        // Incrémenter le compteur de clics
        setClickCount(clickCount + 1);

        // Vérifier si le nombre de clics est un multiple de 5
        if ((clickCount + 1) % 5 === 0) {
            // Effet supplémentaire 1 : Afficher une alerte
            alert("I am so delicious, please eat me fast!");
        }

        // Définir la fonction setBgColor pour changer la couleur de fond
        const setBgColor = (color: string) => {
            document.body.style.backgroundColor = color;
        };

        // Vérifier si le nombre de clics est un multiple de 3
        if ((clickCount + 1) % 3 === 0) {
            // Effet supplémentaire 2 : Changer la couleur de fond du composant en rouge
            setBgColor("#FF0000");
        } else if ((clickCount + 1) % 5 === 0) {
            // Effet supplémentaire 2 : Changer la couleur de fond du composant en bleu
            setBgColor("#0000FF");
        } else if ((clickCount + 1) % 8 === 0) {
            // Effet supplémentaire 2 : Changer la couleur de fond du composant en vert
            setBgColor("#00FF00");
        }

        // Incrémenter le compteur de cookies
        setCount(count + 1);

        // Gérer le changement de taille du cookie
        if ((clickCount + 1) % 5 === 0) {
            // Double la taille du cookie
            setCookieSize("large");
        } else if ((clickCount + 1) % 8 === 0) {
            // Réinitialise la taille du cookie à la taille initiale
            setCookieSize("small");
        }
    };

    const handleReset = () => {
        setCount(0);
        localStorage.setItem('cookieCount', '0');
    };

    return (
        <div>
            <Cookie size={cookieSize} onClick={handleClick} />
            <p>Cookie Clicks: {count}</p>
            {count % fireworkFrequency === 0 && count !== 0 && <p>🎆 Fireworks! 🎆</p>}
            <button onClick={handleReset}>Reset Score</button>
        </div>
    );
};

interface CookieProps {
    onClick: () => void;
    size: "small" | "large";
}

const Cookie: React.FC<CookieProps> = ({ onClick, size }) => (
    <StyledCookieImage
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"
        alt="Click me cookie"
        onClick={onClick}
        size={size}
    />
);

const StyledCookieImage = styled.img<{ size: "small" | "large" }>`
    width: ${props => props.size === "small" ? "200px" : "800px"};
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1); // Slightly enlarges the image on hover
    }
`;

export default CookieClicker;
