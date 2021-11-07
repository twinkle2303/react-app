import React, { Fragment, useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";
import { FcSettings } from "react-icons/fc";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
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
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Fragment>
      <div className={`navbar ${darkMode ? "nav-dark" : "nav-light"}`}>
        <div className="navbar-wrapper">
          <h1>Budget App</h1>
          <div className="right">
            <span className="theme-btn" onClick={onClick}>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={70}
              />
            </span>
            <h1 className="settings" onClick={onOpenModal}>
              <FcSettings />
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
