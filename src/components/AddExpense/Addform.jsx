import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Addform = () => {
  const history = useHistory();
  //Consumer
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { addExpense } = useContext(GlobalContext);
  let [formData, setFormData] = useState({
    description: "",
    amount: 0,
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    addExpense(formData);
    //clearInputs
    clearInputs();

    //redirect to homepage
    history.push("/");
  };

  const clearInputs = () => {
    setFormData({
      description: "",
      amount: 0,
      date: "",
      note: "",
    });
  };

  return (
    <Fragment>
      <div
        className={`form-heading ${darkMode ? "header-dark" : "header-light"}`}
      >
        <div className="container">
          <h1>Add Expense</h1>
        </div>
      </div>
      <div className={`form-wrapper ${darkMode ? "wrap-dark" : "wrap-light"}`}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              onChange={handleChange}
              value={formData.amount}
              required
            />
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              required
            />
            <textarea
              name="note"
              cols="30"
              rows="10"
              placeholder="Add a note for your expense (optional)"
              onChange={handleChange}
              value={formData.note}
            ></textarea>
            <input
              type="submit"
              value="Save Expense"
              className={`submit-btn ${darkMode ? "btn-dark" : "btn-light"}`}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Addform;
