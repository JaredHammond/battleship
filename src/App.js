import './App.css';
import React, {Component} from 'react';
import Board from './components/Board';
import Controller from './factories/controller'

const Player = require('./factories/player');


class App extends Component {
  constructor() {
    super()
    this.player1 = Player(false);
    this.ownBoard = this.player1.getOwnBoard();
    this.state = {
      turn: 'player',
      pregame: true,
      winner: null,
      axis: 'x'
    }
  }


  render() {
  Controller.startGame();

    return(
      <Board board={this.ownBoard} hover={true} />
    )
  }
}

export default App;
