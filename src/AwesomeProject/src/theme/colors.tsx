import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  statusBarBg: '#FFFFFF',
  appBg: '#F4F4F4',
  appBarBg: '#DEDEDE',
  normalText: '#4E4E4E',
  searchBarBg: '#F0F0F0',
  inputTextPlaceHolderOnCard: '#C1C1C1',
  inputTextPlaceHolder: '#B4B4B4',

  hrColor: '#DEDEDE',

  green: '#7AC692',

  homeNavItemIconColor: '#4D4E4E',

  noteBg: '#FFFFFF',
  cardBg: '#EAEAEA',
  smallCardBg: '#FFFFFF',

  processIconColor: '#00FF00',
  iconColor: '#000000',
  iconBg: '#F4FAF5',

  onCard: '#FFFFFF',
};

type themeColors = typeof lightColors;

const darkColors: themeColors = {
  ...DarkTheme.colors,

  statusBarBg: '#000000',
  appBg: '#444444',
  appBarBg: '#333333',
  normalText: '#dddddd',
  searchBarBg: '#555555',
  inputTextPlaceHolder: '#999999',
  inputTextPlaceHolderOnCard: '#999999',

  hrColor: '#333333',

  green: '#7AC692',

  homeNavItemIconColor: '#FFFFFF',

  noteBg: '#000000',
  cardBg: '#2F2F2F',
  smallCardBg: '#000000',

  processIconColor: '#00FF00',
  iconColor: '#FFFFFF',
  iconBg: '#333333',

  onCard: '#000000',
};

export {darkColors, lightColors};
