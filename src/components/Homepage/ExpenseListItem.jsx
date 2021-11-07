import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ExpenseListItem = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <li className={`expense-item ${darkMode ? "item-dark" : "item-light"}`}>
      <span>
        <h5>Iphone 13 pro max</h5>
        <h6>November 12th 2021</h6>
      </span>

      <strong>$2000.00</strong>
    </li>
  );
};

export default ExpenseListItem;
