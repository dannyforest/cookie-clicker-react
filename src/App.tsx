import React, {useEffect, useState} from 'react';
import './App.css';
import { Cookie } from "./components/Cookie";
import styled from 'styled-components';
import axios from "axios"


function App() {
    const [cookies, setCookies] = useState([]);
    useEffect(() => {
        axios.get('https://xp2ik4iljqv2z4u6wxdzn3jgjy0tlbnhs.lambda-url.us-east-1.on.aws/').then(res => {
            setCookies(res.data);
        });
    }, []);
    return (
        <div className="App">
            <CookiesContainer>
                {cookies.map(cookie => (
                    <Cookie key={cookie} defaultImage={cookie + '.webp'} />
                ))}
            </CookiesContainer>
        </div>
    );
}

export default App;

const CookiesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: lightblue;
`;
