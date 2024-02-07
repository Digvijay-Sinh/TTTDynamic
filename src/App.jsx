import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cell from "./Cell";
import GotoButton from "./GotoButton";
import Board from "./Board";

function App() {
  const [gameState, setGameState] = useState("start");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [noOfSquare, setNoOfSquare] = useState(3);
  const changeHandler = (event) => {
    setPlayer1(event.target.value);
  };
  const changeHandler1 = (event) => {
    setPlayer2(event.target.value);
  };
  const handleNoOfSquare = (event) => {
    setNoOfSquare(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNoOfSquare(noOfSquare);
    setGameState("playing");
  };
  const goToHome = () => {
    setGameState("start");
  };

  return (
    <>
      <div className="board flex justify-center flex-col items-center p-8">
        <h1 className="text-4xl text-white ">Tic Tac Toe</h1>
        {gameState === "start" && (
          <div style={{ color: "black" }}>
            <form onSubmit={handleSubmit}>
              <input
                className="m-3"
                placeholder="Player 1"
                type="text"
                name="name"
                id="name"
                value={player1}
                onChange={changeHandler}
              />
              <input
                className="m-3"
                type="text"
                name="name2"
                id="name2"
                value={player2}
                onChange={changeHandler1}
              />

              <input
                className="ml-5"
                max={8}
                min={2}
                type="number"
                name="nn"
                onChange={handleNoOfSquare}
                id="nn"
                value={noOfSquare}
              />
              <br />
              <button className="border-2 border-sky-500 mt-6" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        )}
        {gameState === "playing" && (
          <>
            <Board
              player1={player1}
              player2={player2}
              noOfSquare={noOfSquare}
              goToHome={goToHome}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
