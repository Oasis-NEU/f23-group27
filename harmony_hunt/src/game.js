import React, { useState, useRef } from 'react';
import './harmony-hunt-logo.png';
import './App.css';
import './style.css'
import Header from './Header'
import Hints from './Hints';

function App() { 
    

  const guessRef = useRef();
  const test_song = {
    title:"My Name is Mud",
    genre:"Alternative",
    artist:"Primus",
    year:"1993"
  }
  


  function handleGuess(e) {
    const guess = guessRef.current.value;
    if (guess.toUpperCase() === test_song.title.toUpperCase()) {
      
    }

    

  }
  
  return (
    <>
    <Header />
    <div id="all-boxes">
      <div id="guess-box"  className="hint">
        <input ref={guessRef}type="text" id="guess-input" placeholder="Enter Guess..."></input>
        <button id="guess-button" onClick={handleGuess}></button>
      </div>
      <Hints />
    </div>
    <p>{  }</p>
    </>
    
  );
}

export default App;