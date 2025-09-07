import "../css/Rovers.css";
import { useState, useEffect } from "react";
import { Rover } from "../services/api";
import Search from "../components/SearchBar";
import SOLSearch from "../components/SOLBar";
import { useSearchParams } from "react-router-dom";
 
function Rovers() {
  const [searchParams] = useSearchParams();
  let index = searchParams.get("index") ? searchParams.get("index") : 0;
  const [SOLParams] = useSearchParams();
  let sol = SOLParams.get("sol") ? SOLParams.get("sol") : 1000;
  const [activeIdx, setActiveIndex] = useState(index);
  const [solin, setSolin] = useState(sol);
  const [rover, setPic] = useState(null);
  const [earth, setEarth] = useState("");
  const [stat, setStat] = useState("");
  const [name, setName] = useState("");
  const [camName, setCamName] = useState("");
  const [land, setLand] = useState("");
  const [launch, setLaunch] = useState("");
  const [full, setFullName] = useState("");
  const [camID, setCamID] = useState("");
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await Rover(solin);
 
      if (!response) {
        setAvailable(null);
      }

      if (response.photos == 0) {
        alert("Incorrect sol chosen, automatically changing sol to 1000 instead")
        setSolin(1000)
      } else if (index < 0 || index > response.photos.length - 1) {
        alert(
          "Index is out of bounds, automatically will be set to what information index 0 has"
        );
        index = 0;
        setActiveIndex(index);
      }
 
      
 
      if (response.photos[index].earth_date) {
        setEarth(response.photos[index].earth_date);
      } else {
        setEarth("N/A");
      }
 
      if (response.photos[index].img_src) {
        setPic(response.photos[index].img_src);
      } else {
        setPic(null);
      }
 
      if (response.photos[index].rover.status) {
        setStat(response.photos[index].rover.status);
      } else {
        setStat("N/A");
      }
 
      if (response.photos[index].rover.name) {
        setName(response.photos[index].rover.name);
      } else {
        setName("N/A");
      }
 
      if (response.photos[index].rover.landing_date) {
        setLand(response.photos[index].rover.landing_date);
      } else {
        setLand("N/A");
      }
 
      if (response.photos[index].rover.launch_date) {
        setLaunch(response.photos[index].rover.launch_date);
      } else {
        setLaunch("N/A");
      }
 
      if (response.photos[index].camera.name) {
        setCamName(response.photos[index].camera.name);
      } else {
        setCamName("N/A");
      }
 
      if (response.photos[index].camera.full_name) {
        setFullName(response.photos[index].camera.full_name);
      } else {
        setFullName("N/A");
      }
 
      if (response.photos[index].camera.id) {
        setCamID(response.photos[index].camera.id);
      } else {
        setCamID("N/A");
      }
    }
    fetchData();
  }, [solin]);
 
  return (
    <div>
      <h1 id="info">Search For Index</h1>
      <div>{Search(solin)}</div>
      <h1>
        ----------------------------------------------------------------------------------
      </h1>
      <h1 id="info">Rover Picture Of Mars</h1>
      <p id="message">Current SOL Number: {solin}</p>
      <p id="message">Index Number: {activeIdx}</p>
      <p id="message">Picture Taken: {earth}</p>
      <p id="message">Rover Status: {stat}</p>
      <p id="message">Rover Name: {name}</p>
      <p id="message">Rover Land Date: {land}</p>
      <p id="message">Rover Launch Date: {launch}</p>
      <p id="message">Camera Name: {camName}</p>
      <p id="message">Camera Full Name: {full}</p>
      <p id="message">Camera ID: {camID}</p>
      <img src={rover} alt="Picture" />
      <h1>
        ----------------------------------------------------------------------------------
      </h1>
      <h1 id="info">Search SOL Number To Change All Information</h1>
      <div>{SOLSearch(index)}</div>
    </div>
  );
}
 
export default Rovers;