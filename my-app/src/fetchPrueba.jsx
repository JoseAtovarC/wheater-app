import React, { useEffect, useState } from "react";
import { WeatherKey } from "./keys/keys.js";
function Fetch() {
  const [icono, seticon] = useState();
  useEffect((v) => {
    const log = (position) => {
      let { latitude, longitude } = position.coords;
      let Apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${WeatherKey}`;
      fetch(Apiurl2)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };
    const Apiurlcelsius = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${WeatherKey}`;
    fetch(Apiurlcelsius)
      .then((response) => response.json())
      .then((data) => {
        seticon({ icono: data.weather[0].icon });
      });
    navigator.geolocation.getCurrentPosition(log);
  });
  return (
    <div>
      <input
        onClick={(e) => {
          e.preventDefault();
          const ciudad = e.target.value;
          const ApiurlFarenhit = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${WeatherKey}&units=imperial`;
          fetch(ApiurlFarenhit)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            });
        }}
      />
      <img src={`http://openweathermap.org/img/wn/${icono}.png`} alt="" />
    </div>
  );
}
export default Fetch;
