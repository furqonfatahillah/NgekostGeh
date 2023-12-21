import React, { useState } from "react";
import gedung3 from "../assets/gedung3.png";
import SubHeader from "../components/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark as faBookmarkSolid,
  faShareNodes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import "../components/font.css";
import icons from "../components/Icons";
import BtnJumlahKos from "../components/BtnJumlahKos";
import Footer from "../components/Footer";
import TestiPencariKos from "../components/TestiPencariKos";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import CardRekomendasi from "../components/CardRekomedasi";
import Rkkosbumanti from "../assets/fotoSVGMassive/Rkkosbumanti.svg";
import Rkkosputri from "../assets/fotoSVGMassive/Rkkosputrisetiyarani.svg";
import Rkkosputriwayhalim from "../assets/fotoSVGMassive/Rkkosputriwayhalim.svg";
import Logo from "../assets/fotoSVGMassive/logo.svg";
import PopUpSewa from "../components/PopUpSewa";
import { Link } from "react-router-dom";

const DetailKosanUser = () => {
  const [bookmarkIcon, setBookmarkIcon] = useState(faBookmarkRegular);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10032.716939073081!2d105.21318702120642!3d-5.383475839311724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db94d36c1dd3%3A0x5e03338eff886ac7!2sWINDA%20KOST!5e0!3m2!1sen!2sid!4v1701496058021!5m2!1sen!2sid";

  const buttonTexts = ["1", "2", "3", "4", "5"];
  const buttonTexts2 = ["6", "7", "8", "9", "10"];

  const [showPopUp, setShowPopUp] = useState(false);

  const toggleSewaPopup = () => {
    setShowPopUp(!showPopUp);
  };

  const closeSewaPopup = () => {
    setShowPopUp(false);
  };

  const props = [4.9, 100];

  const handleClick = () => {
    setBookmarkIcon((prevIcon) =>
      prevIcon === faBookmarkRegular ? faBookmarkSolid : faBookmarkRegular
    );
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

  const valueTesiPemilikKos = [
    {
      id: 1,
      title: "Ali Ahmad",
      desk: "Kemiling, Bandar Lampung",
      img: pencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Hikost. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 2,
      title: "Putri Wati",
      desk: "Sukarame, Bandar Lampung",
      img: pencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 3,
      title: "Mega Putri",
      desk: "Kedaton, Bandar Lampung",
      img: pencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 4,
      title: "Jufriyanto",
      desk: "Rajabasa, Bandar Lampung",
      img: pencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Hikost. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
  ];

  const valueRekomendasi = [
    {
      id: 1,
      img: Rkkosbumanti,
      title: "Kos Putri, Way Halim",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
    },
    {
      id: 2,
      img: Rkkosputri,
      title: "Kos Budi, Kemiling",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
    },
    {
      id: 3,
      img: Rkkosputriwayhalim,
      title: "Kos Asri, Sukarame",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 17.000.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi,TV, AC, wifi akses 24 jam, parkir motor dan mobil, dapur",
    },
  ];

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
              <Link to="/">
                <a id="Beranda" href="#beranda">
                  Beranda
                </a>
              </Link>
            </li>
            <li>
              <a id="Kontak" href="#kontak">
                Kontak
              </a>
            </li>
            <li>
              <a id="Rekomendasi" href="#rekomendasi">
                Rekomendasi
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
      <div
        style={{
          marginTop: "50px",
          height: "460px",
          width: "100%",
          padding: "30px",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            marginLeft: "30px",
          }}
        >
          <img src={gedung3} alt="" style={{ height: "100%", width: "100%" }} />
        </div>
        <div
          style={{
            height: "100%",
            width: "25%",
            marginLeft: "30px",
            display: "flex",
            gap: "2%",
            flexDirection: "column",
          }}
        >
          <img src={gedung3} alt="" style={{ height: "49%", width: "100%" }} />
          <img src={gedung3} alt="" style={{ height: "49%", width: "100%" }} />
        </div>
        <div
          style={{
            height: "100%",
            width: "25%",
            marginLeft: "10px",
            marginRight: "30px",
            display: "flex",
            gap: "2%",
            flexDirection: "column",
          }}
        >
          <img src={gedung3} alt="" style={{ height: "49%", width: "100%" }} />
          <img src={gedung3} alt="" style={{ height: "49%", width: "100%" }} />
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
            <SubHeader
              title="Kos Wisma, Rajabasa"
              SizeH="26px"
              desk="Bandar Lampung"
              SizeP="15px"
              colorP="#50555D"
            ></SubHeader>
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
              gap: "30px",
            }}
          >
            <button
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              <FontAwesomeIcon
                icon={faShareNodes}
                style={{ color: "#000000", marginRight: "5px" }}
              />
              Bagikan
            </button>

            <button
              onClick={handleClick}
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              <FontAwesomeIcon
                icon={bookmarkIcon}
                style={{
                  color:
                    bookmarkIcon === faBookmarkRegular ? "black" : "yellow",
                  marginRight: "5px",
                }}
              />
              simpan
            </button>
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
              {" "}
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
              {" "}
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
              {" "}
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
        className="rate"
        style={{
          justifyContent: "flex-start",
          gap: "5px",
          height: "max-content",
          display: "flex",
          marginBottom: "70px",
          marginLeft: "40px",
        }}
      >
        <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#eba41f" }} />
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
      <br />
      <div
        id="testi"
        className="TestimonialPencariKos"
        style={{
          width: "100%",
          height: "350px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {valueTesiPemilikKos.map((testimoni) => (
          <TestiPencariKos
            key={testimoni.id}
            img={testimoni.img}
            title={testimoni.title}
            desk={testimoni.desk}
            deskripsi={testimoni.deskripsi}
            tgl={testimoni.tgl}
            rating={testimoni.rating}
          ></TestiPencariKos>
        ))}
      </div>
      <div
        style={{
          marginLeft: "40px",
          marginTop: "60px",
          marginBottom: "70px",
        }}
      >
        <a
          href=""
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "#7E4333",
          }}
        >
          Lihat Rating Lainnya...
        </a>
      </div>
      <br />

      <div
        className="Rekomendasi"
        id="rekomendasi"
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "100px",
          padding: "40px",
        }}
      >
        {valueRekomendasi.map((rekomendasi) => (
          <CardRekomendasi
            key={rekomendasi.id} // Pastikan memiliki kunci yang unik
            img={rekomendasi.img}
            title={rekomendasi.title}
            rate={rekomendasi.rate}
            review={rekomendasi.review}
            desk={rekomendasi.desk}
            colorP={rekomendasi.colorP}
            SizeP={rekomendasi.SizeP}
            harga={rekomendasi.harga}
            fasilitas={rekomendasi.fasilitas}
            namaButton="Lihat Detail"
          ></CardRekomendasi>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          backgroundColor: "white",
          boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.2)",
          padding: "10px",
          justifyContent: "space-between",
          paddingInline: "40px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "50px" }}>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Nomor Kamar
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#7E4333",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "20px",
                borderRadius: "5px",
                width: "30px",
              }}
            >
              -
            </button>
            <h1
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              1
            </h1>
            <button
              style={{
                backgroundColor: "#7E4333",
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: "20px",
                borderRadius: "5px",
                width: "30px",
              }}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <h1
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Rp. 10.000.000
          </h1>
          <button
            style={{
              width: "150px",
              backgroundColor: "#7E4333",
              height: "35px",
              color: "white",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: "500",
              borderRadius: "5px",
            }}
            onClick={toggleSewaPopup}
          >
            Pesan
          </button>
        </div>
        {showPopUp && (
          <div style={popup}>
            <PopUpSewa onClose={closeSewaPopup} />
          </div>
        )}
      </div>
      <div id="kontak">
        <Footer></Footer>
      </div>
    </>
  );
};

export default DetailKosanUser;
