import Carousel from "react-bootstrap/Carousel";
import CardPromo from "./CardPromo";

function UncontrolledExample() {
  const CarouselStyle = {
    height: "360px",
    width: "1280px",
  };

  const CarouselItemStyle = {
    height: "360px",
    display: "flex",
    gap: "20px",
    padding: "15px",
  };

  return (
    <Carousel style={CarouselStyle}>
      <Carousel.Item>
        <div style={CarouselItemStyle}>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={CarouselItemStyle}>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={CarouselItemStyle}>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
          <CardPromo></CardPromo>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
