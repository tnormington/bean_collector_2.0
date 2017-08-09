import React, { Component } from 'react';
import Util from '../Util';

class Cost extends Component {
    render() {
        // function getResourceName(resource) {
        //     if(resource === 'BPS') return resource;
        //     const result = resource.replace( /([A-Z])/g, " $1" );
        //     return result.charAt(0).toUpperCase() + result.slice(1);
        // }

        let cost;


        if(this.props.cost.constructor === Array) {
            cost = this.props.cost.map( cost => {
                return <span className="cost" key={cost.resource}>{cost.amount} {Util.getResourceName(cost.resource)}</span>;
            });
        } else {
            cost = <span className="cost">{this.props.cost.amount} {Util.getResourceName(this.props.cost.resource)}</span>;
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