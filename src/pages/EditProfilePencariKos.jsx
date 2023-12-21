import "../components/font.css";
import Logo from "../assets/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DataPribadi = () => {
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
      <div
        style={{
          paddingTop: "150px",
        }}
      >
        <div
          className="fromDataPribadi"
          style={{ border: "1px solid #50555D", marginInline: "200px" }}
        >
          <form action="">
            <h2
              style={{
                backgroundColor: "#7E4333",
                color: "white",
                marginLeft: "20",
                fontFamily: "Montserrat",
                fontSize: "22px",
                fontWeight: "bold",
                padding: "17px",
              }}
            >
              Data Pribadi
            </h2>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "40px",
            }}
          >
            <img
              src={pencariKosProfile}
              alt=""
              style={{ borderRadius: "50%", width: "150px" }}
            />
          </div>
          <br />
          <br />
          <div
            className="inputan"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <div
              className="nama"
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="nama">Masukkan Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap kamu"
                style={{ borderRadius: "5px", padding: "5px", width: "350px" }}
                required
                id="nama"
              />
            </div>
            <div
              className="jenisKelamin"
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="jenisKelamin">Jenis Kelamin</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "350px",
                }}
              >
                <input
                  type="radio"
                  value="Laki-Laki"
                  id="jenisKelamin"
                  name="jeniskelamin"
                  style={{ width: "12px", cursor: "pointer" }}
                />
                <label htmlFor="lakilaki">Laki-Laki</label>
                <input
                  type="radio"
                  value="perempuan"
                  id="perempuan"
                  name="jeniskelamin"
                  style={{ width: "12px", cursor: "pointer" }}
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="ttl">Tanggal Lahir</label>
              <input
                type="date"
                style={{
                  borderRadius: "5px",
                  width: "350px",
                  paddingInline: "15px",
                }}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="kotaAsal">Kota Asal</label>
              <input
                type="text"
                name="kotaAsal"
                id="kotaAsal"
                placeholder="Masukkan kota asal kamu"
                style={{ borderRadius: "5px", padding: "5px", width: "350px" }}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="tlp">No. Handphone Darurat</label>
              <div
                style={{
                  display: "flex",
                  marginBottom: "50px",
                }}
              >
                <p
                  style={{
                    backgroundColor: "#B7CBE9",
                    color: "#50555D",
                    width: "40px",
                    padding: "5px",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    border: "1px solid #82868B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  +62
                </p>
                <input
                  type="tel"
                  style={{
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    padding: "5px",
                    width: "310px",
                  }}
                  placeholder="xxxx xxxx"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          border: "1px solid #50555D",
          marginInline: "200px",
        }}
      >
        <h2
          style={{
            backgroundColor: "#7E4333",
            color: "white",
            marginLeft: "20",
            fontFamily: "Montserrat",
            fontSize: "22px",
            fontWeight: "bold",
            padding: "17px",
          }}
        >
          Profesi
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
              }}
            >
              <label htmlFor="pekerjaan">Pekerjaan</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "350px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    value="Mahasiswa"
                    name="mahasiswa"
                    required
                    style={{ width: "12px", cursor: "pointer" }}
                  />
                  <label htmlFor="mahasiswa">Mahasiswa</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    value="Pegawai"
                    name="pegawai"
                    required
                    style={{ width: "12px", cursor: "pointer" }}
                  />
                  <label htmlFor="pegawai">Pegawai</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    value="Lainnya"
                    name="lainnya"
                    required
                    style={{ width: "12px", cursor: "pointer" }}
                  />
                  <label htmlFor="lainnya">Lainnya</label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "700px",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "15px",
                "::placeholder": {
                  fontFamily: "Roboto",
                  fontSize: "20px",
                },
                marginBottom: "50px",
              }}
            >
              <label htmlFor="instansi">Nama Instansi</label>
              <input
                type="text"
                name="instansi"
                required
                placeholder="Masukkan nama instansi"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  width: "350px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          gap: "20px",
          paddingInline: "200px",
          marginBottom: "100px",
        }}
      >
        <input
          type="reset"
          style={{
            width: "128px",
            borderRadius: "5px",
            border: "2px solid #7E4333",
            color: "#7E4333",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
          value="Batal"
        />
        <Link to="/ProfilePencariKos">
          <input
            type="submit"
            style={{
              width: "128px",
              borderRadius: "5px",
              color: "white",
              backgroundColor: "#7E4333",
              fontWeight: "bold",
              fontFamily: "Roboto",
              border: "none",
            }}
            value="Simpan"
          />
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DataPribadi;
