import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses, todos, groceries, layouttype } = useContext(GlobalContext);
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          {layouttype === "Budget App" ? (
            !expenses.length ? (
              <h1>Sorry, No Expenses!</h1>
            ) : (
              expenses.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : layouttype === "Todo-List App" ? (
            !todos.length ? (
              <h1>Sorry, No Todos!</h1>
            ) : (
              todos.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : layouttype === "Grocery-List App" ? (
            !groceries.length ? (
              <h1>Sorry, No Items!</h1>
            ) : (
              groceries.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : !expenses.length ? (
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
