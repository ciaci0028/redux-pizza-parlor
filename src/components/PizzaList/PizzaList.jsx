import React, { useState, useEffect } from "react";
import axios from "axios";

function PizzaList() {
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
  return (
    <div>
      <h2>Pizza</h2>

      {pizzaList.map((pizza) => (
        <div key={pizza.id}>
          <p>{pizza.name}</p>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          <img src={pizza.image_path} />
        </div>
      ))}
    </div>
  );
}
export default PizzaList;
