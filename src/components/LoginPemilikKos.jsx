import "./font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SubHeader from "./SubHeader";
import React from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LoginPemilikKos = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
      data-aos="zoom-in-left"
      data-aos-duration="1000"
        style={{
          color: "white",
          width: "545px",
          height: "600px",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
          borderRadius: "10px",
          padding: "30px",
          backgroundColor: "white",
        }}
      >
        <div className="back">
          <button onClick={props.closeLoginPopup}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="xl"
              style={{ color: "#000000" }}
            />
          </button>
        </div>
        <br />
        <div
          className="Header"
          style={{
            width: "100%",
          }}
        >
          <SubHeader
            title="Masuk Akun Pemilik Kos"
            SizeH="24px"
            colorH="black"
          ></SubHeader>
        </div>
        <div className="daftar">
          <p
            style={{
              color: "#82868B",
              fontFamily: "Roboto",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            Belum Punya Akun?
            <Link
              to="/RegistrasiPemilikKos"
              style={{ color: "#7E4333", fontFamily: "Roboto" }}
            >
              {" "}
              Daftar disini
            </Link>
          </p>
        </div>
        <br />
        <br />
        <div className="formLoginPemilikKos">
          <SubHeader title="Email" colorH="black" SizeH="14px"></SubHeader>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan alamat email"
            style={{
              borderRadius: "5px",
              padding: "5px",
              width: "100%",
              marginTop: "5px",
              color: "black",
            }}
          ></input>
          <br />
          <br />
          <SubHeader title="Kata Sandi" colorH="black" SizeH="14px"></SubHeader>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Masukkan kata sandi"
            style={{
              color: "black",
              borderRadius: "5px",
              padding: "5px",
              width: "100%",
              marginTop: "5px",
            }}
          ></input>
        </div>
        <div style={{ marginTop: "30px" }}></div>
        <Link
          style={{
            color: "#7E4333",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: "500",
            marginTop: "30px",
          }}
        >
          Lupa kata sandi?
        </Link>
        <div className="login" style={{ marginTop: "10px" }}>
          <Button name="Masuk" width="100%" height="45px"></Button>
        </div>
      </div>
    </>
  );
};

export default LoginPemilikKos;
