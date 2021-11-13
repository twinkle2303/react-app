import React, { useContext } from "react";
import { GlobalContext } from "../../context/ExpenseContext";

const Layout = () => {
  let { changelayout } = useContext(GlobalContext);
  const handleClick = (e) => {
    let ulchild = e.target.parentElement.children;
    for (let i = 0; i < ulchild.length; i++) {
      if (ulchild[i].classList.contains("focused")) {
        ulchild[i].classList.remove("focused");
      }
    }
    e.target.classList.add("focused");
    console.log(e.target.textContent.trim());
    changelayout(e.target.textContent.trim());
  };
  return (
    <div className="layout-wrapper">
      <div className="container">
        <h2>Select Layout</h2>
        <div className="layout-options">
          <div className="layouts focused" onClick={(e) => handleClick(e)}>
            Budget App
          </div>
          <div className="layouts" onClick={(e) => handleClick(e)}>
            Todo-List App
          </div>
          <div className="layouts" onClick={(e) => handleClick(e)}>
            Grocery-List App
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
