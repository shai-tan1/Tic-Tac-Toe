import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Board from "./Components/Board";

const App = () => {
  const [reset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleReset = () => {
    setReset(!reset);
    setGameOver(false);
  };

  return (
    <>
      <div id="title">
        <span>Tic Tac Toe</span> Game
      </div>

      <button className="reset" onClick={handleReset}>
        {gameOver ? "New Game" : "Reset"}
      </button>

      <Board reset={reset} setGameOver={setGameOver} />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
