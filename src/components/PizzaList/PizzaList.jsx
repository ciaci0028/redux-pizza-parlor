import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PizzaItem from "../PizzaItem/PizzaItem";

function PizzaList() {
  const dispatch = useDispatch();
  let [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getPizza();
  }, []);

  const getPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  dispatch({
    type: "PIZZA_LIST",
    // payload is any data
    // that I want to send with me action
    payload: pizzaList,
  });

  return (
    <div>
      <h2>Step 1: Select Your Pizza</h2>
      {pizzaList.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
      <button>NEXT</button>
    </div>
  );
}
export default PizzaList;
