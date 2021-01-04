/*
event handlers to change players turn

booleans to determine each elements value (x || o)


check columns, rows, and maj/min diagonals to check for a victor
*/

var boardEvents = function () {
  let p1Turn = true;

  var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  var boxes = document.getElementsByClassName("board");
  let winCounter = {
    X: 0,
    O: 0,
  };
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      turn.call(this);
      marker.call(this);
    });
  }
  // helpers
  let turn = function () {
    if (this.innerHTML === "") {
      p1Turn = !p1Turn;
    }
    let turnDetect = document.getElementsByClassName("turnDetect")[0];
    if (p1Turn) {
      turnDetect.innerText = "P1 turn";
    } else {
      turnDetect.innerText = "P2 turn";
    }
  };

  const marker = function () {
    // debugger;
    let boardRow = parseInt(this.attributes.row.value);
    let boardCol = parseInt(this.attributes.col.value);

    if (!p1Turn) {
      board[boardRow][boardCol] = 1;
      this.innerText = "X";
    } else {
      board[boardRow][boardCol] = 2;
      this.innerText = "O";
    }
  };

  const clearTheBoard = function (DOMboard) {};
};
