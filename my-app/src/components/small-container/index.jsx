import "./styles.css";
import imagen from "../../assets/foto.png";
import icon from "../../assets/weather-icon-placeholder.png";
// import { MyLocation } from "@material-ui/icons";
function SmallContainer(props) {
  return (
    <aside className="sideCard-container">
      <div className='top-container'>
        <div className="search-bar">
          <span class="material-icons search-icon">search</span>
          <input className="inp-city" placeholder="Search for places..."></input>
        </div>
        <span class="material-icons location-icon">gps_not_fixed</span>
      </div>
      {/* <MyLocation></MyLocation> */}
      <img className="imgStyle" src={icon} alt={"imagen"}></img>
      <p className="big-number">
        {props.weatherNumber}°
        <sup>{props.degree}</sup>
      </p>
      <p className="day">
        {props.day}, <span className="time">{props.time}</span>
      </p>
      <hr className='hr' />
      <div className='clouds'>
        <div className='icon-placeholder' />
        <p className="info">{props.clouds}</p>
      </div>
      <div className='rain'>
        <div className='icon-placeholder' />
        <p className="info">{props.rain}</p>
      </div>
    </aside>
  );
}

export default SmallContainer;
