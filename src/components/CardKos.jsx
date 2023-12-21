import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./font.css";
import SubHeader from "./SubHeader";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CardKos = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
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
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <Link to="/EditKos">
                <Button name="Edit Kos" width="160px" height="40px"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardKos;
