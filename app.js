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


  const clearTheBoard = function (DOMboard) {
    /*  First reduce the boxRow from 3x3 matrix to 3x1 array of booleans.
     Row containing 0 will return false.
     If there is no 0 on the Matrix => [true,true,true]
    \![true,true,true].includes(false) === true;
    */
    let boardFull = !board
      .map((boardRow) => !boardRow.includes(0))
      .includes(false);
    if (boardFull) {
      alert("it's a draw, GO AGANE!");
      // Using setTimeout to delay wiping out the board
      setTimeout(() => {
        var board = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
        for (let i = 0; i < DOMboard.length; ++i) {
          DOMboard[i].innerText = "";
        }
      }, 0);
    }
  };
};
