import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses, todos, groceries, layouttype, filtertype } =
    useContext(GlobalContext);
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          {(layouttype === "Budget App" || layouttype === "") &&
          filtertype === "" ? (
            !expenses.length ? (
              <h1>Sorry, No Expenses!</h1>
            ) : (
              expenses.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : (layouttype === "Budget App" || layouttype === "") &&
            filtertype === "filterDate" ? (
            !expenses.length ? (
              <h1>Sorry, No Expenses!</h1>
            ) : (
              expenses
                .sort((a, b) => (a.date > b.date ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
            )
          ) : (layouttype === "Budget App" || layouttype === "") &&
            filtertype === "filterAmt" ? (
            !expenses.length ? (
              <h1>Sorry, No Expenses!</h1>
            ) : (
              expenses
                .sort((a, b) => (a.amt > b.amt ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
            )
          ) : layouttype === "Todo-List App" && filtertype === "" ? (
            !todos.length ? (
              <h1>Sorry, No Todos!</h1>
            ) : (
              todos.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : layouttype === "Todo-List App" && filtertype === "filterAlpha" ? (
            !todos.length ? (
              <h1>Sorry, No Todos!</h1>
            ) : (
              todos
                .sort((a, b) => (a.description > b.description ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
            )
          ) : layouttype === "Todo-List App" && filtertype === "filterDate" ? (
            !todos.length ? (
              <h1>Sorry, No Todos!</h1>
            ) : (
              todos
                .sort((a, b) => (a.date > b.date ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
            )
          ) : layouttype === "Grocery-List App" && filtertype === "" ? (
            !groceries.length ? (
              <h1>Sorry, No Items!</h1>
            ) : (
              groceries.map((item, idx) => (
                <ExpenseListItem item={item} idx={idx} />
              ))
            )
          ) : layouttype === "Grocery-List App" &&
            filtertype === "filterAlpha" ? (
            !groceries.length ? (
              <h1>Sorry, No Items!</h1>
            ) : (
              groceries
                .sort((a, b) => (a.description > b.description ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
            )
          ) : layouttype === "Grocery-List App" &&
            filtertype === "filterAmt" ? (
            !groceries.length ? (
              <h1>Sorry, No Items!</h1>
            ) : (
              groceries
                .sort((a, b) => (a.amt > b.amt ? 1 : -1))
                .map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
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
