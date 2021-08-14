import SmallCard from "../small-card";
import "./styles.css";
import Highlight from "../highlights";

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
        <Highlight title="UV Rays" infoCard="8"></Highlight>
        <Highlight title="Wind status" infoCard="8"></Highlight>
        <Highlight title="Sunrise and Sunset" infoCard="6:35 AM 5:42 PM"></Highlight>
        <Highlight title="Humidity" infoCard="16"></Highlight>
        <Highlight title="Visibility" infoCard="6.78"></Highlight>
      </div>
    </section>
  );
}

export default LargeContainer;
