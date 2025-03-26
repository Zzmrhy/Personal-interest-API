import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import DayImage from "./pages/DayImage";
import NavBar from "./components/NavBar";
import Donki from "./pages/Donki";
import Rovers from "./pages/Rovers";
import Pictures from "./pages/ImageAndVideo";
function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<DayImage />} />
        <Route path="/donki" element={<Donki />} />
        <Route path="/rover" element={<Rovers />} />
        <Route path="/images" element={<Pictures />} />
      </Routes>
    </main>
  );
}

export default App;
