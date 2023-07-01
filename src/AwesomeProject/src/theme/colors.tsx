import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  appBg: '#F4F4F4',
  appBarBg: '#DEDEDE',
  normalText: '#4E4E4E',
  searchBarBg: '#F0F0F0',
  inputTextPlaceHolder: '#C1C1C1',

  green: '#7AC692',

  homeNavItemIconColor: '#4D4E4E',

  noteBg: '#FFFFFF',
  cardBg: '#EAEAEA',
  smallCardBg: '#FFFFFF',

  processIconColor: '#00FF00',
  iconColor: '#000000',
  iconBg: '#F4FAF5',
};

type themeColors = typeof lightColors;

const darkColors: themeColors = {
  ...DarkTheme.colors,

  appBg: '#222222',
  appBarBg: '#000000',
  normalText: '#dddddd',
  searchBarBg: '#555555',
  inputTextPlaceHolder: '#999999',

  green: '#7AC692',

  homeNavItemIconColor: '#FFFFFF',

  noteBg: '#000000',
  cardBg: '#2F2F2F',
  smallCardBg: '#000000',

  processIconColor: '#00FF00',
  iconColor: '#FFFFFF',
  iconBg: '#333333',
};

export {darkColors, lightColors};
