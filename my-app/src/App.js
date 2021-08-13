import './App.css';
import SmallContainer from './components/small-container'
import LargeContainer from './components/larger-container'
import Fetch from './fetchPrueba';

function App() {
  return (
    <div className="container">
      <div className="weather-container">
        <SmallContainer></SmallContainer>
        <LargeContainer></LargeContainer>
      </div>
      <Fetch></Fetch>
    </div>
  );
}

export default App;
