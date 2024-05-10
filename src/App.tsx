import React, {HTMLInputTypeAttribute, useState} from 'react';
import './App.css';
import {Cookie} from "./components/Cookie";
import styled from 'styled-components';
import Leaderboards from "./components/Leaderboards";

const cookies = [
    "cookie", "oreo-cookie", "chocolate-cookie"
]

function App() {
    const [username, setUsername] = useState(() => {
        const savedUsername = localStorage.getItem('username');
        return savedUsername !== null ? savedUsername : '';
    });

    const handleUsernameChange = (event: any) => {
        const newUsername = event.target.value;
        setUsername(newUsername);
        localStorage.setItem('username', newUsername);
    };
    
  return (
      <div className="App">
          {/*<div style={styles.cookiesContainer}>*/}
          <label htmlFor="username">Enter your username:</label>
          <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
          />
          <CookiesContainer>
              {
                  cookies.map(cookie => (
                      <Cookie key={cookie} image={cookie + '.webp'} username={username}/>
                  ))
              }
          </CookiesContainer>
          <Leaderboards/>
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
