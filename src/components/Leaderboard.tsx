import {useEffect, useState} from "react";
import {Amplify} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import config from '../amplifyconfiguration.json';
import {UserScore} from "../models";

Amplify.configure(config);

const Leaderboard = () => {
    const [userScores, setUserScores] = useState<UserScore[]>([]);
    useEffect(() => {
        const loadLeaderboards = async () => {
            console.log('test');
            try {
                const userScores = await DataStore.query(UserScore);
                console.log(userScores);
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
            <ul>
                {userScores.map((userScore) => (
                    <li key={userScore.id}>{userScore.name} - {userScore.score}</li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard;