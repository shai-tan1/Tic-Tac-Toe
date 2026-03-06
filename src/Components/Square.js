import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      <span className={`symbol ${value === "X" ? "x" : "o"}`}>
        {value}
      </span>
    </button>
  );
};

export default Square;