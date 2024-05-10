import React, {useEffect, useState} from 'react';
import './App.css';
import {Cookie} from "./components/Cookie";
import styled from 'styled-components';
import Leaderboard from "./components/Leaderboard";

import {Amplify} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import config from './amplifyconfiguration.json';
import {UserScore} from "./models";

Amplify.configure(config);


const cookies = [
    "cookie", "oreo-cookie", "chocolate-cookie"
]

function App() {
    const [userScores, setUserScores] = useState<UserScore[]>([]);
    useEffect(() => {
        console.log('test')
        DataStore.query(UserScore).then(userScores => {
            console.log('here')
            console.log(userScores);
        })
    }, []);

    return (
        <div className="App">
            {/*<div style={styles.cookiesContainer}>*/}
            <CookiesContainer2>
                {
                    cookies.map(cookie => (
                        <Cookie key={cookie} image={cookie + '.webp'}/>
                    ))
                }
            </CookiesContainer2>
            <Leaderboard/>
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
