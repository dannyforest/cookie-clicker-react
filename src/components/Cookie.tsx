import React, {useState, useEffect} from 'react';
import {DataStore} from "@aws-amplify/datastore";
import {UserScore} from "../models";
import styled from "styled-components";
import {getCurrentUser} from "aws-amplify/auth";

interface Props {
    image: string;
    username: string;
}

export const Cookie = ({image, username}: Props) => {
    let isUserValid;

    const [counter, setCounter] = useState(0);

    const [cookieImgWidth, setCookieImgWidth] = useState(500);

    const [img, setImg] = useState(image);

    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
            loadAndSetCookieScore(userId).then();
        })
    }, []);

    useEffect(() => {
        addOrUpdateUserScore();
    }, [counter]);

    const getUserScores = async (userId: string): Promise<UserScore[]> => {
        return await DataStore.query(UserScore,
            (c) => c.and(c =>
                [c.userId.eq(userId), c.image.eq(image)]));
    }

    const getLastUserScore = async (userId: string): Promise<UserScore | null> => {
        const userScores = await getUserScores(userId);
        return userScores.length > 0 ? userScores[userScores.length - 1] : null;
    }

    const loadAndSetCookieScore = async (userId: string) => {
        const original = await getLastUserScore(userId);
        if (original) {
            setCounter(original.score);
        }
    }

    // Function to handle the click event that increments the counter
    const handleClick = () => {
        isUserValid = validateUser();
        if (isUserValid == true) {
            setCounter(prevCounter => prevCounter + 1);

            if (cookieImgWidth > 50) {
                setCookieImgWidth(cookieImgWidth - 10)
            }
        } else {
            alert(`You must enter a username to gain the privilege to click on a cookie!`)
        }
    }

    const handleReset = () => {
        // setImg('oreo-cookie.webp');
        setCounter(0);
    }

    const addOrUpdateUserScore = async () => {
        // Add or update the user score in the database
        if (!userId) {
            return
        }
        const original = await getUserScores(userId);

        if (original.length > 0) {
            if (original[0].score < counter) {
                const updatedUserScore = await DataStore.save(
                    UserScore.copyOf(original[0], updated => {
                        updated.score = counter
                    })
                );

                console.log(updatedUserScore);
            }
        } else {
            await DataStore.save(new UserScore({name: username, userId: userId, image: image, score: counter}));
        }
    }

    const validateUser = (): boolean => {
        return username != '';
    }

    return (
        <CookieContainer className={'cookie-container'}>
            <h1>{image}</h1>
            {/*<img src={img} alt={'a very delicious looking cookie! Yummy yummy!'}*/}
            <CookieImgDiv>
                <CookieImage src={image} alt={'a very delicious looking cookie! Yummy yummy!'}
                             onClick={handleClick} // Add the onClick handler to the image
                             width={`${cookieImgWidth}px`}
                />
            </CookieImgDiv>
            <h1>Cookie clicks: {counter}</h1>
            <button onClick={handleReset}>Reset Counter</button>
        </CookieContainer>
    )
}

const CookieImgDiv = styled.div`
    height: 500px; // La hauteur de départ de l'image choisie
    width: 500px; // La largeur de départ de l'image choisie
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    background: conic-gradient(from 0deg, #B999C8, #699aad, #C899C1);
    border-radius: 10px;
`;

const CookieImage = styled.img`
    border-radius: 10px;
`;

const CookieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
