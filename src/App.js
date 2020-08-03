import React, { useState } from "react";
import "./App.css";
import Title from "./Title";
import FactText from "./FactText";

const baseUrl = "https://cat-fact.herokuapp.com";

function App() {
  const [fact, setFact] = useState("Click the button");

  const getRandomFact = () => {
    let url = baseUrl + "/facts/random";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFact(data.text);
      });
  };

  return (
    <div className="App">
      <Title title="Cat facts - React" />

      <button onClick={() => getRandomFact()}>get one</button>

      <FactText fact={fact} />
    </div>
  );
}

export default App;
