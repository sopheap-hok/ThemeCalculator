import React, { Component } from 'react';import Calculator from './Calculator'
import {ThemeConsumer} from '../context/ThemeContext'

import fallImage from '../../src/bg_fall.jpg'
import springImage from '../../src/bg_spring.jpg'
import winterImage from '../../src/bg_winter.jpg'
import summerImage from '../../src/bg_summer.png'

class Canvas extends Component {
    render() {
      return (
        <React.Fragment>

          <ThemeConsumer>
          {({ themeName }) => (
              <div className={`canvas ${themeName}`}>
                  <Calculator />
              </div>
          )}
          </ThemeConsumer>

          
          <img style={{display: 'none'}} id='fall' src={fallImage} alt=""/>
          <img style={{display: 'none'}} id='spring' src={springImage} alt=""/>
          <img style={{display: 'none'}} id='winter' src={winterImage} alt=""/>
          <img style={{display: 'none'}} id='summer' src={summerImage} alt=""/>
        </React.Fragment>
      );
    }
  }
  
  export default Canvas;