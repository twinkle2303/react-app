import React, { createContext, useReducer } from "react";
import { themeReducer } from "./ThemeReducer";

export const ThemeContext = createContext();

const initialState = {
  darkMode: false,
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
