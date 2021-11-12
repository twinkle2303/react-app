import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SettingsOptions from "./SettingsOptions";
import SettingsWrapper from "./SettingsWrapper";

const Settings = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`settings1 ${darkMode ? "nav-dark" : "nav-light"}`}>
      <div className="settings2">
        <SettingsOptions />
        <SettingsWrapper />
      </div>
    </div>
  );
};

export default Settings;
