import { useEffect, useState } from "react";

import "./App.css";
import Cell from "./Cell";
import GotoButton from "./GotoButton";

function Board({ player1, player2, noOfSquare, goToHome }) {
  var initArray = [];
  for (var ix = 0; ix < noOfSquare; ix++) {
    initArray[ix] = [];
    for (var jx = 0; jx < noOfSquare; jx++) {
      initArray[ix][jx] = 0;
    }
  }
  const [currBoard, setCurrBoard] = useState(initArray);

  const [turn, setTurn] = useState(0);
  const [winner, setWinnner] = useState("Noone");

  const checkWinner = (i, j) => {
    var cond1winner1 = true;
    var cond2winner1 = true;
    var cond1winner2 = true;
    var cond2winner2 = true;
    var condDiagonal1Winner1 = true;
    var condDiagonal1Winner2 = true;
    var condDiagonal2Winner1 = true;
    var condDiagonal2Winner2 = true;
    for (let ind = 0; ind < noOfSquare; ind++) {
      cond1winner1 = cond1winner1 && currBoard[i][ind] == 1;
      cond2winner1 = cond2winner1 && currBoard[ind][j] == 1;
      cond1winner2 = cond1winner2 && currBoard[i][ind] == 2;
      cond2winner2 = cond2winner2 && currBoard[ind][j] == 2;
      condDiagonal1Winner1 = condDiagonal1Winner1 && currBoard[ind][ind] == 1;
      condDiagonal2Winner1 =
        condDiagonal2Winner1 && currBoard[ind][noOfSquare - 1 - ind] == 1;
      condDiagonal1Winner2 = condDiagonal1Winner2 && currBoard[ind][ind] == 2;
      condDiagonal2Winner2 =
        condDiagonal2Winner2 && currBoard[ind][noOfSquare - 1 - ind] == 2;
    }
    if (
      cond1winner1 ||
      cond2winner1 ||
      condDiagonal1Winner1 ||
      condDiagonal2Winner1
    ) {
      setWinnner(player1);
    }
    if (
      cond1winner2 ||
      cond2winner2 ||
      condDiagonal1Winner2 ||
      condDiagonal2Winner2
    ) {
      setWinnner(player2);
    }
  };
  const takeTurn = (i, j) => {
    if (winner == player1 || winner == player2) {
      return;
    }

    if (currBoard[i][j] == 0) {
      if (turn == 0) {
        console.log(currBoard);
        const tempArray = [...currBoard];
        tempArray[i][j] = 1;
        setCurrBoard(tempArray);
        // let newArray = tempArray.map((row) => [...row]);

        // historyUpdate(newArray);

        // console.log(history);

        setTurn(1);
      }
      if (turn == 1) {
        const tempArray = [...currBoard];
        tempArray[i][j] = 2;
        // let newArray = tempArray.map((row) => [...row]);

        setCurrBoard(tempArray);
        // historyUpdate(newArray);
        // console.log(history);

        setTurn(0);
      }
      console.log(currBoard);

      checkWinner(i, j);
      if (checkDraw()) {
        setWinnner("draw");
        return;
      }
    }
  };
  const handleReset = () => {
    setCurrBoard(initArray);
    setWinnner("nonone");
    setTurn(0);
    setWinnner("noone");
  };
  const checkDraw = () => {
    if (winner != player1 && winner != player2) {
      for (var ix = 0; ix < noOfSquare; ix++) {
        for (var jx = 0; jx < noOfSquare; jx++) {
          if (currBoard[ix][jx] === 0) {
            return false;
          }
        }
      }
      return true;
    }

    return false;
  };

  return (
    <>
      <div className="board flex justify-center flex-col items-center p-8">
        {(winner == player1 || winner == player2) && (
          <h2 className="pt-12">
            Game Over and winner is{" "}
            <span
              style={{
                backgroundColor: `${winner === player1 ? "red" : "blue"}`,
              }}
            >
              {" "}
              {winner}
            </span>
          </h2>
        )}
        {winner != "draw" && winner != player1 && winner != player2 && (
          <h2
            style={{
              backgroundColor: `${turn === 0 ? "red" : "blue"}`,
            }}
            className="mt-12 m-3 p-3"
          >
            Next Turn : {turn == 0 ? player1 : player2}
          </h2>
        )}
        {winner == "draw" && (
          <>
            {" "}
            <h2 className="pt-12">Game is draw</h2>
            <button
              className="m-3 border-2 border-white mt-6"
              onClick={handleReset}
            >
              Replay
            </button>
          </>
        )}
        <div></div>
        <table className=" border ">
          {currBoard.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={j}
                  value={currBoard[i][j]}
                  onClick={() => takeTurn(i, j)}
                />
              ))}
            </tr>
          ))}
        </table>
        <div>
          {(winner == player1 || winner == player2) && (
            <button
              className="m-3 border-2 border-white mt-6"
              onClick={handleReset}
            >
              Reset Game
            </button>
          )}
          <button onClick={goToHome} className="m-3 border-2 border-white mt-6">
            Change Game
          </button>
        </div>
        {/* <div className="gotoTurn flex flex-col">
          {history.map((board, index) => (
            <GotoButton
              key={index}
              bno={index}
              onGotoMove={() => {
                // setWinnner("");
                // setCurrBoard(board);
              }}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Board;
