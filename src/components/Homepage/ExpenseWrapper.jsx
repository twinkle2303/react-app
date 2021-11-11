import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";
import ExpenseItemList from "./ExpenseItemList";

const ExpenseWrapper = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { expenses } = useContext(GlobalContext);
  return (
    <div
      className={`ExpenseWrapper ${darkMode ? "wrap-dark" : "wrap-light"}`}
      style={expenses.length < 3 ? { height: "50vh" } : { height: "100%" }}
    >
      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
