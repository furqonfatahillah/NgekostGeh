import SubHeader from "./SubHeader";
import CardImg from "../assets/CardImg.png";

const CardPromo = () => {
  const cardStyle = {
    height: "296px",
    width: "505px",
    borderRadius: "10px",
    backgroundColor: "#D9D9D9",
    boxShadow: "0px 0px 10px 10px #333333",
  };

  const ImgStyle = {
    borderRadius: "10px",
  };

  return (
    <>
      <div style={cardStyle}>
        <div className="img">
          <img src={CardImg} alt="" style={ImgStyle} />
        </div>
        <div className="desk">
          <SubHeader
            title="Kos Budi, Kemiling"
            desk="Bandar Lampung"
            color="black"
          ></SubHeader>
          <br />
          
        </div>
      </div>
    </>
  );
};

export default CardPromo;
