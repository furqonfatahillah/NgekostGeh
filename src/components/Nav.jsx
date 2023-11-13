import "./Nav.css";
import Logo from "../assets/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Nav = () => {
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
                height: "41px",
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
              <a id="Beranda" href="#">
                Beranda
              </a>
            </li>
            <li>
              <a id="Kontak" href="#">
                Kontak
              </a>
            </li>
            <li>
              <a id="Promo" href="#">
                Promo
              </a>
            </li>
            <li>
              <a id="Testimonial" href="#">
                Testimonial
              </a>
            </li>
          </ul>
          <Button name="Masuk" width="180px"></Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
