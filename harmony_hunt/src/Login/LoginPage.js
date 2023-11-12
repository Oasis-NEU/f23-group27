import logo from './harmony-hunt-logo_480.png';
import '../App.css';
import LoginButton from './LoginButton'

function LoginPage(){
    return (
        <div className="App">
          <img src={logo} alt="Logo" className="App-logo" />
          <header className="App-header">
            <h1 className="flashing-text increase-size">Harmony Hunter</h1>
            <h1>
              <span>BE</span> <span>IN</span> <span>TUNE</span> <span>WITH</span> <span>YOUR</span> <span>TUNES</span>
            </h1>
            <LoginButton />
          </header>
        </div>
      );
}

export default LoginPage;