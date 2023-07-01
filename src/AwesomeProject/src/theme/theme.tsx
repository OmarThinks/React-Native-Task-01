import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
  useTheme,
  configureFonts
} from 'react-native-paper';
import { darkColors, lightColors } from './colors';
import { customFonts } from './fonts';

const fonts = configureFonts({ config: customFonts });

export const lightTheme = {
  ...LightTheme,
  colors: {
    ...lightColors
  },
  fonts
};

type AppTheme = typeof lightTheme;

export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...darkColors
  },
  fonts
};

export type fontVariants = keyof typeof customFonts;

export const useAppTheme = () => useTheme<AppTheme>();
