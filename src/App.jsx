import React from 'react';
import './App.css';

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
      <button id="game-button">Let's Go!</button>
    </div>
    
  );
}

export default App;
