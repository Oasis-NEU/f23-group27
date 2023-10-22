import logo from './spotify-2.svg';
import mg from './magnifying-glass.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <img src={mg} className="Magnifying-glass" />
        <h1>Harmony Hunter</h1>
        <button>Connect to Spotify</button>
      </header>
    </div>
  );
}

export default App;
