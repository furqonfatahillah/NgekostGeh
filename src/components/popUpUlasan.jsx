import "../components/font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubHeader from "./SubHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopUpUlasan = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Star = ({ selected, onClick }) => {
    return (
      <span onClick={onClick}>
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: selected ? "#EBA41F" : "#878786",
            fontSize: "30px",
            cursor: "pointer",
          }}
        />
      </span>
    );
  };

  const Rating = ({ totalStars }) => {
    const [rating, setRating] = useState(0);

    return (
      <div>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < rating}
            onClick={() => setRating(i + 1)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        style={{
          padding: "50px",
          backgroundColor: "white",
          width: "700px",
          height: "620px",
          borderRadius: "20px",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
        }}
      >
        <div className="back" style={{ display: "flex", gap: "50px" }}>
          <button
            style={{ width: "10%", height: "100%" }}
            onClick={props.closePopup}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="xl"
              style={{ color: "#000000" }}
            />
          </button>
          <div
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "25px",
              }}
            >
              Berikan Ulasan Jujurmu!
            </h2>
            <img
              src={props.img}
              alt=""
              style={{ width: "300px", height: "200px" }}
            />
            <SubHeader
              title={props.namaKos}
              desk={props.daerah}
              colorH="black"
              colorP="#50555D"
              SizeH="20px"
              SizeP="15px"
            ></SubHeader>
            <Rating totalStars={5} />
            <form action="#">
              <input
                type="text"
                placeholder="Berikan Testimoni"
                style={{
                  border: "2px solid #878786",
                  width: "100%",
                  borderRadius: "5px",
                  paddingInline: "10px",
                }}
              />

              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "50px",
                }}
              >
                <input
                  type="submit"
                  value="Simpan"
                  style={{
                    color: "white",
                    backgroundColor: "#7E4333",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpUlasan;
