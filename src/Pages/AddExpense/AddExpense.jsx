import React, { Fragment } from "react";
import Addform from "../../components/AddExpense/Addform";
import Expenseheader from "../../components/AddExpense/Expenseheader";
import { useParams } from "react-router-dom";
const AddExpense = () => {
  let params = useParams();
  return (
    <Fragment>
      <Expenseheader
        formheader={params.id === undefined ? "Add Expense" : "Edit Expense"}
      />
      <Addform />
    </Fragment>
  );
};

export default AddExpense;
