import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";
import SettingsOptions from "./SettingsOptions";
import SettingsWrapper from "./SettingsWrapper";

const Settings = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { themetype } = useContext(GlobalContext);
  return (
    <div
      className={`settings1 ${
        darkMode
          ? "nav-dark"
          : !darkMode && themetype === "blue"
          ? "nav-light-blue"
          : !darkMode && themetype === "green"
          ? "nav-light-green"
          : !darkMode && themetype === "instagram"
          ? "nav-light-ig"
          : "nav-light-blue"
      }`}
    >
      <div className="settings2">
        <SettingsOptions />
        <SettingsWrapper />
      </div>
    </div>
  );
};

export default Settings;
