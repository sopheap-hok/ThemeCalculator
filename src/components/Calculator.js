import React from 'react';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';
import SimpleBottomNavigation from './SimpleBottomNavigation'
import {ThemeConsumer} from '../context/ThemeContext'

export default class Calculator extends React.Component {

    render() {
      const buttonLabels = ['1','2','3','/','4','5','6','*','7','8','9','-','0','.','=','+'];
      return (
        <ThemeConsumer>
        {({ themeColorPalette }) => (
          <div className="calculator">
            <div style={{backgroundColor: themeColorPalette[0]}} className="grid-container">
                <div className="buttonContainer item1"><CalcDisplay /></div>
                {buttonLabels.map(label => (
                  <div className="buttonContainer"><CalcButton>{label}</CalcButton></div>
                ))}
                <div className="buttonContainer nav"><SimpleBottomNavigation /></div> 
            </div>
          </div>
        )}
        </ThemeConsumer>        
      );
    }
}