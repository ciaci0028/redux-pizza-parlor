import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";
import PizzaOrder from '../PizzaOrder/PizzaOrder';
import OrderList from "../OrderList/OrderList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Order">Order</Link>
        </nav>

        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/Order" exact>
          <p>Pizza is great.</p>
          <OrderList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
