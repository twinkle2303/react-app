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
  const removeExpense = (item) => {
    dispatch({
      type: "DEL_ITEM",
      payload: item,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        foundobj: state.foundobj,

        item: state.item,
        addExpense,
        extractitem,
        replacewithnew,

        removeExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
