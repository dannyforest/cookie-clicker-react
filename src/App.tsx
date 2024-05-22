import React, { useEffect, useState } from "react";
import "./App.css";
import { Cookie } from "./components/Cookie";
import styled from "styled-components";
import Leaderboard from "./components/Leaderboard";

import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { UserScore } from "./models";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(config);

const cookies = ["cookie", "oreo-cookie", "chocolate-cookie"];

function App() {
	const [username, setUsername] = useState(() => {
		const savedUsername = localStorage.getItem("username");
		return savedUsername !== null ? savedUsername : "";
	});

	const handleUsernameChange = (event: any) => {
		setUsername(event.target.value);
	};

	return (
		<div className="App">
			<Authenticator>
				{/*<div style={styles.cookiesContainer}>*/}
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
				<CookiesContainer2>
					{cookies.map((cookie) => (
						<Cookie key={cookie} image={cookie + ".webp"} username={username} />
					))}
				</CookiesContainer2>
				<Leaderboard />
			</Authenticator>
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
