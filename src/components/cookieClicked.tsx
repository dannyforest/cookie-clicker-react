import React from 'react';

interface ClickedCookiesDisplayProps {
    cookies: string[];
}

const ClickedCookiesDisplay: React.FC<ClickedCookiesDisplayProps> = ({cookies}) => {
    if (cookies.length === 0) return null; // Don't render anything if no cookies have been clicked 5 times.

    return (
        <div>
            <h2>Clicked Cookies:</h2>

                <tbody>
                {cookies.map(cookie => (
                    <img src={cookie} alt={'a very delicious looking cookie! Yummy yummy!'}
                         style={{ width: '200px'}}/>
                ))}
                </tbody>

        </div>
    );
}

export default ClickedCookiesDisplay;
