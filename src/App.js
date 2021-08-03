import './App.css';
import React, {Component} from 'react';
import PlacementBoard from './components/PlacementBoard'
import Controller from './factories/controller'

const Player = require('./factories/player');


class App extends Component {
  constructor() {
    super()
    this.state = {
      players: {
        player: Player(false),
        comp: Player(true)
      },
      phase: 'placement',
      turn: 'player',
      winner: null,
      axis: 'x'
    }
  }

  handleSquareHoverPlacement(squareId) {

  }


  render() {
    ownBoard = this.state.players.player.getOwnBoard();
  
    if (this.state.phase === 'placement') {
      return(
        <PlacementBoard board={ownBoard} onClick={} onHover={} />
      )
    }
  }
}

export default App;
