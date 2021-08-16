import './App.css';
import React, {Component} from 'react';
import PlacementBoard from './components/PlacementBoard'
import Controller from './factories/controller'

const Player = require('./factories/player');


class App extends Component {
  constructor() {
    super()

    this.Controller = Controller()
    this.placementOnHover = this.Controller.placementOnHover.bind(this);
    this.placementHover = this.placementHover.bind(this);
    this.swapPlacementAxis = this.swapPlacementAxis.bind(this);

    this.state = {
      players: {
        player: Player(false),
        comp: Player(true)
      },
      phase: 'placement',
      placementPhase: {
        ship: this.Controller.nextShip(),
        axis: 'x',
        colorSquareInfo: {}
      },
      turn: 'player',
      winner: null,
    }
  }

  placementHover(id) {
    const ship = this.state.placementPhase.ship;
    const colorInfo = this.placementOnHover(id, ship);

    let placementPhase = {...this.state.placementPhase}
    placementPhase.colorSquareInfo = colorInfo;

    this.setState({placementPhase})
  }

  shipPlacement(id) {
    
  }

  swapPlacementAxis() {
    let axis = (this.state.placementPhase.axis === 'x') ? 'y' : 'x';
    let placementPhase = {...this.state.placementPhase}
    
    // Set axis to dummy state and remove any colored squares that may be in the old axis;
    placementPhase.axis = axis;
    placementPhase.colorSquareInfo = {}
    
    this.setState({placementPhase});
  }

  render() {
    const ownBoard = this.state.players.player.getOwnBoard();
    const colorInfo = this.state.placementPhase.colorSquareInfo;
  
    if (this.state.phase === 'placement') {
      return(
        <PlacementBoard board={ownBoard} onClick={this.placementHover} swapAxis={this.swapPlacementAxis} colorInfo={colorInfo} onHover={this.placementHover} />
      )
    }
  }
}

export default App;
