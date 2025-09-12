import "../css/Aurora.css"
import { Aurora } from "../services/api";
import { useEffect, useState } from "react";
 
function AuroraPage() {
  const [data, setData] = useState("");
  const [forecast, setForecast] = useState("");
  const [observation, setObservation] = useState("");
  const [coordinates, setCoordinates] = useState(0);
  // const seperatedCoord = coordinates.join(", ");
  const [type, setType] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Aurora();
 
      if (response["Data Format"]) {
        setData(response["Data Format"]);
      } else {
        setData("N/A");
      }
 
      if (response["Forecast Time"]) {
        setForecast(response["Forecast Time"]);
      } else {
        setForecast("N/A");
      }
 
      if (response["Observation Time"]) {
        setObservation(response["Observation Time"]);
      } else {
        setObservation("N/A");
      }
 
      if (response.type) {
        setType(response.type);
      } else {
        setType("N/A");
      }
 
      // response.slice(0, 20);
 
      if (response.coordinates[response]) {
        setCoordinates(response.coordinates[response]);
      } else {
        setCoordinates("N/A");
      }
 
      // response.map(() => {
      //   <h1>Coordinates: {coordinates}</h1>;
      // });
 
      // response.map((coord) => {
      //   coordinates.slice(0, 20);
      //   <p id="a">Coordinates: {coord}</p>;
      // });
    }
    fetchData();
  }, []);
 
  return (
    <div>
      <h1 id="information">This Is A Page For The Aurora Lights</h1>
      <p id="format">Data Format: {data}</p>
      <p id="m">Forecast Time: {forecast}</p>
      <p id="m">Observation Time: {observation}</p>
      {/* <p id="a">Coordinates: {coordinates}</p> */}
      <p id="m">Type: {type}</p>
    </div>
  );
}
 
export default AuroraPage;