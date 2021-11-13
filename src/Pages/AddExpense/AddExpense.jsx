import React, { Fragment, useContext } from "react";
import Addform from "../../components/AddExpense/Addform";
import Expenseheader from "../../components/AddExpense/Expenseheader";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/ExpenseContext";
const AddExpense = () => {
  let { layouttype } = useContext(GlobalContext);
  let params = useParams();
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
      <Expenseheader
        formheader={params.id === undefined ? `${heading}` : "Edit Expense"}
      />
      <Addform />
    </Fragment>
  );
};

export default AddExpense;
