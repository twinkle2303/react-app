import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

// import { GlobalContext } from "../../context/ExpenseContext/ExpenseContext";

const initialState = {
  expenses: [],
  foundobj: null,
  settingstype: "",
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
  const settheme = (toggle) => {
    dispatch({
      type: "SET_THEME",
      payload: toggle,
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
  const changetype = (str) => {
    dispatch({
      type: "CHANGE_TYPE",
      payload: str,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        foundobj: state.foundobj,
        settingstype: state.settingstype,
        addExpense,
        extractitem,
        replacewithnew,
        changetype,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
