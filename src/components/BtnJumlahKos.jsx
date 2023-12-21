import React, { useState } from "react";
import "../components/font.css";

const BtnJumlahKos = ({ text, onClick }) => {
  const [buttonColor, setButtonColor] = useState("#D9D9D9");
  const [textColor, setTextColor] = useState("#82868B");

  const handleClick = () => {
    if (buttonColor === "#7E4333") {
      setButtonColor("#D9D9D9");
      setTextColor("#82868B");
    } else {
      setButtonColor("#7E4333");
      setTextColor("white");
    }
  };

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: textColor,
        width: "60px",
        height: "50px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: "500",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default BtnJumlahKos;
