import React, { Component } from 'react';
import './App.css';
import PlayersChoice from './PlayersChoice';



const items = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    player: items[0],
    computer: items[0]
  };
  selectItem = item => {
    this.setState({
      player: item
    });
  };
  render() {
    const { player, computer } = this.state;
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
        <PlayersChoice item={player} />
        <PlayersChoice item={computer} />
      </div>
      <div>
      <button
            id="rock" className="weaponBtn"
            onClick={() => this.selectItem("rock")}
          >
            rock
          </button>
          <button
            id="paper" className="weaponBtn"
            onClick={() => this.selectItem("paper")}
          >
            paper
          </button>
          <button
            id="scissors" className="weaponBtn"
            onClick={() => this.selectItem("scissors")}
          >
            scissor
          </button>
      </div>
      <button id="game-button">Let's Go!</button>
    </div>
    
  );
  }
}

export default App;
