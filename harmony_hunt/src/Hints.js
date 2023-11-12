import { useState, useRef } from 'react';

export default function Hints({ hint }) {
    return(
        <div id="hint-and-guess-boxes">
            <div id="album-cover">{hint.album}</div>
            <div id="hint-boxes">
            <div className="hint">
                <p id="genre" className="hint-text">{hint.genre}</p>
            </div>
            <div className="hint">
                <p id="year" className="hint-text">{hint.year}</p>
            </div>
            <div className="hint">
                <p id="artist" className="hint-text">{hint.artist}</p>
            </div>
            <div id="snippet" className="hint">
                <button id="snippet-button">
                    <div id="play-button"></div>
                </button>
                <p id="snippet-text" class="hint-text">{hint.snippet}</p>
            </div>
            </div>
        </div>
    )
}