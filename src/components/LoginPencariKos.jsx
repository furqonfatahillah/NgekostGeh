import "./font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SubHeader from "./SubHeader";
import React from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import Button from "./Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LoginPencariKos = (props) => {
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
          height: "650px",
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
            title="Masuk Akun Pencari Kos"
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
              to="/RegistrasiPencariKos"
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
        <br />
        <br />
        <div>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            Atau masuk dengan
          </p>
        </div>
        <div className="loginGoogle">
          <button
            style={{
              backgroundColor: "#DB4437",
              borderRadius: "10px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "bold",
              width: "100%",
              height: "45px",
              transition: "opacity 0.3s ease", // Animasi transisi
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")} // Mengubah opacity saat hover
            onMouseOut={(e) => (e.target.style.opacity = "1")} // Mengembalikan opacity ke nilai semula
          >
            <FontAwesomeIcon
              icon={faGoogle}
              size="xl"
              style={{ color: "#ffffff", marginRight: "10px" }}
            />
            Google
          </button>
        </div>
        <div className="loginFb" style={{ marginTop: "15px" }}>
          <button
            style={{
              backgroundColor: "#4267B2",
              borderRadius: "10px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "bold",
              width: "100%",
              height: "45px",
              transition: "opacity 0.3s ease", // Animasi transisi
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.9")} // Mengubah opacity saat hover
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPencariKos;
