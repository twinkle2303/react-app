import React, { Fragment } from "react";
import Addform from "../../components/AddExpense/Addform";
import Expenseheader from "../../components/AddExpense/Expenseheader";

const EditForm = () => {
  return (
    <Fragment>
      <Expenseheader formheader={"Edit Expense"} />
    </Fragment>
  );
};

export default EditForm;
