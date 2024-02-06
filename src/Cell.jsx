import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <td onClick={onClick}>{value === 1 ? "X" : value === 2 ? "O" : " "}</td>
  );
};

export default Cell;
