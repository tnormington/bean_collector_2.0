import React, { Component } from 'react';

class Cost extends Component {
    render() {
        let cost;

        if(this.props.cost.constructor === Array) {
            cost = this.props.cost.map( cost => {
                return <span className="cost" key={cost.resource}>{cost.amount} {cost.resource}</span>;
            });
        } else {
            cost = <span className="cost">{this.props.cost.amount} {this.props.cost.resource}</span>;
        }
        // switch(typeof this.props.cost) {
        //     case 'object':
        //         cost = <span className="cost">{this.props.cost.amount} {this.props.cost.resource}</span>;
        //         break;
        //     case 'array':
        //     window.console.log('hello?');
        //         cost = this.props.cost.map( cost => {
        //                 return <span className="cost">{cost.amount} {cost.resource}</span>
        //             }).join();
        //         break;
        // }

        return(
            <div className="costs">
                {cost}
            </div>
        )
    }
}

export default Cost;