import React, { Component } from 'react';
import Util from '../Util';

class Stat extends Component {
    render() {
        const classes = this.props.resource.toLowerCase();
        let amount = 0;
        const userLang = navigator.language || navigator.userLanguage;
        if(this.props.resource != 'BPS') {
            amount = Number(this.props.amount.toFixed());
        } else {
            amount = Number(this.props.amount.toFixed(2));
        }

        return(
            <span className={ 'stat ' + classes } key={this.props.resource}>
                <span className="stat__name">
                    { Util.getResourceName(this.props.resource) }
                </span>
                <span className="stat__amount">{ amount.toLocaleString(userLang) }</span>
            </span>
        )
    }
}

export default Stat;