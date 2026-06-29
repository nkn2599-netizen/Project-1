import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>Fresh plants delivered to your home with care and love.</p>

        <button
          className="landing-button"
          onClick={() => alert("Get Started clicked!")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
