import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart(item));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />

      <div style={styles.details}>
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>

        <p>
          Total: ${item.price * item.quantity}
        </p>

        <div style={styles.controls}>
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button
          style={styles.delete}
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    gap: "15px",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  details: {
    flex: 1,
  },
  controls: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "10px",
  },
  delete: {
    marginTop: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
};

export default CartItem;
