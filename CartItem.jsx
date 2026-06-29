import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, type: "increase" }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, type: "decrease" }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />

      <div style={styles.details}>
        <h3>{item.name}</h3>

        <p>Unit Price: ${item.price}</p>

        <p>Quantity: {item.quantity}</p>

        {/* TOTAL PER ITEM */}
        <p style={{ fontWeight: "bold" }}>
          Total: ${item.price * item.quantity}
        </p>

        <div style={styles.controls}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button style={styles.delete} onClick={handleRemove}>
          Remove
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
