import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PizzaItem from "../PizzaItem/PizzaItem";
import { useHistory } from "react-router-dom";

function PizzaList() {
  const dispatch = useDispatch();
  const history = useHistory();
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
      <button onClick={() => history.push("/order")}>NEXT</button>
    </div>
  );
}
export default PizzaList;
