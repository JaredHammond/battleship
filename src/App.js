import './App.css';
import React, {Component} from 'react';
import Board from './components/Board';
const Player = require('./factories/player');

class App extends Component {
  constructor() {
    super()
    this.player1 = Player(false);
    this.ownBoard = this.player1.getOwnBoard();
  }

  render() {
    return(
      <Board board={this.ownBoard} />
    )
  }
}

export default App;
