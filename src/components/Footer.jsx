import React from "react";
import FooterImage from "../assets/1.png";
import SubHeader from "./SubHeader";

const Footer = () => {
  return (
    <>
      <div
        className="ContainerFooter"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#b4b6b9",
          padding: "20px 40px",
          width: "100%",
        }}
      >
        <div>
          <img
            className="logo"
            src={FooterImage}
            alt="Logo Footer"
            style={{ width: "400px", height: "270px", objectFit: "contain" }}
          />
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="containerInfo">
            <SubHeader title="Info" SizeH="20px" />
            <br />
            <SubHeader
              desk="Tentang Kami"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
            <SubHeader
              desk="Testimonial"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
            <SubHeader desk="Kontak" SizeP="16px" colorP="#50555D"></SubHeader>
          </div>

          <div className="containerPerusahaan">
            <SubHeader title="Perusahaan" SizeH="20px" />
            <br />
            <SubHeader
              desk="Syarat & Ketentuan"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
            <SubHeader
              desk="Kebijakan & Privasi"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
            <SubHeader desk="Blog" SizeP="16px" colorP="#50555D"></SubHeader>
            <SubHeader
              desk="Bantuan Pelayanan"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
          </div>

          <div
            className="containerKontak"
            style={{
              width: "250px",
              marginRight: "150px",
            }}
          >
            <SubHeader title="Kontak" SizeH="20px" />
            <br />
            <SubHeader
              desk="Jl. Za Pagar Alam No.1 Bandar Lampung, Lampung- Indonesia (022)
              1000001 contact@email.id"
              SizeP="16px"
              colorP="#50555D"
            ></SubHeader>
            
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "45px",
          width: "100%",
          backgroundColor: "#7E4333",
        }}
      >
        <SubHeader
          title="Copyright 2023 NgeKostGeh. All Right Reserved"
          SizeH="14px"
          colorH="white"
        ></SubHeader>
      </div>
    </>
  );
};

export default Footer;
