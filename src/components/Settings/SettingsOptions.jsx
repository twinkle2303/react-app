import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const SettingsOptions = () => {
  let { changetype, settingstype } = useContext(GlobalContext);
  const handleClick = (e) => {
    changetype(e.target.textContent.trim());
  };

  return (
    <div className="settingsoptions">
      <h2> Options</h2>
      <ul>
        <li
          className={`options ${
            settingstype === "Appearance" || settingstype === ""
              ? "clicked"
              : {}
          }`}
          onClick={(e) => handleClick(e)}
        >
          Appearance
        </li>
        <li
          className={`options ${settingstype === "Layout" ? "clicked" : {}}`}
          onClick={(e) => handleClick(e)}
        >
          Layout
        </li>
      </ul>
    </div>
  );
};

export default SettingsOptions;
