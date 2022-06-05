import React from "react";
import GameColumn from "./GameColumn";

const GameRow = (props) => {
  const row = props.row;
  const updateBoard = props.updateBoard;

  return (
    <div className="row">
      {row.columns.map((columns, i) => (
        <GameColumn key={i} columnIndex={i} updateBoard={updateBoard} />
      ))}
    </div>
  );
};

export default GameRow;
