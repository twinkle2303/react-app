import React, { Fragment, useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/ExpenseContext";
import { useHistory, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addform = () => {
  let [data, setdata] = useState(null);
  let params = useParams();
  let { extractitem, extractitem2, extractitem3, foundobj } =
    useContext(GlobalContext);
  useEffect(() => {
    if (params.id !== undefined) {
      if (layouttype === "Budget App") {
        extractitem(params.id);
      } else if (layouttype === "Todo-List App") {
        extractitem2(params.id);
      } else if (layouttype === "Grocery-List App") {
        extractitem3(params.id);
      } else {
        extractitem(params.id);
      }

      setdata(foundobj);
    }
  }, [foundobj]);
  let history = useHistory();

  let {
    addExpense,
    addTodo,
    addItem,
    replacewithnew,
    replacewithnew2,
    replacewithnew3,
    themetype,
    layouttype,
  } = useContext(GlobalContext);
  let [formData, setFormData] = useState({
    description: "",
    qty: 0,
    amount: "",
    time: "",
    date: "",
    note: "",
    id: "",
  });
  useEffect(() => {
    if (data !== null || data !== undefined) {
      setFormData({ ...data });
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
    const isValid = formValidation();
    if (isValid) {
      if (params.id === undefined) {
        if (layouttype === "Budget App") {
          addExpense({ ...formData, id: uuidv4() });
        } else if (layouttype === "Todo-List App") {
          addTodo({ ...formData, id: uuidv4() });
        } else if (layouttype === "Grocery-List App") {
          addItem({ ...formData, id: uuidv4() });
        } else {
          addExpense({ ...formData, id: uuidv4() });
        }
      } else {
        if (layouttype === "Budget App") {
          replacewithnew(formData);
        } else if (layouttype === "Todo-List App") {
          replacewithnew2(formData);
        } else if (layouttype === "Grocery-List App") {
          replacewithnew3(formData);
        } else {
          replacewithnew(formData);
        }
      }
      save();
      setFormData({
        description: "",
        qty: "",
        amount: "",
        date: "",
        note: "",
        time: "",
        id: "",
      });

      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  };
  const formValidation = () => {
    let isValid = true;

    //Description
    let isDescriptionValid = true;
    let desc = formData.description;
    for (let i in desc) {
      if (
        !(
          (desc.charCodeAt(i) >= 65 && desc.charCodeAt(i) <= 90) ||
          (desc.charCodeAt(i) >= 97 && desc.charCodeAt(i) <= 122)
        )
      ) {
        isDescriptionValid = false;
        break;
      }
    }
    if (!isDescriptionValid) {
      notify("Only alphabets allowed in description!");
      isValid = false;
    }
    //amount
    if (formData.amount !== undefined) {
      let amt = formData.amount;
      let isAmtValid = true;
      if (amt <= 0) {
        isAmtValid = false;
      }

      if (!isAmtValid) {
        notify("Please enter valid amount");
        isValid = false;
      }
    }

    //qty
    if (formData.qty !== undefined) {
      let qty = formData.qty;
      let isQtyValid = true;
      if (qty <= 0) {
        isQtyValid = false;
      }

      if (!isQtyValid) {
        notify("Quantity should be atleast 1!");
        isValid = false;
      }
    }

    return isValid;
  };

  function notify(str) {
    toast.error(str, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function save() {
    if (darkMode) {
      toast.success("Saved Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Saved Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Fragment>
      <div className={`form-wrapper ${darkMode ? "wrap-dark" : "wrap-light"}`}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label for="description">Description</label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              required
              autoComplete="off"
            />
            {layouttype === "Budget App" ? (
              <label for="amount">Amount</label>
            ) : layouttype === "Todo-List App" ? (
              <label for="time">Time</label>
            ) : layouttype === "Grocery-List App" ? (
              <label for="amount">Price</label>
            ) : (
              <label for="amount">Amount</label>
            )}
            <input
              type={`${layouttype !== "Todo-List App" ? "number" : "time"}`}
              placeholder={`${
                layouttype !== "Todo-List App" ? "Amount" : "Time"
              }`}
              name={`${layouttype !== "Todo-List App" ? "amount" : "time"}`}
              onChange={handleChange}
              value={
                layouttype !== "Todo-List App" ? formData.amount : formData.time
              }
              autoComplete="off"
              required
            />
            {layouttype !== "Grocery-List App" ? (
              <label for="date">Date</label>
            ) : (
              <label for="qty">Quantity</label>
            )}
            <input
              type={`${layouttype !== "Grocery-List App" ? "date" : "number"}`}
              name={`${layouttype !== "Grocery-List App" ? "date" : "qty"}`}
              placeholder={`${
                layouttype !== "Grocery-List App" ? "date" : "Quantity"
              }`}
              onChange={handleChange}
              value={
                layouttype !== "Grocery-List App" ? formData.date : formData.qty
              }
              autoComplete="off"
              required
            />
            <label for="note">Note</label>
            <textarea
              name="note"
              cols="30"
              rows="10"
              placeholder="Add a note (optional)"
              onChange={handleChange}
              value={formData.note}
              autoComplete="off"
            ></textarea>
            <input
              type="submit"
              value={` ${
                layouttype === "Budget App"
                  ? "Save Expense"
                  : layouttype === "Todo-List App"
                  ? "Save Todo"
                  : layouttype === "Grocery-List App"
                  ? "Save Item"
                  : "Save Expense"
              }`}
              className={`submit-btn ${
                darkMode
                  ? "btn-dark"
                  : !darkMode && themetype === "blue"
                  ? "btn-light-blue"
                  : !darkMode && themetype === "green"
                  ? "btn-light-green"
                  : !darkMode && themetype === "instagram"
                  ? "btn-light-ig"
                  : "btn-light-blue"
              }`}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Addform;
