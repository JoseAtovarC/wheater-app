import SmallCard from "../small-card";
import "./styles.css";
import {HighlightWind, HighlightHumidity, HighlightSunrise, HighlightUV, HighlightVisibility} from "../highlights";

function LargeContainer() {
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
        <HighlightUV title="UV Rays" infoCard="8"></HighlightUV>
        <HighlightWind title="Wind status" infoCard="8"></HighlightWind>
        <HighlightSunrise title="Sunrise and Sunset" infoCard="6:35 AM" infoCard2="5:42 PM"></HighlightSunrise>
        <HighlightHumidity title="Humidity" infoCard="16"></HighlightHumidity>
        <HighlightVisibility title="Visibility" infoCard="6.78"></HighlightVisibility>
      </div>
    </section>
  );
}

export default LargeContainer;
