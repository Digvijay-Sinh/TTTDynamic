import { useEffect, useState } from "react";

import "./App.css";
import Cell from "./Cell";
import GotoButton from "./GotoButton";

function Board({}) {
  const [winner, setWinner] = useState("");
  return (
    <>
      <div className="board flex justify-center flex-col items-center p-8">
        <h1 className="text-4xl text-white ">Tic Tac Toe</h1>
        {winner == "X" || winner == "O" ? (
          <h2 className="pt-12">Game Over and winner is {winner}</h2>
        ) : (
          <h2 className="pt-12">Next Turn : {turn == 0 ? "X" : "O"}</h2>
        )}
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
        <div className="gotoTurn flex flex-col">
          {history.map((board, index) => (
            <GotoButton
              key={index}
              bno={index}
              onGotoMove={() => {
                // setWinnner("");
                setCurrBoard(board);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Board;
