import React, { useState } from "react";
import GameRow from "./GameRow";

const Board = () => {
  const constants = {
    row: 6,
    columns: 7,
  };
  const initialBoard = {
    rows: Array.from({ length: constants.row }, (i) => ({
      columns: Array.from({ length: constants.columns }, (i) => ({
        player: null,
      })),
    })),
  };
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const updateBoard = (columnIndex) => {
    let boardCopy = board;
    let areColumnsFilled = true;
    console.log("click");
    console.log(columnIndex);
    for (let i = 5; i >= 0; i--) {
      let columnPlayer = boardCopy.rows[i].columns[columnIndex].player;
      console.log(columnPlayer);
      if (!columnPlayer) {
        boardCopy.rows[i].columns[columnIndex].player = currentPlayer;
        areColumnsFilled = false;
        break;
      }
    }
    setBoard(boardCopy);
    if (!areColumnsFilled) {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  return (
    <div>
      <button className="button">New Game</button>
      {board.rows.map((row, i) => (
        <GameRow key={i} row={row} updateBoard={updateBoard} />
      ))}
    </div>
  );
};

export default Board;
