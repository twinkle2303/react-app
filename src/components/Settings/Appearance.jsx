import React, { useContext } from "react";
import blue from "../../images/lightbg.jpg";
import green from "../../images/Green.jpg";
import instagram from "../../images/Instagram.jpg";
import { GlobalContext } from "../../context/ExpenseContext";

const Appearance = () => {
  let { changetheme, themetype } = useContext(GlobalContext);
  const handleClick = (e) => {
    changetheme(e.target.parentElement.classList[0]);
  };
  return (
    <div className="appearance-wrapper">
      <div className="container">
        <h2>Choose your theme preference:</h2>
        <div className="theme-options">
          <div
            className={`blue ${
              themetype === "blue" || themetype === "" ? "selected" : {}
            }`}
            onClick={(e) => handleClick(e)}
          >
            <img src={blue} alt="" />
            <h4>blue</h4>
          </div>
          <div
            className={`green ${themetype === "green" ? "selected" : {}}`}
            onClick={(e) => handleClick(e)}
          >
            <img src={green} alt="" />
            <h4>green</h4>
          </div>
          <div
            className={`instagram ${
              themetype === "instagram" ? "selected" : {}
            }`}
            onClick={(e) => handleClick(e)}
          >
            <img src={instagram} alt="" />
            <h4>instagram</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
