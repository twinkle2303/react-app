import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

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

      <div>
        <strong className="amount">₹{item.amount}</strong>
        <span className="edit">
          <FaRegEdit />
        </span>
        <span className="delete">
          <FaTrashAlt />
        </span>
      </div>
    </li>
  );
};

export default ExpenseListItem;
