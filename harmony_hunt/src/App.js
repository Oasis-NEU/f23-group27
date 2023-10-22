import logo from './harmony-hunt-logo_480.png';
import connect_with_spotify from './connect-with-spotify.png';
import './App.css';
function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="App-logo" />
      <header className="App-header">
        <h1>Harmony Hunter</h1>
        <h4>BE IN TUNE WITH YOUR TUNES</h4>
        <button><img src={connect_with_spotify} className="Connect-with-spotify" width='250' height='50'/></button>
      </header>
    </div>
  );
}

export default App;
