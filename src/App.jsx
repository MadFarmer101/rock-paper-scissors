import React, { Component } from 'react';
import './App.css';
import PlayersChoice from './PlayersChoice';
import ComputersChoice from './ComputersChoice';




const items = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    player: items[0],
    computer: items[0],
    message: ""
  };

  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * items.length)],
    })
  }

  selectItem = item => {
    this.setState({
      player: item
    });
  };

  playingGame = () => {
    const { player, computer } = this.state
    
    if ( player === computer ) {
      return "It's a Tie!"
    } else if (
      ( player === "rock" && computer === "scissors") ||
      ( player === "paper" && computer === "rock") ||
      ( player === "scissors" && computer === "paper")
    ) {
      return "Nice! You Win!"
    } else {
      return "Computer Wins!"
    }
  }

  render() {
    const { player, computer } = this.state;
  return (
    <div className="App">
      <div id="scoreboard">
        <h3>Player</h3>
        <h3>Computer</h3>
      </div>
      <div id="score">
        <h3 id="players-score">0</h3>
        <h3 id="computers-score">0</h3>
      </div>
      <div>
        <h1 id="title">Rock Paper Scissors</h1>
        <p id="rules">Paper beats Rock</p>
      </div>
      <div id="battle">
        <PlayersChoice item={player} />
        <ComputersChoice item={computer} />
      </div>
      <div>
        <button
            id="rock"
            onClick={() => { this.selectItem("rock"); this.startGame()}}
            
          >
            rock
          </button>
          <button
            id="paper"
            onClick={() => { this.selectItem("paper"); this.startGame()}}
            
          >
            paper
          </button>
          <button
            id="scissors"
            onClick={() => { this.selectItem("scissors"); this.startGame()}}
          
          >
            scissors
          </button>
      </div>
   
     </div>
    
  );
  }
}

export default App;
