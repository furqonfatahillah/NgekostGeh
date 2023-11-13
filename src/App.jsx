import "./components/Nav.css";
import "./App.css";
import BerandaImage from "./assets/BerandaImg1.png";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="content1">
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
          <Button name="Rekomendasi" width="180px"></Button>
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
        <SubHeader title="Promo Kosan" color="white"></SubHeader>
        <Carousel></Carousel>
      </div>
    </>
  );
}

export default App;
