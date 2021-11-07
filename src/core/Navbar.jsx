import React, { Fragment, useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";
import { FcSettings } from "react-icons/fc";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
          <div className="right">
            <span className="theme-btn" onClick={onClick}>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={70}
              />
            </span>
            <button className="settings" onClick={onOpenModal}>
              <FcSettings />
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal-wrapper">
          <div className="layout">
            <label for="layout-dropdown">Choose a layout: </label>
            <select
              name="layout-dropdown"
              className="layout-dropdown"
              placeholder="Select Layout"
            >
              <option value="budget">Budget App</option>
              <option value="todo">Todo App</option>
              <option value="fitness">Fitness Tracker App</option>
            </select>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
