import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page background-image">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery — your destination for fresh,
              beautiful, and healthy plants.
            </p>

            <p>
              Explore a wide variety of indoor and outdoor plants to make your
              space greener and more peaceful.
            </p>

            <button
              className="landing-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
