import { Button } from '@material-ui/core';
import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';
import { findGoodContrastColor } from '../utility/colorUtility';
import { CalculatorConsumer } from '../context/CalculatorContext';
const CalcButton = (props) => (
  <ThemeConsumer>
    {({ themeColorPalette }) => {
      return (
        <CalculatorConsumer>
          {
            ({display, keyPressed}) =>{
              return (
                <Button
                  variant="raised"
                  color="primary"
                  onClick={() => {keyPressed(`${props.children}`)}}
                  style={{  backgroundColor: themeColorPalette[1], 
                          color: findGoodContrastColor(themeColorPalette[1], themeColorPalette[2])
                  }}
                >
                  {props.children}
                </Button>
              );
            }
          }
        </CalculatorConsumer>
      )
    }}
  </ThemeConsumer>
);

export default CalcButton;
