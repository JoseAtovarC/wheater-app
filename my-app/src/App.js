import './App.css';
import SmallCard from './components/larger-container/small-container'
import LargeContainer from './components/larger-container/larger-container'
import Fetch from './fetchPrueba';

function App() {
  return (
    <div className="container">
      <SmallCard></SmallCard>
      <LargeContainer></LargeContainer>
      <Fetch></Fetch>

    </div>
  );
}

export default App;
