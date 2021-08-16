import "./styles.css";
import React, { useEffect, useState, Fragment, useRef } from "react";
import { WeatherKey } from "../../keys/keys";
import LargeContainer from "../larger-container/index";
import { LocationSearching } from "@material-ui/icons";
import icon from "../../assets/weather-icon-placeholder.png";

function SmallContainer() {

  //-----------------------variablles----------------------------------------
  const [icono, seticon] = useState();
  const [temp, setTemp] = useState();
  const [main, setMain] = useState();
  const [description, setDescription] = useState();
  const [tempSymbol, setSymbol] = useState("ºC");
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  
  const [arrayCity, setArraycity] = useState();

  const arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  let showDate = new Date();
  let dayNumber = showDate.getDay();
  let day = arrayOfWeekdays[dayNumber];
  let hour = showDate.getHours();
  let minute = showDate.getMinutes();

 //-----------------------end----------------------------------------

 
   //-----------------------funciones----------------------------------------
  const changeTempF = () => {
    const geo2 = (position) => {
      
      let Apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${WeatherKey}&units=imperial`;
      fetch(Apiurl)
        .then((response) => response.json())
        .then((data) => { 
          const dataCity = { ...data };
          setArraycity({ ...dataCity });
          setTemp(Math.floor(data.current.temp));
          setSymbol("°F");
        });
    };
    navigator.geolocation.getCurrentPosition(geo2);
  };

  const changeTempBack = (data) => {
    const geoback = (position) => {
      
        
      let Apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${WeatherKey}&units=metric`;
      fetch(Apiurl)
        .then((response) => response.json())
        .then((data) => {
          const dataCity = { ...data };
          setArraycity({ ...dataCity });
          setTemp(Math.floor(data.current.temp));
          setSymbol("ºC");
          
        });
    };
    navigator.geolocation.getCurrentPosition(geoback);
  };

  const changeCity = (lati, long) => {
    let units = tempSymbol === "ºC" ? "metric" : "imperial";
    let Apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=&appid=${WeatherKey}&units=${units}`;
    fetch(Apiurl2)
      .then((response) => response.json())
      .then((data) => {
        const dataCity = { ...data };
        setArraycity({ ...dataCity });
        seticon(data.current.weather[0].icon);
        setTemp(Math.floor(data.current.temp));
        setMain(data.current.weather[0].main);
        setDescription(data.current.weather[0].description);
        setlon(long);
        setlat(lati);
      });
  };

  const changeTempC = (position) => {
    let { latitude, longitude } = position.coords;
    let Apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${WeatherKey}&units=metric`;
    fetch(Apiurl2)
      .then((response) => response.json())
      .then((data) => {
        const dataCity = { ...data };
        setArraycity({ ...dataCity });
        seticon(data.current.weather[0].icon);
        setTemp(Math.floor(data.current.temp));
        setMain(data.current.weather[0].main);
        setDescription(data.current.weather[0].description);
        setlon(longitude);
        setlat(latitude);
        
      });
  };
  
  useEffect((v) => {
    navigator.geolocation.getCurrentPosition(changeTempC);
  }, []);

   //-----------------------end----------------------------------------


  return (
    <Fragment>
      <aside className="sideCard-container">
        <div className="top-container">
          <div className="search-bar">
            <span class="material-icons search-icon">search</span>
            <input
              className="inp-city"
              placeholder="Search for places..."
              spellcheck="false"
              onClick={(e) => {
                e.preventDefault();
                let ciudad = e.target.value;
                if (ciudad !== "") {
                  const ApiurlFarenhit = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${WeatherKey}&units=imperial`;
                  fetch(ApiurlFarenhit)
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data.coord);
                      let { lon, lat } = data.coord;
                      changeCity(lat, lon);
                      ciudad = "";
                    });
                }
              }}
            ></input>
          </div>

          <button
            className="material-icons location-icon"
            onClick={(e) =>
              navigator.geolocation.getCurrentPosition(changeTempC)
            }
          >
            <span >gps_not_fixed</span>
          </button>
        </div>

        <img src={`http://openweathermap.org/img/wn/${icono}@4x.png`} alt="imagen" className="imgStyle" />
        <p className="big-number">
          {temp}
          <sup>{tempSymbol}</sup>
        </p>
        <p className="day">
          {day},{" "}
          <span className="time">
            {hour}:{minute}
          </span>
        </p>
        <hr className='hr' />
        <div className='condition1'>
          {/* <div className='icon-placeholder' /> */}
          <p className="info">{main}</p>
        </div>
        <div className='condition2'>
          {/* <div className='icon-placeholder' /> */}
          <p className="info">{description}</p>
        </div>

      </aside>
      <LargeContainer
        arrayCity={arrayCity}
        onChangetempF={changeTempF}
        onChangetempC={changeTempBack}
      ></LargeContainer>
    </Fragment>
  );
}

export default SmallContainer;
