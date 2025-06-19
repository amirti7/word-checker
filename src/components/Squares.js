import React from "react";
import "../styles/Squares.css";

function Squares({ letters, result }) {
  return (
    <div className="squares">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`square ${result === "success" ? "green" : result === "fail" ? "red" : ""}`}
        >
          {letters[i] || ""}
        </div>
      ))}
    </div>
  );
}

export default Squares; 