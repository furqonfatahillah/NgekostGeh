import "../components/font.css";
import SubHeader from "../components/SubHeader";
import Registrasi from "../assets/Registrasi.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const RegistrasiPemilikKos = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundImage: `url(${Registrasi})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="input"
          style={{
            width: "50%",
            padding: "60px",
          }}
        >
          <SubHeader title="Daftar Akun Pemilik Kos" SizeH="24px"></SubHeader>
          <br />
          <br />
          <SubHeader title="Nama Lengkap" SizeH="14px"></SubHeader>
          <input
            type="text"
            style={{
              width: "100%",
              borderRadius: "5px",
              padding: "5px",
              height: "45px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            placeholder="Masukkan nama lengkap sesuai identitas"
          />
          <SubHeader title="No. Handphone" SizeH="14px"></SubHeader>
          <input
            type="text"
            style={{
              width: "100%",
              borderRadius: "5px",
              padding: "5px",
              height: "45px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            placeholder="Masukkan nomor handphone yang aktif"
          />
          <SubHeader title="Email" SizeH="14px"></SubHeader>
          <input
            type="tel"
            style={{
              width: "100%",
              borderRadius: "5px",
              padding: "5px",
              height: "45px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            placeholder="Masukkan alamat email"
          />
          <SubHeader title="Kata Sandi" SizeH="14px"></SubHeader>
          <input
            type="passwordpassword"
            style={{
              width: "100%",
              borderRadius: "5px",
              padding: "5px",
              height: "45px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            placeholder="Minimal 8 karakter"
          />
          <SubHeader title="Ulangi Kata Sandi" SizeH="14px"></SubHeader>
          <input
            type="password"
            style={{
              width: "100%",
              borderRadius: "5px",
              padding: "5px",
              height: "45px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            placeholder="Masukkan kembali kata sandi yang samae"
          />

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Link to="/ProfilePemilikKos">
            <input
              type="submit"
              name="Daftar"
              value="Daftar"
              style={{
                backgroundColor: "#7E4333",
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                width: "100%",
                height: "45px",
                borderRadius: "5px",
              }}
            ></input>
            </Link>
            <div style={{ marginTop: "15px", display: "flex" }}>
              <SubHeader desk="Sudah punya akun?" SizeP="14px"></SubHeader>
              <Link
                to="/"
                style={{
                  color: "#7E4333",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginLeft: "5px",
                }}
              >
                Masuk di sini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrasiPemilikKos;
