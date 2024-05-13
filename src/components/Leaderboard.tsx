import {useEffect, useState} from "react";
import {Amplify} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import config from '../amplifyconfiguration.json';
import {UserScore} from "../models";
import styled from "styled-components";

Amplify.configure(config);

const leaderboardContainer = {
        width: "35%",
        margin: "0 auto",
        border: "1px solid black",
        marginTop: "20px",
        backgroundColor: "lightblue"
    }
;

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
        <div style={leaderboardContainer}>
            <h1>Leaderboard</h1>
            <ul>
                {userScores.sort((a,b) => {
                    return b.score - a.score;
                }).map((userScore) => (
                    <li key={userScore.id}>{userScore.name} - {userScore.score}</li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard;

