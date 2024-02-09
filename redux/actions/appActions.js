export const toggleTheme = (themeMode) => {
  return {
    type: "TOGGLE_THEME",
    payload: themeMode,
  };
};

export const toggleThemeColors = (themeColors) => {
  console.log("Payload received to action for themeColors: ", themeColors);
  return {
    type: "TOGGLE_THEME_COLORS",
    payload: themeColors,
  };
};
