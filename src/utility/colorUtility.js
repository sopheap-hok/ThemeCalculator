export const findGoodContrastColor = (stableColor, changeableColor) => {
      let buttonLightTextColor = changeableColor;
      let usebuttonLightTextColor = false;
      let buttonDarkTextColor = changeableColor;
      let useButtonDarkTextColor = false;
      let incrementer = 0;

      while( (!useButtonDarkTextColor && !usebuttonLightTextColor)) {
        console.log('incrementer', incrementer)
        buttonDarkTextColor = window.chroma(buttonDarkTextColor).darken(incrementer++);
        buttonLightTextColor = window.chroma(buttonLightTextColor).brighten(incrementer);

        useButtonDarkTextColor = window.chroma.contrast(stableColor, buttonDarkTextColor) > 4.5;
        usebuttonLightTextColor = window.chroma.contrast(stableColor, buttonLightTextColor) > 4.5;

        console.log('dark ratio', window.chroma.contrast(stableColor, buttonDarkTextColor))
        console.log('light ratio', window.chroma.contrast(stableColor, buttonLightTextColor))
      }
      return useButtonDarkTextColor ? buttonDarkTextColor : buttonLightTextColor;
}

export const colorToHex = (color) => {
  if (color.substr(0, 1) === '#') {
      return color;
  }
  var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
  
  var red = parseInt(digits[2], 10);
  var green = parseInt(digits[3], 10);
  var blue = parseInt(digits[4], 10);
  
  var rgb = blue | (green << 8) | (red << 16);
  return digits[1] + '#' + rgb.toString(16);
};

export const getCurrentImagePalette = (imageId) => {
  const colorthief = new window.ColorThief();
  const imageColorPalette = colorthief.getPalette(document.getElementById(imageId), 2);

  const imageColorPaletteHex = imageColorPalette.map(a => {
    return colorToHex(`rgb(${a[0]}, ${a[1]}, ${a[2]})`)
  })
  return imageColorPaletteHex;
}
