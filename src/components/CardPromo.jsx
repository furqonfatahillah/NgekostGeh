import SubHeader from "./SubHeader";
import "./font.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const CardPromo = (props) => {
  const cardStyle = {
    display: "flex",
    height: "320px",
    width: "490px",
    borderRadius: "10px",
    backgroundColor: "#D9D9D9",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
    gap: "15px",
  };

  const ImgStyle = {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    width: "45%",
    height: "max-fit",
  };

  return (
    <>
      <div style={cardStyle}>
        <img src={props.img} alt="Kos Budi, Kemiling" style={ImgStyle} />
        <div
          className="desk"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <SubHeader
            title={props.title}
            desk={props.desk}
            colorH={props.colorH}
            colorP={props.colorP}
            SizeH={props.SizeH}
            SizeP={props.SizeP}
          />
          <br />
          <div style={{ display: "flex" }}>
            <p
              style={{
                textDecoration: "line-through",
                color: "#50555D",
              }}
            >
              {props.promo}
            </p>
            <p
              style={{
                color: "#EB1F2B",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              {props.persen}
            </p>
          </div>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            {props.harga}
          </p>
          <br />
          <p
            style={{
              color: "#50555D",
              fontFamily: "Roboto",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {props.fasilitas}
          </p>
          <br />
          <p
            style={{
              fontFamily: "Roboto",
              color: "#82868",
              opacity: "0.6",
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            Batas Promo: {props.batasPromo}
          </p>
          <div className="button" style={{ display: "flex", gap: "10px" }}>
            <Link to="/DetailKosanUser">
              <button
                style={{
                  color: "#7E4333",
                  border: "1px solid #7E4333",
                  borderRadius: "10px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  width: "95px",
                  height: "35px",
                }}
              >
                Lihat detail
              </button>
            </Link>
            <Button name="Pesan" width="126px" height="35px"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPromo;
