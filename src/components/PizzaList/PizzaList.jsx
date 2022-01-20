import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <p>${pizza.price}</p>
          <img src={pizza.image_path} />
        </div>
      ))}
      <button>NEXT</button>
    </div>
  );
}
export default PizzaList;
