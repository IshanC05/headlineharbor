import React, { Component } from 'react'
import hourglass from './hourglass.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className="my-3" src={hourglass} alt="hourglass" />
            </div>
        )
    }
}
