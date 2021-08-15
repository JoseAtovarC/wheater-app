import icon from "../../assets/weather-icon-placeholder.png";
import "./styles.css";

function SmallCard(props) {
  return (
    <div className="small-card">
      <p className="weather-day">{props.dayOfWeek}</p>
      <img src={icon} alt="weather-icon" className="icon" />
      <div className="temperature-container">
        <p>{props.weatherMax}</p>
        <span>{props.weatherMin}</span>
      </div>
    </div>
  );
}

export default SmallCard;
