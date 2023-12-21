import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  const BtnStyle = {
    backgroundColor: "#7e4333",
    border: "none",
    borderRadius: "10px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "white",
    fontSize: "14px",
    height: props.height,
    width: props.width,
  };

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(props.path);
  };

  return (
    <button
      className={isHovered ? "hovered" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={BtnStyle}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
