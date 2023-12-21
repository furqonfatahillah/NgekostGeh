import "../components/Nav.css";
import "./Home.css";
import BerandaImage from "../assets/BerandaImg1.png";
import Nav from "../components/Nav.jsx";
import Button from "../components/Button";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader.jsx";
import Carousel from "../components/Carousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer.jsx";
import CardRekomendasi from "../components/CardRekomedasi.jsx";
import gedung2 from "../assets/gedung2.png";
import AreaKos from "../components/AreaKos.jsx";
import TestiPencariKos from "../components/TestiPencariKos.jsx";
import PencariKosProfile from "../assets/pencariKosProfile.svg";
import Login from "../components/login.jsx";
import React, { useState } from "react";
import Rkkosbumanti from "../assets/fotoSVGMassive/Rkkosbumanti.svg";
import Rkkosputri from "../assets/fotoSVGMassive/Rkkosputrisetiyarani.svg";
import Rkkosputriwayhalim from "../assets/fotoSVGMassive/Rkkosputriwayhalim.svg";
import Aktkedaton from "../assets/fotoSVGMassive/Aktkedaton.svg";
import Aktkemiling from "../assets/fotoSVGMassive/Aktkemiling.svg";
import Aktkalianda from "../assets/fotoSVGMassive/Aktkalianda.svg";
import Aktnatar from "../assets/fotoSVGMassive/Aktnatar.svg";
import Aktsukarame from "../assets/fotoSVGMassive/Aktsukarame.svg";

const Home = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const valueTesiPemilikKos = [
    {
      id: 1,
      title: "Ali Ahmad",
      desk: "Kemiling, Bandar Lampung",
      img: PencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Hikost. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 2,
      title: "Putri Wati",
      desk: "Sukarame, Bandar Lampung",
      img: PencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 3,
      title: "Mega Putri",
      desk: "Kedaton, Bandar Lampung",
      img: PencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Ngekost Geh. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
    {
      id: 4,
      title: "Jufriyanto",
      desk: "Rajabasa, Bandar Lampung",
      img: PencariKosProfile,
      deskripsi:
        "Saya Bergabung dengan Ngekost Geh sudah 1 tahun dan sudah mendapatkan 100 favorit. Kos Asri menjadi terkenal dan mendapatkan banyak peminat. Terimakash Hikost. Saya akan tetap berkerjasama dengan Ngekost Geh. Semoga kedepannya Hikost bisa menjadi lebih baik lagi dan lebih berkembang lagi. ngekost ngekost ngekost Luar Biasa.",
      tgl: "30-12-2023",
      rating: 5,
    },
  ];

  const valueTesiPencariKos = [
    {
      id: 1,
      title: "Doni Putra",
      desk: "Kos Budi, Kemiling",
      img: PencariKosProfile,
      deskripsi:
        "Ngek stmemudahkan saya dalam mencari kamar kos yang sesuai dengan keinginan saya dan juga sesuai dengan budget yang saya miliki. Pokonya mantep banget dah! Semoga Hikost kedepannya bisa lebih berkembang lagi dan tidak hanya menyediakan kamar kos di daerah bandar lampung saja tetapi mungkin dapat berkembang ke wilayah lainnya.",
      tgl: "30-12-2023",
    },
    {
      id: 2,
      title: "Bayu Alhamid",
      desk: "Kos Wisma, Sukarame",
      img: PencariKosProfile,
      deskripsi:
        "Ngekost memudahkan saya dalam mencari kamar kos yang sesuai dengan keinginan saya dan juga sesuai dengan budget yang saya miliki. Pokonya mantep banget dah! Semoga Hikost kedepannya bisa lebih berkembang lagi.",
      tgl: "30-12-2023",
    },
    {
      id: 3,
      title: "Putra Kusuma",
      desk: "Kos Asri, Kedaton",
      img: PencariKosProfile,
      deskripsi:
        "Ngekost memudahkan saya dalam mencari kamar kos yang sesuai dengan keinginan saya dan juga sesuai dengan budget yang saya miliki. Pokonya mantep banget dah! Semoga Hikost kedepannya bisa lebih berkembang lagi. Pelayanan aplikasinya keren banget pembayarannya udah bisa pake pembayaran digital.",
      tgl: "30-12-2023",
    },
    {
      id: 4,
      title: "Rahmawati",
      desk: "Kos Putri, Rajabasa",
      img: PencariKosProfile,
      deskripsi:
        "Ngekost memudahkan saya dalam mencari kamar kos yang sesuai dengan keinginan saya dan juga sesuai dengan budget yang saya miliki. Pokonya mantep banget dah! Semoga Hikost kedepannya bisa lebih berkembang lagi. Hikost memudahkan saya dalam mencari kamar kos yang sesuai dengan keinginan saya dan juga sesuai dengan budget yang saya miliki.",
      tgl: "30-12-2023",
    },
  ];

  const valueAreaKos = [
    {
      id: 1,
      img: Aktkedaton,
      desk: "Kemiling",
    },
    {
      id: 2,
      img: Aktkemiling,
      desk: "Rajabasa",
    },
    {
      id: 3,
      img: Aktkalianda,
      desk: "Kedaton",
    },
    {
      id: 4,
      img: Aktnatar,
      desk: "Kalianda",
    },
    {
      id: 5,
      img: Aktsukarame,
      desk: "Natar",
    },

    {
      id: 6,
      img: gedung2,
      desk: "Sukarame",
    },
  ];

  const valueRekomendasi = [
    {
      id: 1,
      img: Rkkosbumanti,
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
      img: Rkkosputri,
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
      img: Rkkosputriwayhalim,
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
      <Nav menu="Testimonial" toggleLoginPopup={toggleLoginPopup}></Nav>
      {showLoginPopup && (
        <div style={popup}>
          <Login closeLoginPopup={closeLoginPopup}></Login>
        </div>
      )}
      <div className="content1" id="beranda">
        <div className="header">
          <Header
            title="Mendapatkan Kos Yang Nyaman
            Hanya Dengan Satu Sentuhan"
            desk="Mendapatkan kos yang nyaman hanya dengan satu sentuhan 
            dengan pesan kosan di Ngekost Geh! kamu akan dapatkan 
            pelayanan terbaik untuk tempat tinggalmu
            dimana saja dan kapan saja"
          ></Header>
          <br />
          <Button
            name="Rekomendasi"
            width="180px"
            height="42px"
            path="./Rekomendasi"
          ></Button>
        </div>
        <div className="img">
          <img id="img-beranda" src={BerandaImage} alt="" />
        </div>
      </div>
      <div className="info">
        <Header title="+30" desk="Kecamatan"></Header>
        <Header title="+500" desk="Kos"></Header>
        <Header title="+1000" desk="Pelanggan"></Header>
      </div>
      <div className="content2">
        <div className="promo" id="promo">
          <SubHeader
            title="Promo Kosan"
            colorH="white"
            SizeH="24px"
          ></SubHeader>
          <Carousel></Carousel>
          <br />
          <div style={{ marginTop: "50px" }}></div>
          <SubHeader
            title="Rekomendasi Kosan"
            colorH="white"
            SizeH="24px"
          ></SubHeader>
          <p
            style={{
              color: "white",
            }}
          >
            Kosan pilihan yang sering dipilih oleh pelanggan
          </p>
          <br />

          <div
            className="Rekomendasi"
            style={{
              width: "100%",
              height: "600px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
        </div>
        <br />
        <div style={{ marginTop: "50px" }}></div>
        <SubHeader title="Area Kos Terpopuler" SizeH="24px"></SubHeader>
        <br />

        <div
          className="areaKos"
          style={{
            width: "100%",
            height: "250px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {valueAreaKos.map((area) => (
            <AreaKos key={area.id} kost={area.img} desk={area.desk}></AreaKos>
          ))}
        </div>
        <div style={{ marginTop: "80px" }}></div>
        <div className="testi" id="testi">
          <div className="testimonialPencariKos">
            <SubHeader
              title="Testimonial Pencari Kos"
              colorH="black"
              SizeH="24px"
            ></SubHeader>
            <p
              style={{
                color: "#50555D",
                fontSize: "18px",
                fontFamily: "Roboto",
              }}
            >
              Pendapat pencari kos tentang kami
            </p>
            <br />
            <br />
          </div>

          <div
            className="TestimonialPencariKos"
            style={{
              width: "100%",
              height: "350px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {valueTesiPencariKos.map((testimoni) => (
              <TestiPencariKos
                key={testimoni.id}
                img={testimoni.img}
                title={testimoni.title}
                desk={testimoni.desk}
                deskripsi={testimoni.deskripsi}
                tgl={testimoni.tgl}
              ></TestiPencariKos>
            ))}
          </div>

          <div
            className="TestimonialPemilikKos"
            style={{
              marginTop: "80px",
            }}
          >
            <SubHeader
              title="Testimonial Pemilik Kos"
              colorH="black"
              SizeH="24px"
            ></SubHeader>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "Roboto",
                color: "#50555D",
              }}
            >
              Pendapat pemilik kos tentang kami
            </p>
            <br />
            <br />
            <div
              className="TestimonialPencariKos"
              style={{
                width: "100%",
                height: "350px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              {valueTesiPemilikKos.map((testimoni) => (
                <TestiPencariKos
                  key={testimoni.id}
                  img={testimoni.img}
                  title={testimoni.title}
                  desk={testimoni.desk}
                  deskripsi={testimoni.deskripsi}
                  tgl={testimoni.tgl}
                  rating={testimoni.rating}
                ></TestiPencariKos>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: "60px",
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Button
          name="Daftarkan Kosmu Sekarang"
          width="339px"
          height="55px"
        ></Button>
      </div>
      <br />
      <div className="contentFooter" id="kontak">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
