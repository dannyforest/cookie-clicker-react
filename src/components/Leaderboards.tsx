import {useEffect, useState} from "react";
import {UserScore} from "../models";

import Amplify from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';

// @ts-ignore
Amplify.configure('../amplificationconfiguration.json');


const Leaderboards = () => {
    const [leaderboards, setLeaderboards] = useState([]);

    useEffect(() => {
        const loadLeaderboards = async () => {
            try {
                const posts = await DataStore.query(UserScore);
                console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
            } catch (error) {
                console.log('Error retrieving posts', error);
            }
        };
    }, []);

    return (
        <>
            <h1>Leaderboards</h1>
        </>
    )
}

export default Leaderboards;