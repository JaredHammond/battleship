import React, {Component} from 'react';
import Square from './Square';
import '../App.css'

class Board extends Component {
    render() {
        const {board, hover, click} = this.props
        return (
            <div className='board'>
                {board.map(
                    function squareIterator(square, i) {
                        return <Square key={i} id={i} hover={hover} square={square} click={click} />
                    })
                }
            </div>
        )
    }
}

export default Board;