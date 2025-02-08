import React from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-background"></div>
      <div className="loader-content">
        <div className="loader-image"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
