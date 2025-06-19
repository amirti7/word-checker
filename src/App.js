import React, { useState, useRef, useEffect } from "react";
import Squares from "./components/Squares";
import Keyboard from "./components/Keyboard";
import { checkWord } from "./utils/dictionary";
import MyActionListener from "./utils/MyActionListener";
import "./styles/App.css";

const WORD_LENGTH = 5;

function App() {
  const [letters, setLetters] = useState([]);
  const [result, setResult] = useState("none");
  const [loading, setLoading] = useState(false);
  const actionListener = useRef(new MyActionListener());

  useEffect(() => {
    const listener = actionListener.current;
    const handler = async (key) => {
      if (loading) return;
      if (/^[A-Z]$/.test(key)) {
        if (letters.length < WORD_LENGTH) {
          setLetters((prev) => [...prev, key]);
          setResult("none");
        }
      } else if (key === "BACKSPACE") {
        if (letters.length > 0) {
          setLetters((prev) => prev.slice(0, -1));
          setResult("none");
        }
      } else if (key === "ENTER") {
        if (letters.length === WORD_LENGTH) {
          setLoading(true);
          const word = letters.join("").toLowerCase();
          const exists = await checkWord(word);
          setResult(exists ? "success" : "fail");
          setLoading(false);
        } else {
          setResult("fail");
        }
      }
    };
    listener.registerListener("key", handler);
    return () => listener.removeListener("key");
  }, [letters, loading]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Word Checker</h1>
      </header>
      <Squares letters={letters} result={result} />
      <div className="loader-area">
        {loading && <div className="loader">Checking...</div>}
      </div>
      <Keyboard actionListener={actionListener.current} disabled={loading} />
    </div>
  );
}

export default App;
