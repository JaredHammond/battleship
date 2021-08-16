import React from 'react';
import Board from './Board'

class PlacementBoard extends React.Component {
    render() {
        const {onClick, onHover, board, colorInfo, swapAxis} = this.props
        return (
            <React.Fragment>
                <button onClick={swapAxis}>Swap Axis</button>
                <Board board={board} colorInfo={colorInfo} onClick={onClick} onHover={onHover} />
            </React.Fragment>
        )
    }
}

export default PlacementBoard;