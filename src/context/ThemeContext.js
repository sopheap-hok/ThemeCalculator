import React, { Component } from 'react';
import { getCurrentImagePalette } from '../utility/colorUtility'

const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    const springColorsPalette = ['#482e41', "#e8afb4", "#91bfe6"]

    this.state = {
      themeName: 'spring',
      themeColorPalette: springColorsPalette,
    };
  }

  // handler to set new state
  changeTheme = newThemeIndex => {
    let newTheme = null;
    switch(newThemeIndex) {
      case 0:
        newTheme = 'spring';
          break;
      case 1:
        newTheme = 'summer';
          break;
      case 2:
        newTheme = 'fall';
          break;
      case 3:
        newTheme = 'winter';
          break;
      default:
        console.error('newThemeIndex is invalid.')
    }

    const imageColorPaletteHex = getCurrentImagePalette(newTheme)

    this.setState({
      themeName: newTheme,
      themeColorPalette: imageColorPaletteHex,
    });
  };

  

  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Provider
        value={{
          changeTheme: this.changeTheme,                    // handler to set new theme state
          themeName: this.state.themeName,                      // name of theme
          themeColorPalette: this.state.themeColorPalette,  // them colors
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;