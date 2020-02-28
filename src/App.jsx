import React from 'react';
import './App.css';
import paper from "../src/images/paper.png";
import rock from "../src/images/rock.png";
import scissors from "../src/images/scissors.png";

function App() {
  return (
    <div className="App">
      <div id="scoreboard">
        <h3 id="players-score">Player wins:</h3>
        <h3 id="computers-score">Computer wins:</h3>
      </div>
      <div>
        <h1 id="title">Rock Paper Scissors</h1>
        <p id="rules">Paper beats Rock</p>
      </div>
      <div>
        <img id="player" src={rock}></img>
        <img id="computer" src={rock}></img>
      </div>
      <div>
        <button id="rock">rock</button>
        <button id="paper">paper</button>
        <button id="scissors">scissors</button>
      </div>
      <button id="game-button">Let's Go!</button>
    </div>
    
  );
}

export default App;
