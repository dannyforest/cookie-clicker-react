import {useEffect, useState} from "react";
import {UserScore} from "../models";
import {DataStore} from "@aws-amplify/datastore";

const Leaderboard = () => {
    const [userScores, setUserScores] = useState<UserScore[]>([]);
    useEffect(() => {
        const loadLeaderboards = async () => {
            console.log('test');
            try {
                const userScores = await DataStore.query(UserScore);
                setUserScores(userScores);
                console.log(userScores);
            } catch (error) {
                console.log('Error retrieving posts', error);
            }
        };

        loadLeaderboards();
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
        </div>
    )
}

export default Leaderboard;