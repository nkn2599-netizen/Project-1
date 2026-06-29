import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TOTAL CART AMOUNT
  const totalAmount = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cart.items.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />

              <div style={styles.details}>
                <h3>{item.name}</h3>

                <p>Unit Price: ${item.price}</p>

                {/* TOTAL PER ITEM */}
                <p style={{ fontWeight: "bold" }}>
                  Total: ${item.price * item.quantity}
                </p>

                <div style={styles.controls}>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, type: "decrease" })
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, type: "increase" })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  style={styles.delete}
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL CART AMOUNT */}
          <h2 style={{ marginTop: "20px" }}>
            Total Cart Amount: ${totalAmount}
          </h2>

          {/* ACTION BUTTONS */}
          <div style={styles.buttons}>
            <button
              style={styles.checkout}
              onClick={() => alert("Checkout Coming Soon")}
            >
              Checkout
            </button>

            <button
              style={styles.continue}
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
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
    alignItems: "center",
  },
  delete: {
    marginTop: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  checkout: {
    padding: "10px 15px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  continue: {
    padding: "10px 15px",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Cart;
