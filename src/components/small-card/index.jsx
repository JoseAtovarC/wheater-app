
import './styles.css'

function SmallCard(props) {
    return (
        <div className='small-card'>
            <p className='weather-day'>{props.smallTilte}</p>
            <img src={`http://openweathermap.org/img/wn/${props.smallIcon}@4x.png`} alt=""  className='icon' />
            <div className='temperature-container'>
                <p>{props.smallTemp}°</p>
                <span>{props.smallTempMin}°</span>
            </div>
        </div>
    )
}

export default SmallCard;