import React, { Component } from "react";
import "./App.css";
import PlayersChoice from "./PlayersChoice";
import ComputersChoice from "./ComputersChoice";
import dirt from "../src/images/dirt.png";
import decoration from "../src/images/decoration.png";
import heart from "../src/images/heart.png";

const items = ["rock", "paper", "scissors"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: items[0],
      computer: items[0],
      message: "",
      isGameActive: false,
      isStartButtonActive: true,
    };
  }

  handleShow = () => {
    this.setState({
      isGameActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isStartButtonActive: false,
    });
  };

  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * items.length)],
    });
    this.setState({
      message: this.playingGame(),
    });
  };

  selectItem = (item) => {
    this.setState({
      player: item,
      message: "",
    });
  };

  playingGame = () => {
    const { player, computer } = this.state;

    if (player === computer) {
      return "It's a Tie!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "Nice! You Win!";
    } else {
      return "Computer Wins!";
    }
  };

  render() {
    const { player, computer, message } = this.state;
    return (
      <div className="App">
        <div>
          <h1 id="title">Rock Paper Scissors</h1>
          <p className="rules" id="rules1">
            Paper covers Rock!
          </p>
          <img id="dirt" src={dirt} alt="" />
          <p className="rules" id="rules2">
            Rock smashes Scissors!
          </p>
          <img id="decoration" src={decoration} alt="" />
          <img id="heart" src={heart} alt="" />
          <p className="rules" id="rules3">
            Scissors cuts Paper!
          </p>
          {this.state.isStartButtonActive ? (
            <button
              id="start"
              onClick={() => {
                this.handleShow();
                this.handleHide();
              }}
            >
              Let's Go!
            </button>
          ) : null}
        </div>
        {this.state.isGameActive ? (
          <div id="battle">
            <PlayersChoice item={player} />
            <ComputersChoice item={computer} />
          </div>
        ) : null}
        <div className="message"> {message ? this.playingGame() : null}</div>
        {this.state.isGameActive ? (
          <div>
            <button
              className="items"
              id="rock"
              onClick={() => {
                this.selectItem("rock");
                this.startGame();
              }}
            >
              rock
            </button>
            <button
              className="items"
              id="paper"
              onClick={() => {
                this.selectItem("paper");
                this.startGame();
              }}
            >
              paper
            </button>
            <button
              className="items"
              id="scissors"
              onClick={() => {
                this.selectItem("scissors");
                this.startGame();
              }}
            >
              scissors
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
