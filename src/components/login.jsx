import "./font.css";
import SubHeader from "./SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHouseChimneyWindow,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import LoginPemilikKos from "./loginPemilikKos";
import LoginPencariKos from "./LoginPencariKos";

const Login = (props) => {
  const popup = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "99",
  };

  const [showPencariKosPopup, setShowPencariKosPopup] = useState(false);
  const [showPemilikKosPopup, setShowPemilikKosPopup] = useState(false);

  const togglePencariKosPopup = () => {
    setShowPencariKosPopup(!showPencariKosPopup);
  };

  const togglePemilikKosPopup = () => {
    setShowPemilikKosPopup(!showPemilikKosPopup);
  };

  const closeLoginPopup = () => {
    setShowPencariKosPopup(false);
    setShowPemilikKosPopup(false);
  };

  return (
    <>
      <div
        style={{
          color: "white",
          width: "357px",
          height: "312px",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
          borderRadius: "10px",
          padding: "30px",
          zIndex: "90",
          backgroundColor: "white",
        }}
      >
        <div
          className="close"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={props.closeLoginPopup}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#000000", width: "25px", height: "25px" }}
            />
          </button>
        </div>
        <br />
        <div className="Header">
          <SubHeader
            title="Masuk Ke Ngekost Geh"
            SizeH="20px"
            colorH="black"
          ></SubHeader>
          <p
            style={{
              color: "black",
              fontFamily: "Roboto",
              fontSize: "13px",
              marginTop: "5px",
              fontWeight: "400",
            }}
          >
            Saya ingin masuk sebagai
          </p>
        </div>
        <br />
        <div className="Button">
          <button
            onClick={togglePencariKosPopup}
            style={{
              backgroundColor: "#7e4333",
              color: "white",
              height: "55px",
              width: "100%",
              borderRadius: "10px",
              fontFamily: "Roboto",
              fontSize: "15px",
              fontWeight: "500",
              transition: "opacity 0.3s ease", // Animasi transisi
            }}
            className="custom-button" // Kelas tambahan untuk styling hover
          >
            <FontAwesomeIcon
              icon={faDoorOpen}
              style={{
                color: "#ffffff",
                width: "20px",
                height: "20px",
                marginRight: "10px",
              }}
            />
            Pencari Kos
          </button>
          {showPencariKosPopup && (
            <div style={popup}>
              <LoginPencariKos closeLoginPopup={closeLoginPopup} />
            </div>
          )}

          <button
            onClick={togglePemilikKosPopup}
            style={{
              backgroundColor: "#7e4333",
              color: "white",
              height: "55px",
              width: "100%",
              borderRadius: "10px",
              fontFamily: "Roboto",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "10px",
              transition: "opacity 0.3s ease",
            }}
            className="custom-button"
          >
            <FontAwesomeIcon
              icon={faHouseChimneyWindow}
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
                color: "#ffffff",
              }}
            />{" "}
            Pemilik Kos
          </button>
          {showPemilikKosPopup && (
            <div style={popup}>
              <LoginPemilikKos closeLoginPopup={closeLoginPopup} />
            </div>
          )}
        </div>
      </div>
      <style>
        {`
          .custom-button:hover {
            opacity: 0.9;
          }
        `}
      </style>
    </>
  );
};

export default Login;
