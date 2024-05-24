import {useEffect, useState} from "react";
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
        <div>
            <h1>Leaderboard</h1>
            <LeaderboardList>
                {userScores.sort((a, b) => {
                    return b.score - a.score;
                }).map((userScore) => (
                    <li key={userScore.id}>{userScore.name} - {userScore.score}</li>
                ))}
            </LeaderboardList>
        </div>
    )
}

const LeaderboardList = styled.ul`
    list-style-type: none;
`;

export default Leaderboard;