import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
  foundobj: null,
  settingstype: "",
  themetype: "",
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  //   actions
  const addExpense = (newExpense) => {
    dispatch({
      type: "ADD_EXPENSE", //mandatory
      payload: newExpense,
    });
  };

  const extractitem = (id) => {
    dispatch({
      type: "EXTRACT_ITEM",
      payload: id,
    });
  };
  const replacewithnew = (obj) => {
    dispatch({
      type: "REPLACE_WITH",
      payload: obj,
    });
  };
  const removeExpense = (item) => {
    dispatch({
      type: "DEL_ITEM",
      payload: item,
    });
  };
  const changetype = (str) => {
    dispatch({
      type: "CHANGE_TYPE",
      payload: str,
    });
  };
  const changetheme = (str) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: str,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        foundobj: state.foundobj,
        item: state.item,
        settingstype: state.settingstype,
        themetype: state.themetype,
        addExpense,
        extractitem,
        replacewithnew,
        changetype,
        removeExpense,
        changetheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
