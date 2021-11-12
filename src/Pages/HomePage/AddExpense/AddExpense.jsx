import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Expenseheader from "../../../components/AddExpense/Expenseheader";
import Addform from "../../../components/AddExpense/Addform";

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
