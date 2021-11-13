import React, { useContext, useLayoutEffect } from "react";
import blue from "../../images/lightbg.jpg";
import green from "../../images/Green.jpg";
import instagram from "../../images/Instagram.jpg";
import { GlobalContext } from "../../context/ExpenseContext";

const Appearance = () => {
  let { changetheme } = useContext(GlobalContext);
  const handleClick = (e) => {
    let divchild = e.target.parentElement.parentElement.children;

    for (let i = 0; i < divchild.length; i++) {
      if (divchild[i].classList.contains("selected")) {
        divchild[i].classList.remove("selected");
      }
    }
    changetheme(e.target.parentElement.classList.value);
    e.target.parentElement.classList.add("selected");

    //
  };
  return (
    <div className="appearance-wrapper">
      <div className="container">
        <h2>Choose your theme preference:</h2>
        <div className="theme-options">
          <div className="selected blue" onClick={(e) => handleClick(e)}>
            <img src={blue} alt="" />
            <h4>blue</h4>
          </div>
          <div className="green" onClick={(e) => handleClick(e)}>
            <img src={green} alt="" />
            <h4>green</h4>
          </div>
          <div className="instagram" onClick={(e) => handleClick(e)}>
            <img src={instagram} alt="" />
            <h4>instagram</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
