import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button" onClick={ this.props.onclick }>
        <div className="button__header">
            <span className="button__text">{ this.props.text }</span>
            { this.props.cost &&
                <span className="button__cost">Cost: { this.props.cost.amount + ' ' + this.props.cost.resource } </span>
            }
        </div>
        <div className="button__description">{ this.props.description }</div>
      </div>
    );
  }
}

export default Button;
