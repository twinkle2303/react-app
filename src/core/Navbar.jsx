import React, { Fragment, useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  return (
    <Fragment>
      <div className={`navbar ${darkMode ? "nav-dark" : "nav-light"}`}>
        <div className="navbar-wrapper">
          <h1>Budget App</h1>
          <span className="theme-btn" onClick={onClick}>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={70}
            />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
