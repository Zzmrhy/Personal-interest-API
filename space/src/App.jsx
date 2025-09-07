import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DayImage from "./pages/DayImage";
import NavBar from "./components/NavBar";
import Donki from "./pages/DONKI/DonkiCME";
import DonkiGST from "./pages/DONKI/DonkiGST";
import DonkiIPS from "./pages/DONKI/DonkiIPS";
import DonkiFLR from "./pages/DONKI/DonkiFLR";
import DonkiSEP from "./pages/DONKI/DonkiSEP";
import DonkiRBE from "./pages/DONKI/DonkiRBE";
import Rovers from "./pages/Rovers";
import DonkiWSA from "./pages/DONKI/DonkiWSA";
import DonkiNotification from "./pages/DONKI/DonkiNotifications";
import DonkiHSS from "./pages/DONKI/DonkiHSS";
import Exoplanets from "./pages/Exoplanets";
import Hubble from "./pages/Hubble";
import Webb from "./pages/Webb";
import AlaskyAPI from "./pages/Alasky";
import BlackHole from "./pages/BlackHole";
import AuroraPage from "./pages/Aurora";
function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picture" element={<DayImage />} />
        <Route path="/donki" element={<Donki />} />
        <Route path="/donkiGST" element={<DonkiGST />} />
        <Route path="/donkiIPS" element={<DonkiIPS />} />
        <Route path="/donkiFLR" element={<DonkiFLR />} />
        <Route path="/donkiSEP" element={<DonkiSEP />} />
        <Route path="/donkiRBE" element={<DonkiRBE />} />
        <Route path="/donkiWSA" element={<DonkiWSA />} />
        <Route path="/donkiNotifications" element={<DonkiNotification />} />
        <Route path="/donkiHSS" element={<DonkiHSS />} />
        <Route path="/rover" element={<Rovers />} />
        <Route path="/exoplanets" element={<Exoplanets />} />
        <Route path="/hubble" element={<Hubble />} />
        <Route path="/webb" element={<Webb />} />
        <Route path="/alasky" element={<AlaskyAPI />} />
        <Route path="/black-hole" element={<BlackHole />} />
        <Route path="/aurora" element={<AuroraPage />} />
      </Routes>
    </main>
  );
}

export default App;
