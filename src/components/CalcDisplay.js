import { Input } from '@material-ui/core';
import React from 'react';
import { CalculatorConsumer } from '../context/CalculatorContext';


class CalcDisplay extends React.Component{

  render() {

    return (
      <CalculatorConsumer>
        {({ display, changeDisplay }) => {
          return (
            <Input
              value={display}
              disableUnderline={true}
              className={"input"}
              onChange={(event, value) => { 
                changeDisplay(event.target.value);
              }}
            />
          )
        }}
      </CalculatorConsumer>
    )
  }
}

export default CalcDisplay;
