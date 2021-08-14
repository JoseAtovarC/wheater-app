import React from "react";
import "./styles.css";

function Highlight(props) {
  return (
    <div className="highlight-card">
      <h4 className="info-text"> {props.title}</h4>
      <p className="data">
        {props.infoCard} <span className="mini-text">km/h</span>
      </p>
    </div>
  );
}

export default Highlight;