import './App.css';
<<<<<<< HEAD
import Fetch from './fetchPrueba';
=======
import SmallCard from './components/larger-container/small-container'
import LargeContainer from './components/larger-container/larger-container'
>>>>>>> 2af105aeec516a9b1be808c71b48fc28dfde8df6

function App() {
  return (
    <div className="container">
<<<<<<< HEAD
      
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
      
=======
      <SmallCard></SmallCard>
      <LargeContainer></LargeContainer>
>>>>>>> 2af105aeec516a9b1be808c71b48fc28dfde8df6
    </div>
  );
}

export default App;
