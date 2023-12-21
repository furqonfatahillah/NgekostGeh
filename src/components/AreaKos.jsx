import "./font.css";
import SubHeader from "./SubHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AreaKost = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        style={{
          width: "190px",
          height: "227px",
          borderRadius: "10px 10px 0 0",
        }}
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <img
          src={props.kost}
          alt="AreaKost"
          style={{
            width: "100%",
            height: "85%",
            borderRadius: "10px 10px 0 0",
            marginBottom: "10px",
          }}
        />
        <SubHeader desk={props.desk} colorP="black" SizeP="24px"></SubHeader>
      </div>
    </>
  );
};

export default AreaKost;
