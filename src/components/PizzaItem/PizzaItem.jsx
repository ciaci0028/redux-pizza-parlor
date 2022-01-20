import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PizzaItem({ pizza }) {
  const [flipStatus, setFlipStatus] = useState(true);
  const dispatch = useDispatch();
  let [pizzaCart, setPizzaCart] = useState([]);
  dispatch({
    type: "PIZZA_CART",
    // payload is any data
    // that I want to send with me action
    payload: pizzaCart,
  });
  const addToCart = () => {
    setFlipStatus(!flipStatus);
    pizzaCart.push(pizza)
  };

  const deleteFromCart = (pizza) => {
    setFlipStatus(!flipStatus);
    
  };

  return (
    <>
      <div key={pizza.id}>
        <img className="img" src={pizza.image_path} />
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p>${pizza.price}</p>
      </div>

      {flipStatus ? (
        <button onClick={addToCart} className="addToCartBtn">
          Add
        </button>
      ) : (
        <button onClick={deleteFromCart} className="DeleteFromCartBtn">
          Remove
        </button>
      )}
    </>
  );
}

export default PizzaItem;
