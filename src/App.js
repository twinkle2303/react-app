import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from "./Pages/AddExpense/AddExpense";
import Navbar from "./core/Navbar";
import { GlobalProvider } from "./context/ExpenseContext";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function App({ open, onCloseModal }) {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addexpense" component={AddExpense} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
