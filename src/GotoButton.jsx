import React from "react";

function GotoButton({ bno, onGotoMove }) {
  return (
    <button onClick={onGotoMove} className="border-white border-4 m-3">
      Goto move no: {bno}
    </button>
  );
}

export default GotoButton;
