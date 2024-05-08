import React from 'react';
import './App.css';
import {Cookie} from "./components/Cookie";
import styled from 'styled-components';

const cookies = [
    "cookie", "oreo-cookie", "chocolate-cookie"
]

function App() {
  return (
    <div className="App">
        {/*<div style={styles.cookiesContainer}>*/}
        <CookiesContainer>
            {
                cookies.map(cookie => (
                    <Cookie image={cookie + '.webp'} />
                ))
            }
        </CookiesContainer>
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
