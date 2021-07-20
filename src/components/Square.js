import React, {Component} from 'react';
import '../App.css'

class Square extends Component {
    constructor(props) {
        super(props)
        this.something = 'bob'
    }

    render() {
        return(
            <div className='square' />
        )
    }
}

export default Square;