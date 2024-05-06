import React, { useEffect } from 'react';
import './App.css';
import {Cookie} from "./components/Cookie";
import axios from "axios";
function App() {
  useEffect(() => {
    axios.get("https://6zlk74lrhsnaskh5ufoyjj7vly0nkhip.lambda-url.us-east-1.on.aws/").then((res) => {
      alert(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Cookie />
    </div>
  );
}

export default App;
