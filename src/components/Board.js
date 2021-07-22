import React, {Component} from 'react';
import Square from './Square';
import '../App.css'

class Board extends Component {
    render() {
        const {board, hover} = this.props
        return (
            <div className='board'>
                {board.map(
                    function squareIterator(square, i) {
                        return <Square hover={hover} board={board} />
                    })
                }
            </div>
        )
    }
}

export default Board;