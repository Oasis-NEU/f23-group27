import './App.css';
import LoginPage from './Login/LoginPage';
import { Router, Routes, Route } from 'react-router-dom';
import Game from './Game/Game'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
