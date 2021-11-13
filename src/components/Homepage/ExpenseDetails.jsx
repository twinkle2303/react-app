import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

const ExpenseDetails = () => {
  let { expenses, todos, groceries } = useContext(GlobalContext);
  let history = useHistory();

  const handleClick = () => {
    history.push("/addexpense");
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { themetype, layouttype } = useContext(GlobalContext);
  let totalAmt;
  totalAmt = expenses.reduce((acc, item) => (acc += Number(item.amount)), 0);
  let totalAmt2;
  totalAmt2 = groceries.reduce(
    (acc, item) => (acc += Number(item.amount * item.qty)),
    0
  );
  let heading;
  if (layouttype === "Budget App") {
    heading = "Add Expense";
  } else if (layouttype === "Todo-List App") {
    heading = "Add Todo";
  } else if (layouttype === "Grocery-List App") {
    heading = "Add Item";
  } else {
    heading = "Add Expense";
  }
  return (
    <Fragment>
      <div
        className={`expensedetails ${
          darkMode ? "header-dark" : "header-light"
        }`}
      >
        <div className="container expense-content">
          {layouttype === "Budget App" ? (
            <h1>
              Viewing {expenses.length}{" "}
              {expenses.length === 1 ? "expense" : "expenses"} totalling ₹
              {totalAmt}
            </h1>
          ) : layouttype === "Todo-List App" ? (
            <h1>
              Viewing {todos.length} {todos.length === 1 ? "todo" : "todos"} to
              be completed
            </h1>
          ) : layouttype === "Grocery-List App" ? (
            <h1>
              Viewing {groceries.length}{" "}
              {groceries.length === 1 ? "item" : "items"} totalling ₹{totalAmt2}
            </h1>
          ) : (
            <h1>
              Viewing {expenses.length}{" "}
              {expenses.length === 1 ? "expense" : "expenses"} totalling ₹
              {totalAmt}
            </h1>
          )}
          <button
            className={`add-expense-btn ${
              darkMode
                ? "btn-dark"
                : !darkMode && themetype === "blue"
                ? "btn-light-blue"
                : !darkMode && themetype === "green"
                ? "btn-light-green"
                : !darkMode && themetype === "instagram"
                ? "btn-light-ig"
                : "btn-light-blue"
            }`}
            onClick={handleClick}
          >
            {heading}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
