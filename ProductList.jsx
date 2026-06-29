import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const productsData = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593482892290-34a6b0f0a1f2",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355",
  },

  // Outdoor Plants
  {
    id: 3,
    name: "Bougainvillea",
    price: 20,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 4,
    name: "Hibiscus",
    price: 18,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1598880940080-ff9f6c1f2d6f",
  },

  // Succulents
  {
    id: 5,
    name: "Aloe Vera",
    price: 15,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1596547609652-9cf3d8f8f4a3",
  },
  {
    id: 6,
    name: "Cactus",
    price: 12,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    setAddedItems([...addedItems, product.id]);
  };

  const isAdded = (id) => addedItems.includes(id);

  return (
    <div>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2>Paradise Nursery</h2>

        <div style={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/products">Plants</a>
          <a href="/cart">Cart 🛒 ({cart.totalQuantity})</a>
        </div>
      </nav>

      {/* PRODUCT SECTION */}
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Our Plants Collection
      </h2>

      <div style={styles.grid}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />

            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <span style={styles.category}>{product.category}</span>

            <button
              style={{
                ...styles.button,
                backgroundColor: isAdded(product.id) ? "gray" : "green",
                cursor: isAdded(product.id) ? "not-allowed" : "pointer",
              }}
              disabled={isAdded(product.id)}
              onClick={() => handleAdd(product)}
            >
              {isAdded(product.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: "#2e7d32",
    color: "white",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  category: {
    display: "block",
    fontSize: "12px",
    color: "gray",
    marginBottom: "5px",
  },
};

export default ProductList;
