import { light, dark } from "./themeColors";
import  ThemeMode  from "./ThemeMode"; // Import the ThemeMode component
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const Theme = () => {
  // Get the value of themeMode from the ThemeMode component
  const themeMode = ThemeMode();

  // Determine the theme based on the fetched themeMode
  const theme = themeMode === "light" ? light : dark;

  const paperTheme =
  themeMode === 'dark'
    ? { ...MD3DarkTheme, colors: theme }
    : { ...MD3LightTheme, colors: theme };

  console.log("Theme mode:", themeMode);
  console.log("Theme:", theme);

  return paperTheme;
};

export default Theme;
