import React, { Component } from 'react';

import Cost from './Cost';

class MultiButton extends Component {
  render() {
    return (
      <div className="button multi-button">
        <div className="button__header">
            <span className="button__text">{ this.props.text }</span>
            { this.props.cost &&
                <Cost cost={this.props.cost}></Cost>
            }
        </div>
        <div className="button__description">{ this.props.description }</div>
        <div className="multi-button__options">
            { this.props.options.map(option => {
                    return(
                        <span 
                            className={"multi-button__option " + option.classes }
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
