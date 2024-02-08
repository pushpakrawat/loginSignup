import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { dark, light } from './themeColors';

export default function ThemeMode() {
  const colorScheme =  scheme;
  const theme = colorScheme === "light" ? light : dark;

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme }
      : { ...MD3LightTheme, colors: theme };

  return paperTheme;
}
