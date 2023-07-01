import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  appBg: '#DEDEDE',
  appBarBg: '#F4F4F4',
  normalText: '#4E4E4E',
  searchBarBg: '#F0F0F0',
  inputTextPlaceHolder: '#C1C1C1',

  noteBg: '#FFFFFF',
  cardBg: '#EAEAEA',
  smallCardBg: '#FFFFFF',

  iconColor: '#00FF00',
  themeIconColor: '#000000',
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

  noteBg: '#000000',
  cardBg: '#2F2F2F',
  smallCardBg: '#000000',

  iconColor: '#00FF00',
  themeIconColor: '#FFFFFF',
  iconBg: '#333333',
};

export {darkColors, lightColors};
