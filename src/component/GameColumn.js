import React from "react";

const GameColumn = (props) => {
  const columnIndex = props.columnIndex;
  const updateBoard = props.updateBoard;
  let pieceStatus = "free";

  if (columnIndex.player === 1) {
    pieceStatus = "USER";
  } else if (columnIndex.player === 2) {
    pieceStatus = "CPU";
  }

  return (
    <div>
      <div className="piece" onClick={() => updateBoard(columnIndex)}>
        <div className={[pieceStatus, "circle"].join(" ")}></div>
      </div>
    </div>
  );
};

export default GameColumn;
