import React, { Component } from 'react';
import Model from './Model';
import Util from './Util';
import Button from './components/Button';
import MultiButton from './components/MultiButton';
import Stat from './components/Stat';

import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: 3,
      buttons: Model.buttons,
      beans: 0,
      BPS: 0,
    };
  }


  componentDidMount() {
    console.log(Util);
    if(this.state.debug) {
      this.setStateForDebug(this.state.debug);
    }

    window.setInterval(() => {
      this.update();
    }, Model.gameSettings.interval);
  }

  // THIS HAPPENS EVERY 100ms
  update() {

    const state = {
      BPS: this.calculateBPS()
    };


    const beans = typeof this.state.beans == 'number' ? this.state.beans + this.state.BPS / 10 : this.state.beans;
    let beanSprouts = this.state.beanSprouts;

    if(beanSprouts != undefined) {
      if(this.state.beanStalks) {
        beanSprouts += this.state.beanStalks/200
      }
      state.beanSprouts = beanSprouts;
    }

    if(beans) 
      state.beans = beans;



    this.setState(state);
  }

  setStateForDebug(level) {
    let amount = 10;

    if(level === 2) {
      amount = 200;
    }

    if(level === 3) {
      amount = 9999;
    }

    this.setState({
      beans: amount,
      BPS: amount,
      beanSprouts: amount,
      beanExtract: amount,
      beanStalks: amount,
      redPotion: amount,
      greenPotion: amount,
      bluePotion: amount,
      blackPotion: amount,
    });
  }

  calculateBPS() {
    let bps = 0;
    if(typeof this.state.BPS != 'number') {
      return this.state.BPS;
    }
    if(this.state.beanSprouts) {
      bps += this.state.beanSprouts;
    }
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


  canAffordItem(cost) {
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
            return <Stat resource={resource} amount={this.state[resource]} key={resource}></Stat>
          })}
        </div>
        <div className="buttons">
          { this.state.buttons.map((button, i) => {
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
                  classes={button.class}
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
                  classes={button.class}
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
