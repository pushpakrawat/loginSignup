// App.js
import React from "react";
import ThemeSwitch from "./assets/Theme/ThemeSwitch";
import { PaperProvider } from "react-native-paper";
import ColorBoxes from "./assets/theme-files/test";
import Theme from "./assets/Theme/Theme"; // Import the Theme component

export default function App() {
  const paperTheme = Theme(); // Ensure to declare paperTheme with 'const'
  console.log("paperTheme in app.js: ", paperTheme);
  return (
    paperTheme && (
      <PaperProvider theme={paperTheme}>
        <ThemeSwitch />
        <ColorBoxes />
      </PaperProvider>
    )
  );
}
