import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./font.css";
import SubHeader from "./SubHeader";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpUlasan from "./popUpUlasan";

const Rekomendasi = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const popup = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "90",
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div style={popup}>
          <PopUpUlasan
            img={props.img}
            namaKos={props.title}
            daerah={props.desk}
            rate={props.rate}
            review={props.review}
            closePopup={closePopup}
          />
        </div>
      )}

      <div
        className="card"
        style={{
          width: "390px",
          height: "600px",
          borderRadius: "10px",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
        }}
        data-aos="flip-right"
        data-aos-duration="2500"
      >
        <div
          className="img"
          style={{
            width: "100%",
            height: "45%",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <img
            style={{ borderRadius: "10px 10px 0 0", width: "100%" }}
            src={props.img}
            alt="Kos"
          />
        </div>
        <div
          className="desk"
          style={{
            width: "100%",
            height: "50%",
          }}
        >
          <div
            className="rate"
            style={{
              width: "100%",
              height: "max-content",
              paddingInlineStart: "10px",
              display: "flex",
              marginTop: "8px",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              size="xl"
              style={{ color: "#eba41f" }}
            />
            <p
              style={{
                fontFamily: "Roboto",
                color: "#50555D",
                opacity: "0.9",
                fontWeight: "500",
              }}
            >
              {props.rate}
            </p>
            <p
              style={{
                fontFamily: "Roboto",
                color: "#50555D",
                opacity: "0.9",
                fontWeight: "500",
              }}
            >
              ({props.review} review)
            </p>
          </div>
          <br />
          <div
            className="deskripsi"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <SubHeader
              title={props.title}
              desk={props.desk}
              colorH={props.colorH}
              colorP={props.colorP}
              SizeH="20px"
              SizeP={props.SizeP}
            ></SubHeader>
            <br />
            <SubHeader
              title={props.harga}
              color="black"
              SizeH="20px"
            ></SubHeader>
            <br />
            <p
              style={{
                fontFamily: "Roboto",
                color: "#82868",
                opacity: "0.6",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {props.fasilitas}
            </p>
            <br />

            <div
              className="button"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              {props.namaButton === "Berikan Ulasan" ? (
                <button
                  onClick={togglePopup}
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #7E4333",
                    color: "#7E4333",
                    fontFamily: "Montserrat",
                    fontSize: "15px",
                    padding: "5px",
                    paddingInline: "15px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {props.namaButton}
                </button>
              ) : (
                <Link to={props.to}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "2px solid #7E4333",
                      color: "#7E4333",
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      padding: "5px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      height: "40px",
                      width: "160px",
                    }}
                  >
                    {props.namaButton}
                  </button>
                </Link>
              )}
              <Button name="Pesan" width="160px" height="40px"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
