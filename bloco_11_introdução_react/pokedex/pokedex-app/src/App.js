import './App.css';
// import Pokemon from './Pokemon'
// import informations from './data';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <div className='pokedexContainer'>
        <Pokedex />
        </div>
      </header>
    </div>
  );
}

export default App;
