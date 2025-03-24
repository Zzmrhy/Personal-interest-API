import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import DayImage from "./pages/DayImage";
import NavBar from "./components/NavBar";
import Donki from "./pages/Donki";
function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<DayImage />} />
        <Route path="/donki" element={<Donki />} />
      </Routes>
    </main>
  );
}

export default App;
