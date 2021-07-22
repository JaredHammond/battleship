import React, {Component} from 'react';
import '../App.css'


class Square extends Component {
    constructor(props) {
        super(props)

        this.hasShip = this.props.square.shipInfo.hasShip;
        this.shipObj = this.props.square.shipInfo.shipObj;
        this.isHit = this.props.square.isHit;
    }

    classBuilder(boardMode) {
        let classList = 'square'
        if (this.isHit === true && this.shipObj) {
            classList.push(' always-red')
            return classList
        }
    }

    render() {
        return(
            <div className='square' />
        )
    }
}

export default Square;