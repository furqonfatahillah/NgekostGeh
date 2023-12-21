import "../components/font.css";
import Logo from "../assets/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const VerifikasiPemilikKos = () => {
  return (
    <>
      <nav>
        <div className="container-logoSearch">
          <img src={Logo} alt="Logo" className="Nav-logo" />
          <div className="container-search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder=" Kategori  |  Lokasi"
            />
            <button
              style={{
                width: "45px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                backgroundColor: "#7e4333",
                border: "none",
                height: "42px",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>
        <div className="menu-nav">
          <ul>
            <li>
              <a id="Beranda" href="#beranda">
                Beranda
              </a>
            </li>
            <li>
              <a id="Kontak" href="#kontak">
                Kontak
              </a>
            </li>
            <li>
              <a id="Promo" href="#promo">
                Promo
              </a>
            </li>
            <li>
              <a id="Testimonial" href="#testi">
                Testimonial
              </a>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              height: "max-content",
              alignItems: "center",
            }}
          >
            <img
              src={pencariKosProfile}
              alt=""
              style={{
                width: "60px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <select
              name=""
              id=""
              style={{
                width: "15px",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontWeight: "500",
                marginInline: "10px",
              }}
            >
              <option value="profil">Profile</option>
              <option value="keluar">Keluar</option>
            </select>
          </div>
        </div>
      </nav>
      <div style={{ padding: "150px" }}>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Verifikasi Identitas
        </h1>
        <div>
          <form
            action=""
            style={{ marginTop: "20px", display: "flex", gap: "200px" }}
          >
            <input
              type="text"
              placeholder="Nama"
              style={{
                borderRadius: "5px",
                padding: "10px",
              }}
            />
            <input
              type="email"
              placeholder="E-mail"
              style={{ borderRadius: "5px", padding: "10px" }}
            />
          </form>
        </div>
        <br />
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "60px",
          }}
        >
          Jenis Identitas
        </h1>
        <div style={{ marginTop: "20px " }}>
          <form
            action=""
            style={{ marginTop: "20px", display: "flex", gap: "260px" }}
          >
            <select
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #50555D",
                width: "198px",
                fontFamily: "Roboto",
                fontSize: "15px",
                marginLeft: "10px",
                color: "#50555D",
                cursor: "pointer",
              }}
            >
              <option
                value="E-KTP"
                style={{
                  color: "#50555D",
                }}
              >
                E-KTP
              </option>
              <option value="SIM">SIM</option>
            </select>
            <input
              type="text"
              placeholder="Nomor NPWP"
              style={{ borderRadius: "5px", padding: "10px" }}
            />
          </form>
        </div>
        <br />
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "60px",
          }}
        >
          Upload Foto Identitas
        </h1>
        <div style={{ marginTop: "20px" }}>
          <form action="">
            <div style={{ display: "flex", gap: "50px" }}>
              <div
                style={{
                  borderRadius: "5px",
                  width: "150px",
                  border: "1px solid",
                  display: "flex",
                  height: "150px",
                }}
              >
                <label
                  htmlFor="ktpFile"
                  style={{
                    display: "flex",
                    width: "200px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    size="2xl"
                    icon={faAddressCard}
                    style={{ color: "#000000" }}
                  />
                  Kartu Identitas
                </label>
                <input type="file" id="ktpFile" style={{ display: "none" }} />
              </div>
              <div
                style={{
                  borderRadius: "5px",
                  width: "150px",
                  border: "1px solid",
                  display: "flex",
                  height: "150px",
                }}
              >
                <label
                  htmlFor="selfiFile"
                  style={{
                    display: "flex",
                    width: "200px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "15px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCamera}
                    size="2xl"
                    style={{ color: "#000000" }}
                  />
                  Selfi dengan Kartu Identitas
                </label>
                <input type="file" id="selfiFile" style={{ display: "none" }} />
              </div>
              <div
                style={{
                  borderRadius: "5px",
                  width: "150px",
                  border: "1px solid",
                  display: "flex",
                  height: "150px",
                }}
              >
                <label
                  htmlFor="npwpFile"
                  style={{
                    display: "flex",
                    width: "200px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "15px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    size="2xl"
                    style={{ color: "#000000" }}
                  />
                  NPWP
                </label>
                <input type="file" id="npwpFile" style={{ display: "none" }} />
              </div>
            </div>
            <br />
            <br />
            <div>
              <Link to="/ProfilePemilikKos">
                <input
                  type="submit"
                  style={{
                    backgroundColor: "#7E4333",
                    color: "white",
                    width: "700px",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  value="Verifikasi"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default VerifikasiPemilikKos;
