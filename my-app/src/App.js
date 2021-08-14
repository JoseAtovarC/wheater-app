import './App.css';
import SmallContainer from './components/small-container'
import LargeContainer from './components/larger-container'
import Fetch from './fetchPrueba';

function App() {
  return (
    <div className="container">
      <div className="weather-container">
        <SmallContainer weatherNumber="12" day="Monday" degree="c" time="13:00" clouds="Mostly Cloudy" rain="Rain - 30%"></SmallContainer>
        <LargeContainer></LargeContainer>
      </div>
      <Fetch></Fetch>
    </div>
  );
}

export default App;
