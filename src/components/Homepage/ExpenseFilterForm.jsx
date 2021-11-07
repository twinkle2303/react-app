import React, { Fragment, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseFilterForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      className={`ExpenseFilterForm ${
        darkMode ? "filter-dark" : "filter-light"
      }`}
    >
      <div className="container filter-content">
        <input
          type="text"
          placeholder="Search Expenses"
          name="searchInput"
          autocomplete="off"
        />
        <select name="filterDropdown" className="filter-dropdown">
          <option value="1" selected>
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <div className="date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
