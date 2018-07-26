import React, { Component } from 'react';
import * as math from 'mathjs'

const CalculatorContext = React.createContext();

export class CalculatorProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '0',
    };
  }

  // handler to set new state
  changeDisplay = newDisplay => {
    this.setState({
      display: newDisplay,
    });
  };

  keyPressed = newKey => {
    let currentDisplay = this.state.display;
    if( currentDisplay === '0') {
      currentDisplay = '';
    }

    if(newKey === '=') {
      currentDisplay = math.eval(currentDisplay).toString();
    } else {
      currentDisplay = `${currentDisplay}${newKey}`;
    }

    this.setState({
      display: `${currentDisplay}`,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <CalculatorContext.Provider
        value={{
          changeDisplay: this.changeDisplay,  // handler to set new display
          keyPressed: this.keyPressed,        // handler to process new key
          display: this.state.display,        // display data

        }}
      >
        {children}
      </CalculatorContext.Provider>
    );
  }
}

export const CalculatorConsumer = CalculatorContext.Consumer;