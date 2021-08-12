import './App.css';
import SmallContainer from './components/small-container'
import LargeContainer from './components/larger-container'

function App() {
  return (
    <div className="container">
      <div className="weather-container">
        <SmallContainer></SmallContainer>
        <LargeContainer></LargeContainer>
      </div>
    </div>
  );
}

export default App;
