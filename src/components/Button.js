import React, { Component } from 'react';

import Cost from './Cost';

class Button extends Component {
  render() {
    return (
      <div className={'button ' + this.props.classes} onClick={ this.props.onclick }>
        <div className="button__header">
            <span className="button__text">{ this.props.text }</span>
            { this.props.cost &&
                <Cost cost={this.props.cost}></Cost>
            }
        </div>
        <div className="button__description">{ this.props.description }</div>
      </div>
    );
  }
}

export default Button;
