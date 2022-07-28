import Cards from './components/Cards';
import Card from './components/Cards'

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>Gra w MEMO</h1>
      <img src="/img/dlaH.png" className='hubi'/>
      </div>
      <div className="container">
        <Cards/>

      </div>
      
    </div>
  );
}

export default App;
