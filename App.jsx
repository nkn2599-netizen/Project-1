import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <h1>e-plantShopping</h1>

        <p>
          Welcome to e-plantShopping — your trusted online store for fresh,
          healthy, and beautiful houseplants delivered to your doorstep.
        </p>

        <p>
          We help you bring nature closer with a wide collection of indoor and
          outdoor plants for every space.
        </p>

        <button
          className="landing-button"
          onClick={() => alert("Get Started - Coming Soon")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
