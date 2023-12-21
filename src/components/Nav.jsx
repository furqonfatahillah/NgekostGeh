import "./Nav.css";
import Logo from "../assets/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Nav = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav>
        <div className="container-logoSearch">
          <img src={Logo} alt="Logo" className="Nav-logo" />
        </div>
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
                {props.menu}
              </a>
            </li>
          </ul>
          <button
            onClick={props.toggleLoginPopup}
            style={{
              color: "white",
              backgroundColor: "#7E4333",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              borderRadius: "5px",
              width: "121px",
              height: "33px",
              fontSize: "15px",
            }}
            className={isHovered ? "hovered" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Masuk
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
