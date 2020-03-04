import React, { Component } from 'react';
import './App.css';
import PlayersChoice from './PlayersChoice';
import ComputersChoice from './ComputersChoice';




const items = ["rock", "paper", "scissors"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: items[0],
      computer: items[0],
      message: "",
      isGameActive: false
    };
  }

  handleShow = () => {
    this.setState({
      isGameActive:true
    })
  }


  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * items.length)],
    })
    this.setState({
      message: this.playingGame()
    })
  }

  selectItem = item => {
    this.setState({
      player: item,
      message: ""
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
    const { player, computer, message } = this.state;
  return (
    <div className="App">
      <div>
        <h1 id="title">Rock Paper Scissors</h1>
        <p id="rules">Paper beats Rock</p>
        <button id="start" onClick={this.handleShow}>Let's Go!</button>
      </div>
      <div id="battle">
      {this.state.isGameActive ?
        <PlayersChoice item={player} />
        : null }
        {this.state.isGameActive ?
        <ComputersChoice item={computer} />
        : null }
      </div>
      <div className="message"> {message ? this.playingGame() : null}</div>
      <div>
        {this.state.isGameActive ?
        <button
            id="rock"
            onClick={() => { this.selectItem("rock"); this.startGame()}}
            
          >
            rock
          </button>
          : null }
          {this.state.isGameActive ?
          <button
            id="paper"
            onClick={() => { this.selectItem("paper"); this.startGame()}}
            
          >
            paper
          </button>
          : null }
          {this.state.isGameActive ?
          <button
            id="scissors"
            onClick={() => { this.selectItem("scissors"); this.startGame()}}
          
          >
            scissors
          </button>
          : null }
      </div>
    </div>
    
  );
  }
}

export default App;
