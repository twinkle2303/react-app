import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import Appearance from "./Appearance";
import Layout from "./Layout";

const SettingsWrapper = () => {
  let { settingstype } = useContext(GlobalContext);
  if (settingstype === "Appearance") {
    return <Appearance />;
  } else if (settingstype === "Layout") {
    return <Layout />;
  } else {
    return <Appearance />;
  }
};

export default SettingsWrapper;
