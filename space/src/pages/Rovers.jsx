import { useState, useEffect } from "react";
import { Rover } from "../services/api";
import Search from "../components/SearchBar";

function Rovers() {
  const [rover, setPic] = useState(null);
  const [earth, setEarth] = useState("");
  const [stat, setStat] = useState("");
  const [name, setName] = useState("");
  const [camName, setCamName] = useState("");
  const [land, setLand] = useState("");
  const [launch, setLaunch] = useState("");
  const [full, setFullName] = useState("");
  const [camID, setCamID] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Rover();

      if (response.photos[22].earth_date) {
        setEarth(response.photos[22].earth_date);
      } else {
        setEarth("");
      }

      if (response.photos[22].img_src) {
        setPic(response.photos[22].img_src);
      } else {
        setPic(null);
      }

      if (response.photos[22].rover.status) {
        setStat(response.photos[22].rover.status);
      } else {
        setStat("");
      }

      if (response.photos[22].rover.name) {
        setName(response.photos[22].rover.name);
      } else {
        setName("");
      }

      if (response.photos[22].rover.landing_date) {
        setLand(response.photos[22].rover.landing_date);
      } else {
        setLand("");
      }

      if (response.photos[22].rover.launch_date) {
        setLaunch(response.photos[22].rover.launch_date);
      } else {
        setLaunch("");
      }

      if (response.photos[22].camera.name) {
        setCamName(response.photos[22].camera.name);
      } else {
        setCamName("");
      }

      if (response.photos[22].camera.full_name) {
        setFullName(response.photos[22].camera.full_name);
      } else {
        setFullName("");
      }

      if (response.photos[22].camera.id) {
        setCamID(response.photos[22].camera.id);
      } else {
        setCamID("");
      }

      if (response) {
        setCamID(response.photos[22].camera.id);
      } else {
        setCamID("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Rover Picture Of Mars</h1>
      <h2></h2>
      <h2>{earth}</h2>
      <h2>Rover Status: {stat}</h2>
      <h2>Rover Name: {name}</h2>
      <h2>Rover Land Date: {land}</h2>
      <h2>Rover Launch Date: {launch}</h2>
      <h2>Camera Name: {camName}</h2>
      <h2>Camera Full Name: {full}</h2>
      <h2>Camera ID: {camID}</h2>
      <img src={rover} alt="Picture" />
    </div>
  );
}

export default Rovers;
