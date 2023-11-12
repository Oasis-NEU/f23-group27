import React, { useState, useRef } from 'react';
import './harmony-hunt-logo.png';
import './App.css';
import './style.css'
import Header from './Header'
import Hints from './Hints';

function App() { 
    

  const guessRef = useRef();
  
  const[gameState, setGameState] = useState(1);
  const [game, setGame] = useState({genre:"Genre", year:"Year", artist:"Artist", album:"Album", snippet:"Play Snippet"});

  const test_song = {
    title:"My Name is Mud",
    genre:"Alternative",
    year:"1993",
    artist:"Primus",
    album:"Pork Soda",
    snippet:"snippet played"
  }

  function handleGuess(e) {
    const guess = guessRef.current.value;
    setGameState(gameState + 1);
    if (gameState != 6) {
      if (guess.toUpperCase() === test_song.title.toUpperCase()) {
        setGameState(7);
        setGame({genre:test_song.genre, year:test_song.year, artist:test_song.artist, album:test_song.album, snippet:test_song.snippet});
      } else {
        switch (gameState) {
          case 1:
            setGame({genre:test_song.genre, year:game.year, artist: game.artist, album: game.album, snippet: game.snippet});
            break;
          case 2:
            setGame({genre:game.genre, year:test_song.year, artist: game.artist, album: game.album, snippet: game.snippet});
            break;
          case 3:
            setGame({genre:game.genre, year:game.year, artist: test_song.artist, album: game.album, snippet: game.snippet})
            break;
          case 4:
            setGame({genre:game.genre, year:game.year, artist: game.artist, album: test_song.album, snippet: game.snippet});
            break;
          case 5:
            setGame({genre:game.genre, year:game.year, artist: game.artist, album: game.album, snippet: test_song.snippet});
            break;
          case 6:
            setGame({genre:test_song.genre, year:test_song.year, artist:test_song.artist, album:test_song.album, snippet:test_song.snippet});
        }
      }
    }
    guessRef.current.value = null;
  }
  
  return (
    <>
    <Header gameMode={ gameState }/>
    <div id="all-boxes">
      <div id="guess-box"  className="hint">
        <input ref={guessRef}type="text" id="guess-input" placeholder="Enter Guess..."></input>
        <button id="guess-button" onClick={handleGuess} disabled={(gameState === 6)||(gameState === 7)}></button>
      </div>
      <Hints hint={{ genre:game.genre, year:game.year, artist:game.artist, album:game.album, snippet:game.snippet}}/>
    </div>
    </>
  );
}

export default App;