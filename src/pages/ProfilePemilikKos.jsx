import "../components/font.css";
import Logo from "../assets/fotoSVGMassive/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import Banner from "../assets/fotoSVGMassive/PemilikKos/banner.svg";
import Button from "../components/Button";
import CardKos from "../components/CardKos.jsx";
import Rkkosbumanti from "../assets/fotoSVGMassive/Rkkosbumanti.svg";
import Rkkosputri from "../assets/fotoSVGMassive/Rkkosputrisetiyarani.svg";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

const ProfilePemilikKos = () => {
  const valueKos = [
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
              <a id="Beranda" href="#beranda">
                Beranda
              </a>
            </li>
            <li>
              <a id="Properti" href="#properti">
                Properti
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
          backgroundImage: `url(${Banner})`,
          width: "100%",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          padding: "50px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "200px",
          }}
        >
          <img
            src={pencariKosProfile}
            style={{ width: "150px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "500",
              color: "black",
            }}
          >
            Dimas Hidayanto
          </h1>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "15px",
              fontWeight: "400",
              color: "#82868B",
            }}
          >
            Kalianda, Lampung Selatan
          </p>
          <br />
          <div style={{ display: "flex", gap: "100px" }}>
            <Link to="/EditProfilePemilikKos">
              <Button name="Edit Profile" width="180px" height="45px"></Button>
            </Link>
            <Link to="/TambahKos">
              <Button name="Tambah Kos" width="180px" height="45px"></Button>
            </Link>
          </div>
          <br />
          <div
            className="Rekomendasi"
            style={{
              width: "100%",
              height: "600px",
              display: "flex",
              justifyContent: "center",
              gap: "100px",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            {valueKos.map((rekomendasi) => (
              <CardKos
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
              ></CardKos>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfilePemilikKos;
