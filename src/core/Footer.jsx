import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "react-responsive-modal/styles.css";
import { GlobalContext } from "../context/ExpenseContext";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { themetype } = useContext(GlobalContext);
  return (
    <Fragment>
      <div
        className={`footer ${
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
        <h3>Developed by Suryasnata Saha</h3>
      </div>
    </Fragment>
  );
};

export default Footer;
