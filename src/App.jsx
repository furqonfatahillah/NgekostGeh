import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrasiPemilikKos from "./pages/RegistrasiPemilikKos";
import RegistrasiPencariKos from "./pages/RegistrasiPencariKos";
import EditKos from "./pages/EditKos.jsx";
import EditProfilePencariKos from "./pages/EditProfilePencariKos.jsx";
import EditProfilePemilikKos from "./pages/EditProfilePemilikKos.jsx";
import VerifikasiPemilikKos from "./pages/verifikasiPemilikKos.jsx";
import Rekomendasi from "./pages/Rekomendasi";
import MetodePembayaran from "./pages/MetodePembayaran.jsx";
import DetailKosanUser from "./pages/DetailKosanUser.jsx";
import ProfilePemilikKos from "./pages/ProfilePemilikKos.jsx";
import ProfilePencariKos from "./pages/ProfilePencariKos.jsx";
import TambahKos from "./pages/TambahKos.jsx";
import VerifikasiPencariKos from "./pages/verifikasiPencariKos.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/RegistrasiPemilikKos"
            element={<RegistrasiPemilikKos></RegistrasiPemilikKos>}
          ></Route>
          <Route
            path="/RegistrasiPencariKos"
            element={<RegistrasiPencariKos></RegistrasiPencariKos>}
          ></Route>
          <Route path="/EditKos" element={<EditKos></EditKos>}></Route>
          <Route
            path="/EditProfilePencariKos"
            element={<EditProfilePencariKos></EditProfilePencariKos>}
          ></Route>
          <Route
            path="/EditProfilePemilikKos"
            element={<EditProfilePemilikKos></EditProfilePemilikKos>}
          ></Route>
          <Route
            path="/verifikasiPemilikKos"
            element={<VerifikasiPemilikKos></VerifikasiPemilikKos>}
          ></Route>
          <Route
            path="/VerifikasiPencariKos"
            element={<VerifikasiPencariKos></VerifikasiPencariKos>}
          ></Route>
          <Route
            path="/Rekomendasi"
            element={<Rekomendasi></Rekomendasi>}
          ></Route>
          <Route
            path="/MetodePembayaran"
            element={<MetodePembayaran></MetodePembayaran>}
          ></Route>
          <Route
            path="/DetailKosanUser"
            element={<DetailKosanUser></DetailKosanUser>}
          ></Route>
          <Route
            path="/ProfilePemilikKos"
            element={<ProfilePemilikKos></ProfilePemilikKos>}
          ></Route>
          <Route
            path="/ProfilePencariKos"
            element={<ProfilePencariKos></ProfilePencariKos>}
          ></Route>
          <Route path="/TambahKos" element={<TambahKos></TambahKos>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
