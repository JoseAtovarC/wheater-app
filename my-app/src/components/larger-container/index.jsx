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
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <h2>Today's Highlights</h2>
      <div className="highlights-container">
        <Highlight></Highlight>
        <Highlight></Highlight>
        <Highlight></Highlight>
        <Highlight></Highlight>
        <Highlight></Highlight>
      </div>
    </section>
  );
}

export default LargeContainer;
