import React, {Component} from 'react';
import Square from './Square';
import '../App.css'

class Board extends Component {
    render() {
        const {board, onHover, onClick, colorInfo, swapAxis} = this.props
        return (
            <div className='board'>
                {board.map(
                    function squareIterator(square, i) {
                        const color = colorInfo[i] ? colorInfo[i] : null;

                        return <Square key={i} id={i} onHover={onHover} swapAxis={swapAxis} color={color} square={square} onClick={onClick} />
                    })
                }
            </div>
        )
    }
}

export default Board;