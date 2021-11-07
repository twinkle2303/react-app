import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const ExpenseListItem = ({ idx, item }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <li
      className={`expense-item ${darkMode ? "item-dark" : "item-light"}`}
      key={idx}
    >
      <span>
        <h5>{item.description}</h5>
        <h6>{item.date}</h6>
      </span>

      <strong>₹{item.amount}</strong>
    </li>
  );
};

export default ExpenseListItem;
