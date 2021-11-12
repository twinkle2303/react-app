import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const SettingsOptions = () => {
  let { changetype } = useContext(GlobalContext);
  const handleClick = (e) => {
    let ulchild = e.target.parentElement.children;

    for (let i = 0; i < ulchild.length; i++) {
      if (ulchild[i].classList.contains("clicked")) {
        ulchild[i].classList.remove("clicked");
      }
    }
    e.target.classList.add("clicked");

    changetype(e.target.textContent.trim());
  };

  return (
    <div className="settingsoptions">
      <h2> Options</h2>
      <ul>
        <li className="clicked options" onClick={(e) => handleClick(e)}>
          Appearance
        </li>
        <li className="options" onClick={(e) => handleClick(e)}>
          Layout
        </li>
      </ul>
    </div>
  );
};

export default SettingsOptions;
