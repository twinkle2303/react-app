import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from "./Pages/AddExpense/AddExpense";
import Navbar from "./core/Navbar";
import { GlobalProvider } from "./context/ExpenseContext";
import "react-responsive-modal/styles.css";
import Settings from "./Pages/Settings/Settings";
import Footer from "./core/Footer";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addexpense" component={AddExpense} />
          <Route exact={true} path="/edit/:id" component={AddExpense} />
          <Route exact={true} path="/settings" component={Settings} />
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
