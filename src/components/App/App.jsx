import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";
import PizzaOrder from '../PizzaOrder/PizzaOrder';
import OrderList from "../OrderList/OrderList";
import Checkout from "../Checkout/Checkout"

function App() {

  



  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Checkout">Checkout</Link>
          <Link to="/order">Order</Link>
          <Link to="/admin">Admin</Link>

        </nav>

        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/order" exact>
          <p>Customer Information</p>
          <PizzaOrder />
        </Route>

        <Route path="/admin" exact>
          <OrderList />
        </Route>
        <Route>
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
