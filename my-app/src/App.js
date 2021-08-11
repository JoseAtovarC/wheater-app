import imagen from '../src/assets/foto.png'
import './App.css';
import Fetch from './fetchPrueba';

function App() {
  return (
    <div className="container">
      
      <aside className="sideCard-container">
        <input className="inp-city" placeholder=" 🔍 Search for Places"></input>
        <img className="imgStyle" src={imagen} alt={"imagen"}></img>
        <p className="big-number">12 c</p>
        <p>Monday</p>
        <p>Mostly cloudy</p>
        <p>Rainy</p>
      </aside>

      <section className="card-container">

        <div className="card-header">
        <h2>Week <hr></hr></h2>

        <div className="btn-container">
        <button className="btn-c">C</button>
        <button className="btn-f">F</button>
        </div>

        </div>
        <p> ksdnwlkfnñkadwlfñlkadjfñlkdsjflkdjlkdj´lkdsjg´lkdsjg´lkdsjg´lkdsjgkl´dsjgjgj </p>
      <h2>Today's Highlights</h2>
      <Fetch></Fetch>
      </section>
      
    </div>
  );
}

export default App;
