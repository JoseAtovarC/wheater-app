import React from "react";
import "./styles.css";

function HighlightUV(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} <span className="mini-text"></span>
      </p>
    </div>
  );
}

function HighlightWind(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} <span className="mini-text"></span>
      </p>
    </div>
  );
}

function HighlightSunrise(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} <span className="mini-text"></span>
      </p>
    </div>
  );
}

function HighlightHumidity(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} <span className="mini-text"></span>
      </p>
    </div>
  );
}

function HighlightVisibility(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} <span className="mini-text"></span>
      </p>
    </div>
  );
}


export default {HighlightWind, HighlightHumidity, HighlightSunrise, HighlightUV, HighlightVisibility};
