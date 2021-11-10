import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses } = useContext(GlobalContext);
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          {!expenses.length ? (
            <h1>Sorry, No Expenses!</h1>
          ) : (
            expenses.map((item, idx) => (
              <ExpenseListItem item={item} idx={idx} />
            ))
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
