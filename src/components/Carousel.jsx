import Carousel from "react-bootstrap/Carousel";
import CardPromo from "./CardPromo";
import Pksejahtera from "../assets/fotoSVGMassive/Promo/Pksejahtera.png";

function UncontrolledExample() {
  const CarouselStyle = {
    height: "400px",
    width: "1400px",
  };

  const CarouselItemStyle = {
    height: "400px",
    display: "flex",
    justifyContent: "space-around", // To evenly distribute CardPromos
    alignItems: "center",
    gap: "20px",
    padding: "15px",
  };

  const valueSubHeader1 = [
    {
      id: 1,
      img: Pksejahtera,
      title: "Kos Budi, Kemiling",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 15.000.000",
      persen: "15%",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    {
      id: 2,
      img: Pksejahtera,
      title: "Kos Wisma, Rajabasa",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 12.000.000",
      persen: "15%",
      harga: "Rp. 10.200.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    {
      id: 3,
      img: Pksejahtera,
      title: "Kos Wisma, Rajabasa",
      desk: "Makassar",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 12.000.000",
      persen: "15%",
      harga: "Rp. 10.200.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    // Objek-objek tambahan untuk slide tambahan
    {
      id: 4,
      img: Pksejahtera,
      title: "Kos Indah, Tanjung Karang",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 10.000.000",
      persen: "15%",
      harga: "Rp. 8.500.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    {
      id: 5,
      img: Pksejahtera,
      title: "Kos Asri, Sukarame",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 9.000.000",
      persen: "15%",
      harga: "Rp. 7.650.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    {
      id: 6,
      img: Pksejahtera,
      title: "Kos Asri, Sukarame",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 15.000.000",
      persen: "15%",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
      batasPromo: "27-11-2023",
    },
    {
      id: 7,
      img: Pksejahtera,
      title: "Kos Asri, Sukarame",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 20.000.000",
      persen: "15%",
      harga: "Rp. 17.000.000",
      fasilitas:
        "Kamar mandi dalam, kasur, TV, AC, wifi, akses 24 jam, parkir motor dan mobil, dapur, ",
      batasPromo: "27-11-2023",
    },
    {
      id: 8,
      img: Pksejahtera,
      title: "Kos Asri, Sukarame",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 17.000.000",
      persen: "15%",
      harga: "Rp. 14.950.000",
      fasilitas:
        "Kamar mandi dalam, kasur, TV, AC, wifi, akses 24 jam, parkir motor dan mobil, dapur, ",
      batasPromo: "27-11-2023",
    },
    {
      id: 9,
      img: Pksejahtera,
      title: "Kos Asri, Sukarame",
      desk: "Bandar Lampung",
      colorH: "black",
      colorP: "#50555D",
      SizeH: "16px",
      SizeP: "14px",
      promo: "Rp. 20.000.000",
      persen: "15%",
      harga: "Rp. 17.000.000",
      fasilitas:
        "Kamar mandi dalam, kasur, TV, AC, wifi, akses 24 jam, parkir motor dan mobil, dapur, ",
      batasPromo: "27-11-2023",
    },
  ];

  const chunkSize = 3;
  const chunkedSubHeaders = [];
  for (let i = 0; i < valueSubHeader1.length; i += chunkSize) {
    chunkedSubHeaders.push(valueSubHeader1.slice(i, i + chunkSize));
  }

  return (
    <Carousel style={CarouselStyle}>
      {chunkedSubHeaders.map((subHeaderChunk, index) => (
        <Carousel.Item key={index}>
          <div style={CarouselItemStyle}>
            {subHeaderChunk.map((SubHeader) => (
              <CardPromo
                key={SubHeader.id}
                img={SubHeader.img}
                id={SubHeader.id}
                title={SubHeader.title}
                desk={SubHeader.desk}
                colorH={SubHeader.colorH}
                colorP={SubHeader.colorP}
                SizeH={SubHeader.SizeH}
                SizeP={SubHeader.SizeP}
                promo={SubHeader.promo}
                persen={SubHeader.persen}
                harga={SubHeader.harga}
                fasilitas={SubHeader.fasilitas}
                batasPromo={SubHeader.batasPromo}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
