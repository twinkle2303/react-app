import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

const ExpenseDetails = () => {
  let { expenses } = useContext(GlobalContext);
  let history = useHistory();
  console.log(history);

  const handleClick = () => {
    history.push("/addexpense");
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let totalAmt;
  totalAmt = expenses.reduce((acc, item) => (acc += Number(item.amount)), 0);
  return (
    <Fragment>
      <div
        className={`expensedetails ${
          darkMode ? "header-dark" : "header-light"
        }`}
      >
        <div className="container expense-content">
          <h1>
            Viewing {expenses.length} expenses totalling ₹{totalAmt}
          </h1>
          <button
            className={`add-expense-btn ${
              darkMode ? "btn-dark" : "btn-light"
            } `}
            onClick={handleClick}
          >
            Add Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
