import React, {useEffect, useState} from 'react';
import './App.css';
import {Cookie} from "./components/Cookie";
import styled from 'styled-components';
import axios from "axios";

function App() {
    const [cookies, setCookies] = useState([]);

    useEffect(() => {
        axios.get('https://pzvljic7q7r5tqztihsdoy5lpq0hdodc.lambda-url.us-east-1.on.aws/')
            .then(res => {
                setCookies(res.data);
            });
    }, []);
    return (
        <div className="App">
            {/*<div style={styles.cookiesContainer}>*/}
            <CookiesContainer2>
                {
                    cookies.map(cookie => (
                        <Cookie image={cookie + '.webp'}/>
                    ))
                }
            </CookiesContainer2>
        </div>
    );
}

export default App;

const CookiesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CookiesContainer2 = styled(CookiesContainer)`
    background-color: lightblue;
`;

// const styles = {
//     cookiesContainer: {display: 'flex', flexDirection: 'row', justifyContent: 'center'}
// }
