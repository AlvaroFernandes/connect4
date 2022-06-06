import React from "react";

const GameColumn = (props) => {
  const { columnIndex, updateBoard, columns } = props;
  let pieceStatus = "free";

  if (columns.player === 1) {
    pieceStatus = "USER";
  } else if (columns.player === 2) {
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
