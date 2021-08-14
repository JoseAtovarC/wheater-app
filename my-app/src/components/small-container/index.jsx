import "./styles.css";
import imagen from "../../assets/foto.png";
// import { MyLocation } from "@material-ui/icons";
function SmallContainer(props) {
  return (
    <aside className="sideCard-container">
      <input
        className="inp-city"
        placeholder=" 🔍 Search for places..."
      ></input>
      {/* <MyLocation></MyLocation> */}
      <img className="imgStyle" src={imagen} alt={"imagen"}></img>
      <p className="big-number">
        {props.weatherNumber}
        <sup>{props.degree}</sup>
      </p>
      <p className="day">
        {props.day}, <span className="time">{props.time}</span>
      </p>
      <p className="info">☁️{props.clouds}</p>
      <p className="info">🌧️ {props.rain}</p>
    </aside>
  );
}

export default SmallContainer;
