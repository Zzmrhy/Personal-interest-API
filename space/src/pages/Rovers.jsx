import { useState, useEffect } from "react";
import { Rover } from "../services/api";
import Search from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

function Rovers() {
  const [searchParams] = useSearchParams();
  let index = searchParams.get("index") ? searchParams.get("index") : 0;
  const [activeIdx, setActiveIndex] = useState(index);
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
      if (index < 0 || index > response.photos.length) {
        alert(
          "Index is out of bounds, automatically will be set to what information index 0 has"
        );
        index = 0;
        setActiveIndex(index);
      }

      if (response.photos[index].earth_date) {
        setEarth(response.photos[index].earth_date);
      } else {
        setEarth("");
      }

      if (response.photos[index].img_src) {
        setPic(response.photos[index].img_src);
      } else {
        setPic(null);
      }

      if (response.photos[index].rover.status) {
        setStat(response.photos[index].rover.status);
      } else {
        setStat("");
      }

      if (response.photos[index].rover.name) {
        setName(response.photos[index].rover.name);
      } else {
        setName("");
      }

      if (response.photos[index].rover.landing_date) {
        setLand(response.photos[index].rover.landing_date);
      } else {
        setLand("");
      }

      if (response.photos[index].rover.launch_date) {
        setLaunch(response.photos[index].rover.launch_date);
      } else {
        setLaunch("");
      }

      if (response.photos[index].camera.name) {
        setCamName(response.photos[index].camera.name);
      } else {
        setCamName("");
      }

      if (response.photos[index].camera.full_name) {
        setFullName(response.photos[index].camera.full_name);
      } else {
        setFullName("");
      }

      if (response.photos[index].camera.id) {
        setCamID(response.photos[index].camera.id);
      } else {
        setCamID("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>{Search()}</div>
      <h1>Rover Picture Of Mars</h1>
      <h1>Index Number: {activeIdx}</h1>
      <h1>Picture Taken: {earth}</h1>
      <h1>Rover Status: {stat}</h1>
      <h1>Rover Name: {name}</h1>
      <h1>Rover Land Date: {land}</h1>
      <h1>Rover Launch Date: {launch}</h1>
      <h1>Camera Name: {camName}</h1>
      <h1>Camera Full Name: {full}</h1>
      <h1>Camera ID: {camID}</h1>
      <img src={rover} alt="Picture" />
    </div>
  );
}

export default Rovers;
