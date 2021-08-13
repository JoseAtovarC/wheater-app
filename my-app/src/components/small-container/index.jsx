import "./styles.css";
import imagen from "../../assets/foto.png";

function SmallContainer() {
  return (
    <aside className="sideCard-container">
      <input className="inp-city" placeholder=" 🔍 Search for Places"></input>
      <img className="imgStyle" src={imagen} alt={"imagen"}></img>
      <p className="big-number">12 c</p>
      <p>Monday</p>
      <p>Mostly cloudy</p>
      <p>Rainy</p>
    </aside>
  );
}

export default SmallContainer;
