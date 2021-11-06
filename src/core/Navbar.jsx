import React, { Fragment, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-wrapper">
          <h1>Budget App</h1>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={70}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
