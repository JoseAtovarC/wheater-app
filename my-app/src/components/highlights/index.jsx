import React from "react";
import "./styles.css";

function Highlight() {
  return (
    <div className="highlight-card">
      <h4 className="info-text">UV index</h4>
      <p className="data">
        6 <span className="mini-text">km/h</span>
      </p>
    </div>
  );
}

export default Highlight;
