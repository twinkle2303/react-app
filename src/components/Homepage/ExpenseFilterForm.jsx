import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { GlobalContext } from "../../context/ExpenseContext";

const ExpenseFilterForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let { changefiltertype, layouttype } = useContext(GlobalContext);
  const getSeletedValue = (e) => {
    changefiltertype(e.target.value);
  };

  return (
    <div
      className={`ExpenseFilterForm ${
        darkMode ? "filter-dark" : "filter-light"
      }`}
    >
      <div className="container filter-content">
        <input
          type="text"
          placeholder="Search"
          name="searchInput"
          autoComplete="off"
        />

        {layouttype === "Budget App" ? (
          <select
            name="filterDropdown"
            className="filter-dropdown"
            placeholder="Filter by"
            onChange={(e) => getSeletedValue(e)}
          >
            <option value="" disabled selected hidden>
              Filter by
            </option>
            <option value="filterDate">Date</option>
            <option value="filterAmt">Amount</option>
          </select>
        ) : layouttype === "Todo-List App" ? (
          <select
            name="filterDropdown"
            className="filter-dropdown"
            placeholder="Sort by"
            onChange={(e) => getSeletedValue(e)}
          >
            <option value="" disabled selected hidden>
              Sort by
            </option>
            <option value="filterDate">Date</option>
            <option value="filterAlpha">Alphabetical</option>
          </select>
        ) : layouttype === "Grocery-List App" ? (
          <select
            name="filterDropdown"
            className="filter-dropdown"
            placeholder="Sort by"
            onChange={(e) => getSeletedValue(e)}
          >
            <option value="" disabled selected hidden>
              Sort by
            </option>
            <option value="filterAmt">Amount</option>
            <option value="filterAlpha">Alphabetical</option>
          </select>
        ) : (
          <select
            name="filterDropdown"
            className="filter-dropdown"
            placeholder="Sort by"
            onChange={(e) => getSeletedValue(e)}
          >
            <option value="" disabled selected hidden>
              Sort by
            </option>
            <option value="filterDate">Date</option>
            <option value="filterAmt">Amount</option>
          </select>
        )}

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
