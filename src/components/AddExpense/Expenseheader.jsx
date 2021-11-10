import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Expenseheader = ({ formheader }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div
        className={`form-heading ${darkMode ? "header-dark" : "header-light"}`}
      >
        <div className="container">
          <h1>{formheader}</h1>
        </div>
      </div>
    </div>
  );
};

export default Expenseheader;
