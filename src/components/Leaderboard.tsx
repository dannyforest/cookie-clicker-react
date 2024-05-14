import React, {useEffect, useState} from "react";
import {Amplify} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import config from '../amplifyconfiguration.json';
import {UserScore} from "../models";
import styled from "styled-components";


Amplify.configure(config);



const Leaderboard = () => {
    const [userScores, setUserScores] = useState<UserScore[]>([]);
    useEffect(() => {
        const loadLeaderboards = async () => {
            try {
                const userScores = await DataStore.query(UserScore);
                setUserScores(userScores);
            } catch (error) {
                console.log('Error retrieving posts', error);
            }
        };

        loadLeaderboards();
    }, []);

    return (
        <LeaderboardContainer>
            <h1>Leaderboard</h1>
            <UlStyle>
                {userScores.sort((a,b) => {
                    return b.score - a.score;
                }).map((userScore) => (
                    <li key={userScore.id}>{userScore.name}: {userScore.score}</li>
                ))}
            </UlStyle>
        </LeaderboardContainer>
    )
}

export default Leaderboard;

const LeaderboardContainer = styled.div`
    width: 15%;
    margin: 0 auto;
    border: 1px solid black;
    margin-top: 20px;
    background-color: lightblue;
`;

const UlStyle = styled.ul`
    list-style-type: none;
    font-size: 25px;
`;