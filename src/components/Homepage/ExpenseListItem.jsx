import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useHistory } from "react-router-dom";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseListItem = ({ idx, item }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { removeExpense } = useContext(GlobalContext);
  let history = useHistory();
  let calcdate = item.date.split("-");
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleRemove = (id) => {
    removeExpense(id);
  };
  return (
    <li
      className={`expense-item ${darkMode ? "item-dark" : "item-light"}`}
      key={idx}
    >
      <span>
        <h5>{item.description}</h5>
        <h6>
          {month[Number(calcdate[1]) - 1]} {Number(calcdate[2])}, {calcdate[0]}
        </h6>
      </span>

      <div>
        <strong className="amount">₹{item.amount}</strong>
        <span className="edit" onClick={() => handleEdit(item.id)}>
          <FaRegEdit />
        </span>
        <span className="delete" onClick={() => handleRemove(item.id)}>
          <FaTrashAlt />
        </span>
      </div>
    </li>
  );
};

export default ExpenseListItem;
