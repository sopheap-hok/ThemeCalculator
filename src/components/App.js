import React, { Component } from 'react';
import Canvas from './Canvas'
import {ThemeProvider} from '../context/ThemeContext';
import {CalculatorProvider} from '../context/CalculatorContext';

class App extends Component {
  render() {
    return (
        <ThemeProvider>
          <CalculatorProvider>
            <Canvas />
          </CalculatorProvider>
        </ThemeProvider>
    );
  }
}

export default App;
