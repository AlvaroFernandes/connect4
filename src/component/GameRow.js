import React from "react";
import GameColumn from "./GameColumn";

const GameRow = (props) => {
  const { row, updateBoard } = props;

  return (
    <div className="row">
      {row.columns.map((columns, i) => (
        <GameColumn
          key={i}
          columnIndex={i}
          columns={columns}
          updateBoard={updateBoard}
        />
      ))}
    </div>
  );
};

export default GameRow;
