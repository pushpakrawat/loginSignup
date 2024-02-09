const initialState = {
    themeMode: "",
    themeColors: [],
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          themeMode: action.payload,
        };
      case 'TOGGLE_THEME_COLORS':
        console.log("Payload received to reducer for themeColors: ", action.payload);
        return {
          ...state,
          themeColors: action.payload,
        };
      default:
        return state;
    }
  };