import React, { Fragment, useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FcSettings } from "react-icons/fc";
import "react-responsive-modal/styles.css";
import { GlobalContext } from "../context/ExpenseContext";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { themetype } = useContext(GlobalContext);
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const handleSettings = () => {
    history.push("/settings");
  };
  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  return (
    <Fragment>
      <div
        className={`navbar ${
          darkMode
            ? "nav-dark"
            : !darkMode && themetype === "blue"
            ? "nav-light-blue"
            : !darkMode && themetype === "green"
            ? "nav-light-green"
            : !darkMode && themetype === "instagram"
            ? "nav-light-ig"
            : "nav-light-blue"
        }`}
      >
        <div className="navbar-wrapper">
          <h1 onClick={handleClick}>Budget App</h1>
          <div className="right">
            <span className="theme-btn" onClick={onClick}>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={70}
              />
            </span>
            <button className="settings" onClick={handleSettings}>
              <FcSettings />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
