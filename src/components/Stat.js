import React, { Component } from 'react';
import Util from '../Util';

class Stat extends Component {
    render() {
        const classes = this.props.resource.toLowerCase();

        return(
            <span className={ 'stat ' + classes } key={this.props.resource}>
                <span className="stat__name">
                    { Util.getResourceName(this.props.resource) }
                </span>
                <span className="stat__amount">{ this.props.amount.toFixed(2) }</span>
            </span>
        )
    }
}

export default Stat;