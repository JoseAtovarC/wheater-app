import icon from '../../assets/weather-icon-placeholder.png'
import './styles.css'

function SmallCard() {
    return (
        <div className='small-card'>
            <p className='weather-day'>Sun</p>
            <img src={icon} alt="weather-icon" className='icon' />
            <div className='temperature-container'>
                <p>15°</p>
                <span>-3°</span>
            </div>
        </div>
    )
}

export default SmallCard;