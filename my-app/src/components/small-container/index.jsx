import "./styles.css";
import imagen from "../../assets/foto.png";
// import { MyLocation } from "@material-ui/icons";
function SmallContainer() {
  return (
    <aside className="sideCard-container">
      <input
        className="inp-city"
        placeholder=" 🔍 Search for places..."
      ></input>
      {/* <MyLocation></MyLocation> */}
      <img className="imgStyle" src={imagen} alt={"imagen"}></img>
      <p className="big-number">
        12<sup>ºC</sup>
      </p>
      <p className="day">
        Monday, <span className="time">16:00</span>
      </p>
      <p className="info">☁️ Mostly cloudy</p>
      <p className="info">🌧️ Rainy</p>
    </aside>
  );
}

export default SmallContainer;
