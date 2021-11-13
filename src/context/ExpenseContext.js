import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
  todos: [],
  groceries: [],
  layouttype: "",
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
      type: "ADD_EXPENSE",
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
  const extractitem2 = (id) => {
    dispatch({
      type: "EXTRACT_ITEM_2",
      payload: id,
    });
  };
  const replacewithnew2 = (obj) => {
    dispatch({
      type: "REPLACE_WITH_2",
      payload: obj,
    });
  };
  const extractitem3 = (id) => {
    dispatch({
      type: "EXTRACT_ITEM_3",
      payload: id,
    });
  };
  const replacewithnew3 = (obj) => {
    dispatch({
      type: "REPLACE_WITH_3",
      payload: obj,
    });
  };
  const removeExpense = (expense) => {
    dispatch({
      type: "DEL_EXPENSE",
      payload: expense,
    });
  };
  const removeTodo = (todo) => {
    dispatch({
      type: "DEL_TODO",
      payload: todo,
    });
  };
  const removeItem = (item) => {
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
  const changelayout = (str) => {
    dispatch({
      type: "CHANGE_LAYOUT",
      payload: str,
    });
  };
  const addTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };
  const addItem = (newItem) => {
    dispatch({
      type: "ADD_ITEM",
      payload: newItem,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        foundobj: state.foundobj,
        settingstype: state.settingstype,
        themetype: state.themetype,
        layouttype: state.layouttype,
        todos: state.todos,
        groceries: state.groceries,
        addExpense,
        extractitem,
        extractitem2,
        extractitem3,
        replacewithnew,
        changetype,
        replacewithnew2,
        replacewithnew3,
        removeExpense,
        changetheme,
        changelayout,
        addTodo,
        addItem,
        removeItem,
        removeTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
