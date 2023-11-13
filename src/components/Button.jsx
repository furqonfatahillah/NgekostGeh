import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const BtnStyle = {
    backgroundColor: "#7e4333",
    border: "none",
    borderRadius: "5px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "white",
    fontSize: "14px",
    height: "42px",
    width: props.width,
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={isHovered ? "hovered" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={BtnStyle}
    >
      {props.name}
    </button>
  );
};

export default Button;
