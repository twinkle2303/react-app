import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const ExpenseFilterForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
          <DateRangePickerComponent
            placeholder="Select date range"
            className="daterangepicker"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
