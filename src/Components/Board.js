import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = ({ reset, setGameOver }) => {
  const initialState = Array(9).fill(null);

  const [state, setState] = useState(initialState);
  const [isXTurn, setIsXTurn] = useState(true);

  useEffect(() => {
    setState(initialState);
    setIsXTurn(true);
  }, [reset]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return null;
  };

  const winner = checkWinner();
  const isDraw = !winner && state.every((box) => box !== null);

  useEffect(() => {
    if (winner || isDraw) {
      setGameOver(true);
    }
  }, [winner, isDraw]);

  const handleClick = (index) => {
    if (state[index] || winner || isDraw) return;

    const copy = [...state];
    copy[index] = isXTurn ? "X" : "O";

    setState(copy);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {winner ? (
        <h2 className="winner">Player {winner == "X" ? 1 : 2} Wins 🎉</h2>
      ) : isDraw ? (
        <h2 className="draw">Game Draw 🤝</h2>
      ) : (
        <h2 className="turn">
          Player <span>{isXTurn ? "1 (X)" : "2 (O)"}</span> Turn
        </h2>
      )}

      <div className="board-row">
        <Square value={state[0]} onClick={() => handleClick(0)} />
        <Square value={state[1]} onClick={() => handleClick(1)} />
        <Square value={state[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={state[3]} onClick={() => handleClick(3)} />
        <Square value={state[4]} onClick={() => handleClick(4)} />
        <Square value={state[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={state[6]} onClick={() => handleClick(6)} />
        <Square value={state[7]} onClick={() => handleClick(7)} />
        <Square value={state[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
