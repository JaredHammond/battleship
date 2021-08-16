import React, {Component} from 'react';
import '../App.css'

/*
* Object that displays an individual square on the gameboard.
* The functions for onHover and onClick are determined by app.js passing
* down through the react component tree.
*/
class Square extends Component {
    constructor(props) {
        super(props)

        this.hasShip = this.props.square.shipInfo.hasShip;
        this.shipObj = this.props.square.shipInfo.shipObj;
        this.isHit = this.props.square.isHit;
    }

    classNameBuilder() {
        let className = 'square'

        if (this.hasShip && !this.isHit) {
            className += ' ' + 'blue';
        }

        if (this.props.color != null) {
            className += ' ' + this.props.color
        }

        if (this.hasShip && this.isHit) {
            className = 'square red'
        }
        return className
    }

    render() {
        const {id} = this.props
        return(
            <div className={this.classNameBuilder()} onClick={() => this.props.onClick(id)} onMouseEnter={() => this.props.onHover(id)} />
        )
    }
}

export default Square;