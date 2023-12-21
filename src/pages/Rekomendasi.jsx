import Nav from "../components/Nav";
import ImgRekomen from "../assets/Rekomen.png";
import SubHeader from "../components/SubHeader";
import "../components/font.css";
import Button from "../components/Button";
import UncontrolledExample from "../components/Carousel";
import Rectangle from "../assets/Rectangle7.png";
import CardRekomendasi from "../components/CardRekomedasi";
import gedung3 from "../assets/gedung3.png";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Login from "../components/login.jsx";

const Rekomendasi = () => {
  const valueRekomendasi = [
    {
      id: 1,
      img: gedung3,
      title: "Kos Putri, Way Halim",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
    },
    {
      id: 2,
      img: gedung3,
      title: "Kos Budi, Kemiling",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 12.750.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi, akses 24 jam, parkir motor dan mobil, dapur",
    },
    {
      id: 3,
      img: gedung3,
      title: "Kos Asri, Sukarame",
      rate: "4.8",
      review: "100",
      desk: "Bandar Lampung",
      colorP: "#50555D",
      SizeP: "14px",
      harga: "Rp. 17.000.000",
      fasilitas:
        "Kamar mandi dalam, kasur, wifi,TV, AC, wifi akses 24 jam, parkir motor dan mobil, dapur",
    },
  ];
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const popup = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "90",
  };

  return (
    <>
      <Nav menu="Rekomendasi" toggleLoginPopup={toggleLoginPopup}></Nav>
      {showLoginPopup && (
        <div style={popup}>
          <Login closeLoginPopup={closeLoginPopup}></Login>
        </div>
      )}
      <div
        className="img"
        style={{
          width: "100%",
          height: "45%",
          backgroundImage: `url(${ImgRekomen})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "absolute",
          zIndex: "-1",
        }}
      ></div>
      <div
        className="container1"
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="beranda"
      >
        <div
          className="filter"
          style={{
            backgroundColor: "white",
            boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3) ",
            width: "678px",
            height: "151px",
            borderRadius: "10px",
            display: "flex",
            padding: "20px",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            marginTop: "200px",
          }}
        >
          <SubHeader
            title="Cari kos terbaikmu disini!"
            colorH="black"
            SizeH="24px"
          ></SubHeader>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <select
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "2px solid black",
                width: "198px",
                height: "46px",
                fontFamily: "Roboto",
                fontSize: "15px",
                marginLeft: "10px",
                color: "#50555D",
                cursor: "pointer",
              }}
            >
              <option
                value=""
                style={{
                  color: "#50555D",
                }}
              >
                Filter Pencarian
              </option>
              <option value="Semua kategori">Semua Kategori</option>
              <option value="Kos Putra / Tahun">Kos Putra / Tahun</option>
              <option value="Kos Putri / Tahun">Kos Putri / Tahun</option>
              <option value="Kos Putra / Bulan">Kos Putra / Bulan</option>
              <option value="Kos Putri / Bulan">Kos Putri / Bulan</option>
            </select>
            <input
              type="text"
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "2px solid  black",
                width: "198px",
                height: "46px",
                fontFamily: "Roboto",
                fontSize: "18px",
              }}
              placeholder="Lokasi Terdekat"
            />
            <Button name="Cari Kos" width="198px" height="46px"></Button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div style={{ marginLeft: "50px" }} id="promo">
          <SubHeader
            title="Promo Kosan"
            colorH="black"
            SizeH="32px"
          ></SubHeader>
          <UncontrolledExample></UncontrolledExample>
        </div>
      </div>
      <div
        className="container3"
        style={{
          backgroundImage: `url(${Rectangle})`,
          width: "100%",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            padding: "50px",
          }}
          id="testi"
        >
          <SubHeader
            title="Rekomendasi Kosan"
            colorH="white"
            SizeH="24px"
          ></SubHeader>
          <p
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Kosan pilihan yang sering dipilih oleh pelanggan
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "90%",
            marginLeft: "50px",
            justifyContent: "space-between",
          }}
        >
          {valueRekomendasi.map((rekomendasi) => (
            <CardRekomendasi
              key={rekomendasi.id} // Pastikan memiliki kunci yang unik
              img={rekomendasi.img}
              title={rekomendasi.title}
              rate={rekomendasi.rate}
              review={rekomendasi.review}
              desk={rekomendasi.desk}
              colorP={rekomendasi.colorP}
              SizeP={rekomendasi.SizeP}
              harga={rekomendasi.harga}
              fasilitas={rekomendasi.fasilitas}
              namaButton="Lihat Detail"
              to=".\DetailKosanUser"
            ></CardRekomendasi>
          ))}
        </div>
        <div
          style={{
            marginTop: "100px",
          }}
        ></div>
        <div style={{ marginLeft: "50px" }}>
          <SubHeader
            SizeH="24px"
            title="Rekomendasi Kosan Lainnya"
            colorH="white"
          ></SubHeader>
          <p
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Cari kosan yang kamu inginkan
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "97%",
            padding: "50px",
            justifyContent: "space-between",
          }}
        >
          {valueRekomendasi.map((rekomendasi) => (
            <CardRekomendasi
              key={rekomendasi.id} // Pastikan memiliki kunci yang unik
              img={rekomendasi.img}
              title={rekomendasi.title}
              rate={rekomendasi.rate}
              review={rekomendasi.review}
              desk={rekomendasi.desk}
              colorP={rekomendasi.colorP}
              SizeP={rekomendasi.SizeP}
              harga={rekomendasi.harga}
              fasilitas={rekomendasi.fasilitas}
              namaButton="Lihat Detail"
              to=".\DetailKosanUser"
            ></CardRekomendasi>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            width: "97%",
            padding: "50px",
            justifyContent: "space-between",
          }}
        >
          {valueRekomendasi.map((rekomendasi) => (
            <CardRekomendasi
              key={rekomendasi.id} // Pastikan memiliki kunci yang unik
              img={rekomendasi.img}
              title={rekomendasi.title}
              rate={rekomendasi.rate}
              review={rekomendasi.review}
              desk={rekomendasi.desk}
              colorP={rekomendasi.colorP}
              SizeP={rekomendasi.SizeP}
              harga={rekomendasi.harga}
              fasilitas={rekomendasi.fasilitas}
              namaButton="Lihat Detail"
              to=".\DetailKosanUser"
            ></CardRekomendasi>
          ))}
        </div>
        <div style={{ marginTop: "100px" }}></div>
        <div className="footer" id="kontak">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
