import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useHistory } from "react-router-dom";
import { FaRegEdit, FaTrashAlt, FaRegCheckCircle } from "react-icons/fa";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseListItem = ({ idx, item }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { removeExpense, removeTodo, removeItem, layouttype } =
    useContext(GlobalContext);
  let history = useHistory();
  let calcdate;
  if (item.date !== undefined) {
    calcdate = item.date.split("-");
  }
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
    if (layouttype === "Budget App") {
      removeExpense(id);
    } else if (layouttype === "Todo-List App") {
      removeTodo(id);
    } else if (layouttype === "Grocery-List App") {
      removeItem(id);
    } else {
      removeExpense(id);
    }
  };
  return (
    <li
      className={`expense-item ${darkMode ? "item-dark" : "item-light"}`}
      key={idx}
    >
      <span>
        <h5>{item.description}</h5>
        {layouttype !== "Grocery-List App" && item.date !== undefined ? (
          <h6>
            {month[Number(calcdate[1]) - 1]} {Number(calcdate[2])},{" "}
            {calcdate[0]}
          </h6>
        ) : (
          <h6>Qty:{item.qty}</h6>
        )}
      </span>

      <div>
        {layouttype !== "Todo-List App" ? (
          <strong className="amount">₹{parseInt(item.amount, 10)}</strong>
        ) : (
          <strong className="time">{item.time}</strong>
        )}
        <span className="edit" onClick={() => handleEdit(item.id)}>
          <FaRegEdit />
        </span>
        <span className="delete" onClick={() => handleRemove(item.id)}>
          {layouttype !== "Todo-List App" ? (
            <FaTrashAlt />
          ) : (
            <FaRegCheckCircle />
          )}
        </span>
      </div>
    </li>
  );
};

export default ExpenseListItem;
