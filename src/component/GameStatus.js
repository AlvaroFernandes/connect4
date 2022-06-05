export const checkDraw = (board) => {
  let isBoardCompleted =
    board.rows.filter(
      (row) => row.columns.filter((column) => column.player === null).length > 0
    ).length > 0
      ? false
      : true;
  return isBoardCompleted;
};

export const checkWinHorizontal = (r, c, b) => {
  let pieces = 0;
  let row = b.rows[r];
  for (let i = 0; i < 7; i++) {
    if (row.columns[i].player === row.columns[c].player) {
      pieces++;
      if (pieces >= 4) {
        return true;
      }
    } else {
      pieces = 0;
    }
  }
  return false;
};

export const checkWinVertical = (r, c, b) => {
  let row = b.rows[r];
  let pieces = 0;

  for (let i = 0; i < 6; i++) {
    if (b.rows[i].columns[c].player === row.columns[c].player) {
      pieces++;
      if (pieces >= 4) {
        return true;
      }
    } else {
      pieces = 0;
    }
  }
  return false;
};

export const checkWinDiagonalR = (r, c, b) => {
  let pieces = 0;
  let indexDiff = r - c;
  let startRow = r;
  let startCol = c;

  if (indexDiff > 0) {
    startRow = indexDiff;
  } else if (indexDiff !== 0) {
    startCol = Math.abs(indexDiff);
  }

  for (let i = 0; i < 6; i++) {
    let column = b.rows[startRow + i]?.columns[startCol + i];
    if (column) {
      if (column.player === b.rows[r].columns[c].player) {
        pieces++;
        if (pieces >= 4) {
          return true;
        }
      } else {
        pieces = 0;
      }
    }
  }
  return false;
};

export const checkWinDiagonalL = (r, c, b) => {
  let startCol = c;
  let startRow = r;
  let pieces = 0;

  for (let i = 0; i < 6; i++) {
    let column = b.rows[r - i]?.columns[c + i];
    if (column) {
      startCol = c + i;
      startRow = r - i;
    } else {
      break;
    }
  }
  for (let j = 0; j < 6; j++) {
    let column = b.rows[startRow + j]?.columns[startCol - j];
    if (column) {
      if (column.player === b.rows[r].columns[c].player) {
        pieces++;
        if (pieces >= 4) {
          return true;
        }
      } else {
        pieces = 0;
      }
    }
  }
  return false;
};
