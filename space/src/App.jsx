import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import DayImage from "./pages/DayImage";
import NavBar from "./components/NavBar";
import Donki from "./pages/DONKI/DonkiCME";
import DonkiGST from "./pages/DONKI/DonkiGST";
import DonkiIPS from "./pages/DONKI/DonkiIPS";
import DonkiFLR from "./pages/DONKI/DonkiFLR";
import DonkiSEP from "./pages/DONKI/DonkiSEP";
import Rovers from "./pages/Rovers";
function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<DayImage />} />
        <Route path="/donki" element={<Donki />} />
        <Route path="/donkiGST" element={<DonkiGST />} />
        <Route path="/donkiIPS" element={<DonkiIPS />} />
        <Route path="/donkiFLR" element={<DonkiFLR />} />
        <Route path="/donkiSEP" element={<DonkiSEP />} />
        <Route path="/rover" element={<Rovers />} />
      </Routes>
    </main>
  );
}

export default App;
