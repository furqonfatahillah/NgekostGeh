import "../components/font.css";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/fotoSVGMassive/logo.svg";
import pencariKosProfile from "../assets/pencariKosProfile.svg";
import { Link } from "react-router-dom";

const MetodePembayaran = () => {
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
            <Link to="/">
              <li>
                <a id="Beranda">Beranda</a>
              </li>
            </Link>
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
      <div style={{ padding: "100px", paddingTop: "100px" }}>
        <div>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "28px",
              fontWeight: " bold",
            }}
          >
            Metode Pembayaran
          </h1>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: " 400",
            }}
          >
            Hubungi pihak properti ini
          </p>
        </div>
        <br />
        <Link to="https://api.whatsapp.com/send/?phone=62895321599080&text&type=phone_number&app_absent=0">
          <button
            style={{
              backgroundColor: "#7E4333",
              width: "100px",
              height: "40px",
              borderRadius: "5px",
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "500",
            }}
          >
            WA
          </button>
        </Link>
        <div style={{ display: "flex", marginTop: "50px", gap: "20px" }}>
          <FontAwesomeIcon
            icon={faPhone}
            size="xl"
            style={{ color: "#000000" }}
          />
          <p
            style={{
              color: "#7E4333",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            +6282***743***
          </p>
        </div>
        <div style={{ marginTop: "200px" }}>
          <Link to="/ProfilePencariKos">
            <Button name="Ok" width="300px" height="45px"></Button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MetodePembayaran;
