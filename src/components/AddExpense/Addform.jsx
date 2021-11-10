import React, { Fragment, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { v4 as uuidv4 } from "uuid";
const Addform = () => {
  let [data, setdata] = useState(null);
  let params = useParams();
  let { extractitem, foundobj } = useContext(GlobalContext);
  useEffect(() => {
    if (params.id !== undefined) {
      extractitem(params.id);
      setdata(foundobj);
    }
  }, [foundobj]);
  let history = useHistory();

  let { addExpense, expenses, replacewithnew } = useContext(GlobalContext);
  let [formData, setFormData] = useState({
    description: "",
    amount: 0,
    date: "",
    note: "",
    id: "",
  });
  useEffect(() => {
    if (data !== null || data !== undefined) {
      setFormData({ ...data });
      console.log(formData);
    }
  }, [data]);
  //theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id === undefined) {
      addExpense({ ...formData, id: uuidv4() });
    } else {
      console.log(formData);
      replacewithnew(formData);
    }

    setFormData({
      description: "",
      amount: "",
      date: "",
      note: "",
    });
    history.push("/");
  };

  return (
    <Fragment>
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
