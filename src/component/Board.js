import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import GameRow from "./GameRow";
import {
  checkDraw,
  checkWinHorizontal,
  checkWinVertical,
  checkWinDiagonalR,
  checkWinDiagonalL,
} from "./GameStatus";

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
    let rowIndex = 0;
    let areColumnsFilled = true;
    for (let i = 5; i >= 0; i--) {
      let columnPlayer = boardCopy.rows[i].columns[columnIndex].player;

      if (!columnPlayer) {
        boardCopy.rows[i].columns[columnIndex].player = currentPlayer;
        rowIndex = i;
        areColumnsFilled = false;
        break;
      }
    }
    if (!areColumnsFilled) {
      setBoard(boardCopy);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
    if (gameStatus(rowIndex, columnIndex, boardCopy)) {
      setBoard(initialBoard);
      let playerName = "";
      if (currentPlayer === 1) {
        playerName = "User";
      }
      if (currentPlayer === 2) {
        playerName = "Computer";
      }
      toast(`Player ${playerName} wins`);
      setCurrentPlayer(1);
    } else {
      if (checkDraw(boardCopy)) {
        setBoard(initialBoard);
        toast("Draw");
        setCurrentPlayer(1);
      }
    }
  };

  const gameStatus = (rowIndex, columnIndex, board) => {
    return (
      checkWinHorizontal(rowIndex, columnIndex, board) ||
      checkWinDiagonalR(rowIndex, columnIndex, board) ||
      checkWinDiagonalL(rowIndex, columnIndex, board) ||
      checkWinVertical(rowIndex, columnIndex, board)
    );
  };

  useEffect(() => {
    if (currentPlayer === 2) {
      const CPUMove = Math.floor(Math.random() * 6 + 1);
      updateBoard(CPUMove);
    }
  }, [currentPlayer, updateBoard]);

  return (
    <div>
      <ToastContainer />
      {board.rows.map((row, i) => (
        <GameRow key={i} row={row} updateBoard={updateBoard} />
      ))}
    </div>
  );
};

export default Board;
