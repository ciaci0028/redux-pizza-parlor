import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


const pizzaList = (state = [], action) => {
  switch (action.type) {
    case "PIZZA_LIST":
      return [...state, action.payload];
  }
  // Whatever we return from the reducer
  // is the value of our state
  return state;
};

const pizzaCart = (state = [], action) => {
    switch (action.type) {
      case "PIZZA_CART":
        return [...state, action.payload];
    }
    // Whatever we return from the reducer
    // is the value of our state
    return state;
  };


const orderList = (state = [], action) => {
    switch(action.type) {
        case 'SET_ORDER_LIST':
            return action.payload;
    };
    
    return state;
}

// Create the store
const store = createStore(
    combineReducers({
       pizzaList: pizzaList,
        orderList,
        pizzaCart: pizzaCart
    }),
    applyMiddleware(logger)

);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
