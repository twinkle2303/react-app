import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses } = useContext(GlobalContext);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
