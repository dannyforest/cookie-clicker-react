import {useEffect, useState} from "react";
import {UserScore} from "../models";

import {Amplify} from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import config from '../amplifyconfiguration.json';

Amplify.configure(config);


const Leaderboards = () => {
    const [
        userScores,
        setUserScores
    ] = useState<UserScore[]>([]);

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
        <>
            <h1>Leaderboards</h1>
            <ul>
                {userScores
                    .sort((a: UserScore, b: UserScore) =>
                        b.score - a.score
                    ).map(userScore => (
                        <li key={userScore.id}>{userScore.name} - {userScore.score}</li>
                    ))}
            </ul>
        </>
    )
}

export default Leaderboards;