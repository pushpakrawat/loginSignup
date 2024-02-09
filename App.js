// App.js
import React from "react";
import ThemeSwitch from "./assets/theme-files/themeSwitch";
import ColorBoxes from "./assets/theme-files/test";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeSwitch />
      <ColorBoxes />
    </Provider>
  );
}
