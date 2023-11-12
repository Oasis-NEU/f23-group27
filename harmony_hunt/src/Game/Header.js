import { useState, useRef } from 'react';
import './harmony-hunt-logo.png';
​
export default function Header({ gameMode }) {
    return (
    <>
    <div id="banner">
            <p id="game-mode">{ gameMode }</p>
            <img src={require("./harmony-hunt-logo.png")} id="logo"></img>
    </div>
    </>)
}