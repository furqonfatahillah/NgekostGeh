import SubHeader from "./SubHeader";
import CardImg from "../assets/CardImg.png";

const CardPromo = () => {
  const cardStyle = {
    display: "flex",
    height: "290px",
    width: "410px",
    borderRadius: "10px",
    backgroundColor: "#D9D9D9",
    boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
    gap: "15px",
  };

  const ImgStyle = {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  };

  return (
    <>
      <div style={cardStyle}>
        <div className="img" style={{ width: "40%" }}>
          <img src={CardImg} alt="" style={ImgStyle} />
        </div>
        <div className="desk" style={{ padding: "5px" }}>
          <SubHeader
            title="Kos Budi, Kemiling"
            desk="Bandar Lampung"
            color="black"
            SizeH="18px"
            SizeP="14px"
          ></SubHeader>
          <br />
        </div>
      </div>
    </>
  );
};

export default CardPromo;
