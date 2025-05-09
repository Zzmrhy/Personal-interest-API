import { Exoplanets } from "../services/api";
import { useEffect, useState } from "react";

function Exoplanet() {
  const [name, setName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Exoplanets();
      const focusRecord = response[response.length - 1];

      if (focusRecord.planetName) {
        setName(focusRecord.planetName);
      } else {
        setName("N/A");
      }
    }
    fetchData();
  }, []);
  return <h1>Planet Name: {name}</h1>;
}

export default Exoplanet;
