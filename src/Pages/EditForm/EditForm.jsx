import React, { Fragment, useContext } from "react";

import Expenseheader from "../../components/AddExpense/Expenseheader";
import { GlobalContext } from "../../context/ExpenseContext";

const EditForm = () => {
  let { layouttype } = useContext(GlobalContext);
  let heading;
  if (layouttype === "Budget App") {
    heading = "Edit Expense";
  } else if (layouttype === "Todo-List App") {
    heading = "Edit Todo";
  } else if (layouttype === "Grocery-List App") {
    heading = "Edit Item";
  } else {
    heading = "Edit Expense";
  }
  return (
    <Fragment>
      <Expenseheader formheader={heading} />
    </Fragment>
  );
};

export default EditForm;
