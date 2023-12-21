import React, { useState } from "react";
import "./font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";

const PopUpSewa = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [valueTime, setValueTime] = useState([
    {
      title: "Rp. 10.000.000",
    },
  ]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setValueTime([
      {
        title:
          event.target.value === "Filter1"
            ? "Tahun"
            : event.target.value === "Filter2"
            ? "Bulan"
            : "Default Title",
      },
    ]);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value); // Tambahkan logika sesuai kebutuhan
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.3)",
          width: "357px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          className="close"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <button>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#000000", width: "25px", height: "25px" }}
            />
          </button>
        </div>
        <br />
        <div style={{ display: "flex", width: "100%", gap: "3px" }}>
          <SubHeader title="Rp. 10.000.000" SizeH="20px" />
          <SubHeader title="/" SizeH="20px" />
          <div>
            {valueTime.map((value, index) => (
              <SubHeader key={index} title={value.title} />
            ))}
          </div>
        </div>

        <br />
        <div
          className="input"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className="date">
            <input
              type="date"
              style={{
                width: "143px",
                borderRadius: "10px",
                border: "2px solid #7E4333",
                height: "57px",
                padding: "5px",
              }}
              onChange={handleDateChange}
            />
          </div>
          <div className="time">
            <select
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "2px solid #7E4333",
                width: "143px",
                height: "57px",
                fontFamily: "Roboto",
                fontSize: "15px",
                marginLeft: "10px",
                color: "#50555D",
              }}
              onChange={handleChange}
            >
              <option value="Filter1">Per Tahun</option>
              <option value="Filter2">Per Bulan</option>
            </select>
          </div>
        </div>
        <br />
        <Link to="/VerifikasiPencariKos">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button name="Ajukan Sewa" width="200px" height="45px" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default PopUpSewa;
