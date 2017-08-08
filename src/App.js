import React, { Component } from 'react';
import Model from './Model';
import Button from './components/Button';
import MultiButton from './components/MultiButton';

import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: true,
      buttons: Model.buttons,
      beans: null,
      beanPlants: null,
      bps: 0,
    };
  }


  componentDidMount() {
    if(this.state.debug) {
      this.setStateForDebug();
    }

    window.setInterval(() => {
      this.update();
    }, Model.gameSettings.interval);
  }

  update() {
    this.setState(prevState => ({
      beans: prevState.beans + this.state.bps / 10,
      bps: this.calculateBps()
    }));
  }

  setStateForDebug() {
    this.setState({
      beans: 9999,
      bps: 9999,
      beanPlants: 9999,
      beanExtract: 9999,
      // redPotion: 9999,
      // greenPotion: 9999,
      // bluePotion: 9999,
      // blackPotion: 9999,
    });
  }

  calculateBps() {
    let bps = 0;

    bps += this.state.beanPlants;
    return bps;
  }

  incrementResource(amount, resource) {

    console.log('amount: ', amount);
    console.log('resource: ', resource);
    this.setState(prevState => ({
      [resource]: prevState[resource] ? prevState[resource] + amount : amount
    }));
  }

  decrementResource(amount, resource) {
    console.log('amount: ', amount);
    console.log('resource: ', resource);
    this.setState(prevState => ({
      [resource]: prevState[resource] ? prevState[resource] - amount : amount
    }));
  }

  // handleMultiButtonClick(value, resource) {
  //   this.setState((prevState) => ({
  //     [value+'Potion']: prevState[value+'Potion'] ? prevState[value+'Potion'] + 1 : 1,
  //   }));
  // }


  canAffordItem(cost) {
    // console.log('checking if you can afford...', cost);
    let canAfford = false;

    if(cost.constructor === Array) {
      let truthCounter = 0;
      for(let c in cost) {
        if(this.state[cost[c].resource] >= cost[c].amount) {
          truthCounter++;
        }
      }
      if(truthCounter === cost.length) {
        canAfford = true;
      }
    } else {
      if(this.state[cost.resource] >= cost.amount) {
        canAfford = true;
      }
    }


    // switch(typeof cost) {
    //   case 'object':
        
    //     break;
    //   case 'array':
        
    //     break;
    //   default:
    //     break;
    // }

    return canAfford;
  }


  render() {
    return (
      <div className="app">
        <div className="stats">
          { Object.keys(this.state).map(resource => {
            if(resource === 'buttons') return;
            if(resource === 'debug') return;
            if(this.state[resource] === null) return;
            return <span className={ resource.toLowerCase() } key={resource}>{ resource }: { this.state[resource].toFixed(2) }</span>
          })}
        </div>
        <div className="buttons">
          { this.state.buttons.map((button, i) => {
             // if(button.cost != null) console.log(this.canAffordItem(button.cost)); 
            if(button.cost === null || this.canAffordItem(button.cost)) {
              if(button.options) {
                return <MultiButton
                  text={button.text}
                  description={button.description}
                  onclick={ (options) => {
                    for(let func in options) {
                      this[options[func].function](...options[func].variables);
                    }
                  }}
                  key={i}
                  className={button.class}
                  options={button.options}
                  cost={button.cost}
                />
              } else {
                return <Button
                  text={button.text}
                  description={button.description}
                  onclick={ () => {
                    for(let func in button.onClick) {
                      this[button.onClick[func].function](...button.onClick[func].variables);
                    }
                  }}
                  key={i}
                  className={button.class}
                  cost={button.cost}
                />
              }
            }
          }) }
        </div>
      </div>
    );
  }
}

export default App;
