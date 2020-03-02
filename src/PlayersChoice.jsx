import React from "react";
import scissors from "../src/images/scissors.png";
import paper from "../src/images/paper.png";
import rock from "../src/images/rock.png";


const PlayersChoice = ({ item }) => (
    <div className="player">
      <img
        className="player-image"
        src={
          item === "rock" ? rock : item === "paper" ? paper : scissors
        }
        alt="Rock Paper Scissors"
      />
    </div>
);

export default PlayersChoice;

