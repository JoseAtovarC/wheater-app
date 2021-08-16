import SmallCard from "../small-card";
import "./styles.css";
import { HighlightHumidity, HighlightSunrise, HighlightUV, HighlightVisibility, HighlightWind } from "../highlights";
import React, { useState, useEffect } from "react";
import { WeatherKey } from "../../keys/keys";

function LargeContainer(props) {

  //-----------------------variablles----------------------------------------
  const [classC, setclassC] = useState("btn-c");
  const [classF, setclassF] = useState("btn-f");

  const [uvRays, setuvRays] = useState();
  const [wind_status, setWindStatus] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [humidity, setHumidity] = useState();
  const [visibility, setVisibility] = useState();

  const [day1, setday1] = useState();
  const [day2, setday2] = useState();
  const [day3, setday3] = useState();
  const [day4, setday4] = useState();
  const [day5, setday5] = useState();
  const [day6, setday6] = useState();
  const [day7, setday7] = useState();
  const [icon1, seticon1] = useState();
  const [icon2, seticon2] = useState();
  const [icon3, seticon3] = useState();
  const [icon4, seticon4] = useState();
  const [icon5, seticon5] = useState();
  const [icon6, seticon6] = useState();
  const [icon7, seticon7] = useState();
  const [temp1, settemp1] = useState();
  const [temp2, settemp2] = useState();
  const [temp3, settemp3] = useState();
  const [temp4, settemp4] = useState();
  const [temp5, settemp5] = useState();
  const [temp6, settemp6] = useState();
  const [temp7, settemp7] = useState();
  const [tempMin1, settempMin1] = useState();
  const [tempMin2, settempMin2] = useState();
  const [tempMin3, settempMin3] = useState();
  const [tempMin4, settempMin4] = useState();
  const [tempMin5, settempMin5] = useState();
  const [tempMin6, settempMin6] = useState();
  const [tempMin7, settempMin7] = useState();
  //-----------------------end----------------------------------------


  //-----------------------funciones----------------------------------------
  const currentDay = (dt) => {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      new Date(dt * 1000)
    );
  };
  const changeTempF = (data) => {

    settemp1(Math.floor(data.daily[0].temp.max));
    settemp2(Math.floor(data.daily[1].temp.max));
    settemp3(Math.floor(data.daily[2].temp.max));
    settemp4(Math.floor(data.daily[3].temp.max));
    settemp5(Math.floor(data.daily[4].temp.max));
    settemp6(Math.floor(data.daily[5].temp.max));
    settemp7(Math.floor(data.daily[6].temp.max));
    settempMin1(Math.floor(data.daily[0].temp.min));
    settempMin2(Math.floor(data.daily[1].temp.min));
    settempMin3(Math.floor(data.daily[2].temp.min));
    settempMin4(Math.floor(data.daily[3].temp.min));
    settempMin5(Math.floor(data.daily[4].temp.min));
    settempMin6(Math.floor(data.daily[5].temp.min));
    settempMin7(Math.floor(data.daily[6].temp.min));
  };

  const changeBack = (data) => {

    settemp1(Math.floor(data.daily[0].temp.max));
    settemp2(Math.floor(data.daily[1].temp.max));
    settemp3(Math.floor(data.daily[2].temp.max));
    settemp4(Math.floor(data.daily[3].temp.max));
    settemp5(Math.floor(data.daily[4].temp.max));
    settemp6(Math.floor(data.daily[5].temp.max));
    settemp7(Math.floor(data.daily[6].temp.max));
    settempMin1(Math.floor(data.daily[0].temp.min));
    settempMin2(Math.floor(data.daily[1].temp.min));
    settempMin3(Math.floor(data.daily[2].temp.min));
    settempMin4(Math.floor(data.daily[3].temp.min));
    settempMin5(Math.floor(data.daily[4].temp.min));
    settempMin6(Math.floor(data.daily[5].temp.min));
    settempMin7(Math.floor(data.daily[6].temp.min));

  };

  const log = (data) => {

    setuvRays(data.current.uvi);
    setWindStatus(data.current.wind_speed);
    let date = new Date(data.current.sunrise * 1000);
    setSunrise(date.getHours() + ":" + date.getMinutes());
    date = new Date(data.current.sunset * 1000);
    setSunset(date.getHours() + ":" + date.getMinutes());
    setHumidity(data.current.humidity);
    setVisibility(data.current.visibility);
    setday1(currentDay(data.daily[0].dt));
    setday2(currentDay(data.daily[1].dt));
    setday3(currentDay(data.daily[2].dt));
    setday4(currentDay(data.daily[3].dt));
    setday5(currentDay(data.daily[4].dt));
    setday6(currentDay(data.daily[5].dt));
    setday7(currentDay(data.daily[6].dt));
    seticon1(data.daily[0].weather[0].icon);
    seticon2(data.daily[1].weather[0].icon);
    seticon3(data.daily[2].weather[0].icon);
    seticon4(data.daily[3].weather[0].icon);
    seticon5(data.daily[4].weather[0].icon);
    seticon6(data.daily[5].weather[0].icon);
    seticon7(data.daily[6].weather[0].icon);
    settemp1(Math.floor(data.daily[0].temp.max));
    settemp2(Math.floor(data.daily[1].temp.max));
    settemp3(Math.floor(data.daily[2].temp.max));
    settemp4(Math.floor(data.daily[3].temp.max));
    settemp5(Math.floor(data.daily[4].temp.max));
    settemp6(Math.floor(data.daily[5].temp.max));
    settemp7(Math.floor(data.daily[6].temp.max));
    settempMin1(Math.floor(data.daily[0].temp.min));
    settempMin2(Math.floor(data.daily[1].temp.min));
    settempMin3(Math.floor(data.daily[2].temp.min));
    settempMin4(Math.floor(data.daily[3].temp.min));
    settempMin5(Math.floor(data.daily[4].temp.min));
    settempMin6(Math.floor(data.daily[5].temp.min));
    settempMin7(Math.floor(data.daily[6].temp.min));

  };
  //-----------------------end----------------------------------------

  useEffect(() => {

    if (props.arrayCity) log(props.arrayCity);
  });



  return (
    <section className="card-container">
      <div className="card-header">
        <h2 className="header-title">
          Week <hr></hr>
        </h2>

        <div className="btn-container">
          <button className={classC}
            onClick={() => {
              setclassC(classF)
              setclassF(classC)
              props.onChangetempC()
              if (props.arrayCity)  changeBack(props.arrayCity);
            }}>°C</button>

          <button onClick={() => {
            setclassF(classC)
            setclassC(classF)
            props.onChangetempF()
            if (props.arrayCity)  changeTempF(props.arrayCity);
          }} className={classF} >°F</button>
        </div>
      </div>
      <div className="small-card-container">
        <SmallCard
          smallTilte={day1}
          smallIcon={icon1}
          smallTemp={temp1}
          smallTempMin={tempMin1}
        ></SmallCard>
        <SmallCard
          smallTilte={day2}
          smallIcon={icon2}
          smallTemp={temp2}
          smallTempMin={tempMin2}

        ></SmallCard>
        <SmallCard
          smallTilte={day3}
          smallIcon={icon3}
          smallTemp={temp3}
          smallTempMin={tempMin3}
        ></SmallCard>
        <SmallCard
          smallTilte={day4}
          smallIcon={icon4}
          smallTemp={temp4}
          smallTempMin={tempMin4}
        ></SmallCard>
        <SmallCard
          smallTilte={day5}
          smallIcon={icon5}
          smallTemp={temp5}
          smallTempMin={tempMin5}
        ></SmallCard>
        <SmallCard
          smallTilte={day6}
          smallIcon={icon6}
          smallTemp={temp6}
          smallTempMin={tempMin6}

        ></SmallCard>
        <SmallCard
          smallTilte={day7}
          smallIcon={icon7}
          smallTemp={temp7}
          smallTempMin={tempMin7}
        ></SmallCard>
      </div>
      <h2 className='highlight-title'>Today's Highlights</h2>
      <div className="highlights-container">
        <HighlightUV title="UV Rays" infoCard={uvRays}></HighlightUV>
        <HighlightWind
          title="Wind status"
          extra="km/h"
          infoCard={wind_status}
        ></HighlightWind>
        <HighlightSunrise
          title="Sunrise & Sunset"

          infoCard={<span className="special-card">{sunrise}</span>}
          infoCard2={<span className="special-card">{sunset}</span>}

        ></HighlightSunrise>
        <HighlightHumidity title="Humidity" extra="%" infoCard={humidity}></HighlightHumidity>
        <HighlightVisibility
          title="Visibility"
          extra="km"
          infoCard={visibility / 1000}
        ></HighlightVisibility>
      </div>
    </section>
  );
}

export default LargeContainer;