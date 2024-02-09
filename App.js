// App.js
import React from "react";
import Theme from "./assets/Theme/theme"
import ColorBoxes from "./assets/Theme/test";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Theme/>
      <ColorBoxes />
    </Provider>
  );
}
