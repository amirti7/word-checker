import React from "react";
import "../styles/Keyboard.css";

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

function Keyboard({ actionListener, disabled }) {
  return (
    <div className="keyboard">
      {KEYS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className="key-btn"
              onClick={() => actionListener.emit("key", key)}
              disabled={disabled}
            >
              {key === "BACKSPACE" ? "\u232B" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard; 