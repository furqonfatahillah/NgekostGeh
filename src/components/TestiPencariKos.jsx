import SubHeader from "./SubHeader";
import "./font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TestiPencariKos = (props) => {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        size="xl"
        style={{ color: "#eba41f" }}
      />
    );
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="card"
        style={{
          padding: "15px",
          width: "310px",
          height: "400px",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <div
          className="Header"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div className="image">
            <img
              src={props.img}
              alt=""
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </div>
          <div className="subHeader">
            <SubHeader
              title={props.title}
              colorH="black"
              colorP="#82868B"
              SizeH="16px"
              SizeP="13px"
              desk={props.desk}
            ></SubHeader>
          </div>
        </div>
        <div className="rate">{stars}</div>
        <div className="desk">
          <p
            style={{
              color: "#50555D",
              fontFamily: "Roboto",
              fontSize: "12px",
            }}
          >
            {props.deskripsi}
          </p>
        </div>
        <br />
        <div className="tgl">
          <p
            style={{
              color: "#82868B",
              fontFamily: "Roboto",
              fontSize: "10px",
            }}
          >
            {props.tgl}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestiPencariKos;
