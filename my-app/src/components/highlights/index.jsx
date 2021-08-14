import React from "react";
import "./styles.css";

export function HighlightUV(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard} 
      </p>
    </div>
  );
}

export function HighlightWind(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data wind-data kmh-flex flex-justifystart">
        {props.infoCard}<span className='kmh'>km/h</span>
      </p>
    </div>
  );
}

export function HighlightSunrise(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data sunrise-data">
        {props.infoCard}<br/>
        {props.infoCard2}
      </p>
    </div>
  );
}

export function HighlightHumidity(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data humidity-data flex-justifystart">
        {props.infoCard} <span className='percent'>%</span>
      </p>
    </div>
  );
}

export function HighlightVisibility(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data kmh-flex flex-justifystart">
        {props.infoCard} <span className='kmh'>km</span>
      </p>
    </div>
  );
}


