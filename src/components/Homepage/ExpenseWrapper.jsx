import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`ExpenseWrapper ${darkMode ? "wrap-dark" : "wrap-light"} `}>
      <div className="expense-wrapper-heading">
        <h3>Expense</h3>
        <h3>Amount</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
