import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const Layout = () => {
  let { changelayout, layouttype } = useContext(GlobalContext);
  const handleClick = (e) => {
    changelayout(e.target.textContent.trim());
  };
  return (
    <div className="layout-wrapper">
      <div className="container">
        <h2>Select Layout</h2>
        <div className="layout-options">
          <div
            className={`layouts ${
              layouttype === "Budget App" ? "focused" : {}
            }`}
            onClick={(e) => handleClick(e)}
          >
            Budget App
          </div>
          <div
            className={`layouts ${
              layouttype === "Todo-List App" ? "focused" : {}
            }`}
            onClick={(e) => handleClick(e)}
          >
            Todo-List App
          </div>
          <div
            className={`layouts ${
              layouttype === "Grocery-List App" ? "focused" : {}
            }`}
            onClick={(e) => handleClick(e)}
          >
            Grocery-List App
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
