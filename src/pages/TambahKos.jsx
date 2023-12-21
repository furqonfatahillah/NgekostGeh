import React, { useState } from "react";
import gedung3 from "../assets/gedung3.png";
import SubHeader from "../components/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark as faBookmarkSolid,
  faShareNodes,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import "../components/font.css";
import icons from "../components/Icons";
import BtnJumlahKos from "../components/BtnJumlahKos";
import Footer from "../components/Footer";
import Logo from "../assets/fotoSVGMassive/logo.svg";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import { Link } from "react-router-dom";

const TambahKos = () => {
  const [bookmarkIcon, setBookmarkIcon] = useState(faBookmarkRegular);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10032.716939073081!2d105.21318702120642!3d-5.383475839311724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db94d36c1dd3%3A0x5e03338eff886ac7!2sWINDA%20KOST!5e0!3m2!1sen!2sid!4v1701496058021!5m2!1sen!2sid";

  const buttonTexts = ["1", "2", "3", "4", "5"];
  const buttonTexts2 = ["6", "7", "8", "9", "10"];

  const props = [4.9, 100];

  const handleClick = () => {
    setBookmarkIcon((prevIcon) =>
      prevIcon === faBookmarkRegular ? faBookmarkSolid : faBookmarkRegular
    );
  };

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
      <br />
      <div style={{ padding: "50px" }}>
        <div
          style={{
            marginTop: "50px",
            height: "460px",
            width: "100%",
            display: "flex",
            backgroundColor: "#50555D",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "100px",
          }}
        >
          <div>
            <label
              htmlFor="uploadGambar"
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "15px",
                color: "white",
                fontSize: "30px",
                fontFamily: "Roboto",
                gap: "50px",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              Tambahkan Foto
            </label>
          </div>
          <div>
            <input
              id="uploadGambar"
              name="uploadGambar"
              type="file"
              style={{
                width: "100%",
                height: "100% ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                display: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="desk"
        style={{
          padding: "30px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Nama Kos
            </h1>
            <input type="text" style={{ borderRadius: "5px" }} />
            <h3
              style={{
                fontSize: "15px",
                color: "#50555D",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Alamat
            </h3>
            <input type="text" style={{ borderRadius: "5px" }} />
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            marginRight: "30px",
            gap: "10px",
          }}
        >
          <div
            className="rate"
            style={{
              justifyContent: "flex-end",
              gap: "5px",
              height: "max-content",
              display: "flex",
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
                opacity: "0.9",
                fontWeight: "500",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {props[0]}
            </p>
            <p
              style={{
                fontFamily: "Roboto",
                color: "#black",
                opacity: "0.9",
                fontWeight: "bold",
              }}
            >
              ({props[1]} review)
            </p>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <input type="checkbox" style={{ width: "20px" }} />
            <label
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              Bagikan
            </label>

            <input type="checkbox" style={{ width: "20px" }} />
            <label
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              Simpan
            </label>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#B4B6B9",
          size: "20",
          borderWidth: "2px",
          marginInline: "40px",
        }}
      />
      <br />
      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader title="Fasilitas Kamar" SizeH="30px"></SubHeader>
        <br />
        <div style={{ display: "flex", marginInline: "15px" }}>
          <div style={{ width: "50%" }}>
            <label
              htmlFor="kasur"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kasur"
              />
              <img src={icons.kasur} alt="" style={{ marginRight: "8px" }} />
              Kasur
            </label>

            <label
              htmlFor="bantal"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="bantal"
              />
              <img src={icons.bantal} alt="" style={{ marginRight: "8px" }} />
              Bantal
            </label>

            <label
              htmlFor="lemari baju"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="lemari baju"
              />
              <img src={icons.lemari} alt="" style={{ marginRight: "8px" }} />
              Lemari Baju
            </label>
          </div>

          <div style={{ width: "50%" }}>
            <label
              htmlFor="meja"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="meja"
              />
              <img src={icons.meja} alt="" style={{ marginRight: "8px" }} />
              Meja
            </label>

            <label
              htmlFor="kursi"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kursi"
              />
              <img src={icons.kursi} alt="" style={{ marginRight: "8px" }} />
              Kursi
            </label>

            <label
              htmlFor="jendela"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="jendela"
              />
              <img src={icons.jendela} alt="" style={{ marginRight: "8px" }} />
              Jendela
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader title="Fasilitas Kamar Mandi" SizeH="30px"></SubHeader>
        <br />
        <div style={{ display: "flex", marginInline: "15px" }}>
          <div style={{ width: "50%" }}>
            <label
              htmlFor="kamar mandi dalam"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kamar mandi dalam"
              />
              <img
                src={icons.kamarMandi}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Kamar Mandi Dalam
            </label>

            <label
              htmlFor="kamar mandi luar"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kamar mandi luar"
              />
              <img
                src={icons.kamarMandi}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Kamar Mandi Luar
            </label>
          </div>

          <div style={{ width: "50%" }}>
            <label
              htmlFor="kloset duduk"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kloset duduk"
              />
              <img
                src={icons.klosetDuduk}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Kloset Duduk
            </label>

            <label
              htmlFor="shower"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="shower"
              />
              <img src={icons.shower} alt="" style={{ marginRight: "8px" }} />
              Shower
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader
          title="Peraturan Khusus Tipe Kamar ini"
          SizeH="30px"
        ></SubHeader>
        <br />
        <div style={{ display: "flex", marginInline: "15px" }}>
          <div style={{ width: "100%" }}>
            <label
              htmlFor="maks penghuni"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="maks penghuni"
              />
              <img
                src={icons.maksPenghuni}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Maksimal Penghuni
            </label>

            <label
              htmlFor="pasangan"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="pasangan"
              />
              <img src={icons.pasangan} alt="" style={{ marginRight: "8px" }} />
              Membawa Pasangan
            </label>

            <label
              htmlFor="tamu dilarang menginap "
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="tamu dilarang menginap"
              />
              <img
                src={icons.tamuDilarangMenginap}
                alt=""
                style={{ marginRight: "15px" }}
              />
              Tamu Dilarang Menginap
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader title="Fasilitas Umum" SizeH="30px"></SubHeader>
        <br />
        <div style={{ display: "flex", marginInline: "15px" }}>
          <div style={{ width: "50%" }}>
            <label
              htmlFor="wifi"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="wifi"
              />
              <img src={icons.wifi} alt="" style={{ marginRight: "8px" }} />
              Wifi
            </label>

            <label
              htmlFor="dapur"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="dapur"
              />
              <img src={icons.dapur} alt="" style={{ marginRight: "8px" }} />
              Dapur
            </label>

            <label
              htmlFor="kulkas"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="kulkas"
              />
              <img src={icons.kulkas} alt="" style={{ marginRight: "8px" }} />
              Kulkas
            </label>
          </div>

          <div style={{ width: "50%" }}>
            <label
              htmlFor="parkir mobil"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="parkir mobil"
              />
              <img
                src={icons.parkirMobil}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Parkir Mobil
            </label>

            <label
              htmlFor="parkir motor"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="parkir motor"
              />
              <img
                src={icons.parkirMotor}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Parkir Motor
            </label>

            <label
              htmlFor="cctv"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="cctv"
              />
              <img src={icons.cctv} alt="" style={{ marginRight: "8px" }} />
              CCTV
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader title="Peraturan di Kos ini" SizeH="30px"></SubHeader>
        <br />
        <div style={{ display: "flex", marginInline: "15px" }}>
          <div style={{ width: "100%" }}>
            <label
              htmlFor="akses"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="akses"
              />
              <img src={icons.akses} alt="" style={{ marginRight: "8px" }} />
              Akses 24 Jam
            </label>

            <label
              htmlFor="merokok"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="merokok"
              />
              <img
                src={icons.dilarangMerokok}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Dilarang Merokok di Kamar
            </label>

            <label
              htmlFor="lawan jenis"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="lawan jenis"
              />
              <img
                src={icons.lawanJenisKeKamar}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Lawan Jenis dilarang ke Kamar
            </label>

            <label
              htmlFor="dilarang bawa hewan"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                name="dilarang bawa hewan"
              />
              <img
                src={icons.dilarangBawaHewan}
                alt=""
                style={{ marginRight: "8px" }}
              />
              Dilarang Bawa Hewan
            </label>
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#B4B6B9",
          size: "20",
          borderWidth: "2px",
          marginInline: "40px",
        }}
      />
      <br />
      <div
        style={{
          padding: "30px",
          width: "400px",
          height: "300px",
        }}
      >
        <SubHeader title="Kamar Tersedia" SizeH="30px"></SubHeader>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "120px",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            {buttonTexts.map((text, index) => (
              <BtnJumlahKos
                key={index}
                text={text}
                onClick={() => console.log(`Button ${index + 1} clicked`)}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            {buttonTexts2.map((text, index) => (
              <BtnJumlahKos
                key={index}
                text={text}
                onClick={() => console.log(`Button ${index + 1} clicked`)}
              />
            ))}
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "#B4B6B9",
          size: "20",
          borderWidth: "2px",
          marginInline: "40px",
        }}
      />
      <br />
      <div
        style={{
          padding: "30px",
        }}
      >
        <SubHeader title="Lokasi" SizeH="30px"></SubHeader>
        <br />
        <iframe
          src={mapSrc}
          width="700"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
        <Link to="/ProfilePemilikKos">
          <input
            type="submit"
            value="Simpan"
            style={{
              borderRadius: "5px",
              backgroundColor: "#7E4333",
              color: "white",
              fontWeight: "Montserrat",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          />
        </Link>
      </div>
      <hr
        style={{
          color: "#B4B6B9",
          size: "20",
          borderWidth: "2px",
          marginInline: "40px",
        }}
      />
      <br />
      <Footer></Footer>
    </>
  );
};

export default TambahKos;
