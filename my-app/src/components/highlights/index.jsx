import React from "react";
import "./styles.css";

export function HighlightUV(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data">
        {props.infoCard}
        <span className="mini-text">{props.extra}</span>
      </p>
    </div>
  );
}

export function HighlightWind(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="kmh-flex data wind-data flex-justifystart">
        {props.infoCard}
        <span className="kmh">{props.extra}</span>
      </p>
    </div>
  );
}

export function HighlightSunrise(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data sunrise-data">
        {props.infoCard}&nbsp;AM
      </p>
      <p className="data sunrise-data">{props.infoCard2}&nbsp;PM</p>
    </div>
  );
}

export function HighlightHumidity(props) {
  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data humidity-data flex-justifystart">
        {props.infoCard}
        <span className="percent">{props.extra}</span>
      </p>
      <p className="infocard2">{props.infoCard2}</p>
    </div>
  );
}

export function HighlightVisibility(props) {
  return (
    <div className="highlight-card">
      <h4 className="info-text"> {props.title}</h4>
      <p className="data kmh-flex flex-justifystart">
        {props.infoCard}
        <span className="kmh">{props.extra}</span>
      </p>
      <p className="infocard2">{props.infoCard2}</p>
    </div>
  );
}

