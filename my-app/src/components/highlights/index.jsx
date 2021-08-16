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
      <div className="info-text2 filler-div"/>
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
      <div className="info-text2 filler-div"/>
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
      <div className="info-text2 filler-div"/>
    </div>
  );
}

export function HighlightHumidity(props) {
  let humDetails = "";
  if (props.infoCard <= 25) humDetails = "Normal 😎";
  if (props.infoCard > 25 && props.infoCard <= 50) humDetails = "Average 😶";
  if (props.infoCard > 50 && props.infoCard <= 75) humDetails = "High 😅";
  if (props.infoCard > 75 && props.infoCard <= 100) humDetails = "Extreme 😱";


  return (
    <div className="highlight-card">
      <p className="info-text"> {props.title}</p>
      <p className="data humidity-data flex-justifystart">
        {props.infoCard}
        <span className="percent">{props.extra}</span>
      </p>
      <p className="info-text2">{humDetails}</p>
    </div>
  );
}

export function HighlightVisibility(props) {
  let visDetails = "";
  if (props.infoCard <= 5) visDetails = "Restricted 😵";
  if (props.infoCard > 5 && props.infoCard <= 10)
    visDetails = "Medium 😦";
  if (props.infoCard > 10 && props.infoCard <= 15)
    visDetails = "Good 😃";
  if (props.infoCard > 15) visDetails = "Perfect 🌠";

  console.log(visDetails)
  return (
    <div className="highlight-card">
      <h4 className="info-text"> {props.title}</h4>
      <p className="data kmh-flex flex-justifystart">
        {props.infoCard}
        <span className="kmh">{props.extra}</span>
      </p>
      <p className="info-text2">{visDetails}</p>
    </div>
  )
  ;
}

