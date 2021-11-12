import React, { Fragment } from "react";
import Expenseheader from "../../components/AddExpense/Expenseheader";
import UserSettings from "../../components/Settings/UserSettings";

const settings = () => {
  return (
    <Fragment>
      <Expenseheader formheader={"User Settings"} />
      <UserSettings />
    </Fragment>
  );
};

export default settings;
