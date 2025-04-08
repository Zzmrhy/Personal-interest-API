import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import DayImage from "./pages/DayImage";
import NavBar from "./components/NavBar";
import Donki from "./pages/DonkiCME";
import DonkiGST from "./pages/DonkiGST";
import DonkiIPS from "./pages/DonkiIPS";
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
        <Route path="/rover" element={<Rovers />} />
      </Routes>
    </main>
  );
}

export default App;
