import './App.css';
import SmallCard from './components/larger-container/small-container'
import LargeContainer from './components/larger-container/larger-container'

function App() {
  return (
    <div className="container">
      <SmallCard></SmallCard>
      <LargeContainer></LargeContainer>
    </div>
  );
}

export default App;
