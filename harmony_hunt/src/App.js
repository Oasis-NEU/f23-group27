import logo from './harmony-hunt-logo_480.png';
import connect_with_spotify from './connect-with-spotify.png';
import './App.css';
function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="App-logo" />
      <header className="App-header">
        <h1 className="flashing-text increase-size">Harmony Hunter</h1>
        <h1>
          <span>BE</span> <span>IN</span> <span>TUNE</span> <span>WITH</span> <span>YOUR</span> <span>TUNES</span>
        </h1>
        <button>
          <img src={connect_with_spotify} className="Connect-with-spotify" width="250" height="50" />
        </button>
      </header>
    </div>
  );
}

export default App;
