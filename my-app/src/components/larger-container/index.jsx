import SmallCard from "../small-card";
import "./styles.css";
import Highlight from "../highlights";
import React, { useState, useEffect } from "react";
import { WeatherKey } from "../../keys/keys";
import { HighlightUV , HighlightWind , HighlightSunrise , HighlightHumidity , HighlightVisibility} from '../highlights/index'

function LargeContainer() {
  const [uvRays, setuvRays] = useState();
  const [wind_status, setWindStatus] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [humidity, setHumidity] = useState();
  const [visibility, setVisibility] = useState();

  const log = (position) => {
    let { latitude, longitude } = position.coords;
    let Apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${WeatherKey}&units=metric`;
    fetch(Apiurl2)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setuvRays(data.current.uvi);
        setWindStatus(data.current.wind_speed);
        // let rise = new Date();
        // rise.setTime(data.current.sunrise);
        // let riseHour = rise.getHours();
        // let riseMinutes = rise.getMinutes();  let timestamp = data.current.sunset;
        let date = new Date(data.current.sunrise * 1000);
        setSunrise(date.getHours() + ":" + date.getMinutes());
        date = new Date(data.current.sunset * 1000);
        setSunset(date.getHours() + ":" + date.getMinutes());

        // setSunrise(riseHour + ":" + riseMinutes);
        // let sunsetTime = new Date(data.current.sunset);
        // let sunsetHour = sunsetTime.getHours() + ":" + sunsetTime.getMinutes();
        // setSunset(sunsetHour);
        setHumidity(data.current.humidity);
        setVisibility(data.current.visibility);
        console.log(data);
      });
  };

  useEffect((v) => {
    navigator.geolocation.getCurrentPosition(log);
  });

  return (
    <section className="card-container">
      <div className="card-header">
        <h2>
          Week <hr></hr>
        </h2>

        <div className="btn-container">
          <button className="btn-c">°C</button>
          <button className="btn-f">°F</button>
        </div>
      </div>
      <div className="small-card-container">
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
        <SmallCard
          dayOfWeek="Monday"
          weatherMax="54"
          weatherMin="-87"
        ></SmallCard>
      </div>
      <h2>Today's Highlights</h2>
      <div className="highlights-container">
        <HighlightUV
          title="UV Rays"
          infoCard={uvRays}>
        </HighlightUV>
        <HighlightWind
          title="Wind status"
          extra="km/h"
          infoCard={wind_status}
        ></HighlightWind>
        <HighlightSunrise
          title="Sunrise and Sunset"
          infoCard={sunrise}
          infoCard2={sunset}
        ></HighlightSunrise>
        <HighlightHumidity
          title="Humidity"
          extra="%"
          infoCard={humidity}
          infoCard2='Normal'>
          </HighlightHumidity>
        <HighlightVisibility
          title="Visibility"
          extra="km"
          infoCard={visibility / 1000}
          infoCard2='Average'
        ></HighlightVisibility>
      </div>
    </section>
  );
}

export default LargeContainer;
