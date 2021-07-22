import React, {Component} from 'react';
import '../App.css'
import classNames from 'classnames';


class Square extends Component {
    constructor(props) {
        super(props)
        this.something = 'bob'
    }

    render() {
        return(
            <div className={classNames({
                square: true,
                shipHover: this.props.shipHover,
                attackHover: true //this.props.attackHover
            })} />
        )
    }
}

export default Square;