import React, { Component } from 'react';

class MultiButton extends Component {
  render() {
    return (
      <div className="button multi-button">
        <div className="button__header">
            <span className="button__text">{ this.props.text }</span>
            { this.props.cost &&
                <span className="button__cost">Cost: { this.props.cost.amount + ' ' + this.props.cost.resource } </span>
            }
        </div>
        <div className="button__description">{ this.props.description }</div>
        <div className="multi-button__options">
            { this.props.options.map(option => {
                    return(
                        <span 
                            className={"multi-button__option " + option.text.toLowerCase() }
                            key={option.text}
                            onClick={ () => {
                                this.props.onclick(option.onClick);
                            } }>
                            { option.text }
                            <small>{ option.description }</small>
                        </span>
                    );
                })
            }
        </div>
      </div>
    );
  }
}

export default MultiButton;
