import React, { useEffect, useState } from "react";

const Cell = ({ value, onClick }) => {
  const [bgColor, setBgColor] = useState("transperent");
  useEffect(() => {
    if (value === 1) {
      setBgColor("red");
    }
    if (value === 2) {
      setBgColor("blue");
    }
    if (value === 0) {
      setBgColor("transparent");
    }
  }, [value]);

  return (
    <td style={{ backgroundColor: bgColor }} onClick={onClick}>
      {value === 1 ? "X" : value === 2 ? "O" : " "}
    </td>
  );
};

export default Cell;
