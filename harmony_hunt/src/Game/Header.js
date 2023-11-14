import { useState, useRef } from 'react';
import '../Login/harmony-hunt-logo_480.png';

export default function Header({ gameMode }) {
    return (
    <>
    <div id="banner">
            <p id="game-mode">{ gameMode }</p>
            <img src={require("../Login/harmony-hunt-logo_480.png")} id="logo"></img>
    </div>
    </>)
}