import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  appBg: '#ffffff',
  appBarBg: '#cccccc',
  normalText: '#000000'
};

type themeColors = typeof lightColors;

const darkColors: themeColors = {
  ...DarkTheme.colors,

  appBg: '#000000',
  appBarBg: '#333',
  normalText: '#ffffff'
};

export { darkColors, lightColors };
