import { useState, useEffect } from "react";
import data from "../../data.json";
import BlackHoleSearch from "../components/HoleSearch";
import { useSearchParams } from "react-router-dom";
function BlackHole() {
  const [searchParams] = useSearchParams();
  let index = searchParams.get("index") ? searchParams.get("index") : 0;
  const [id, setID] = useState(0);
  const [ageStr, setAgeStr] = useState("");
  const [ageNum, setAgeNum] = useState(0);
  const [apparentMagnitude, setApparentMagnitude] = useState("");
  const [constellation, setConstellation] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [declination, setDeclination] = useState("");
  const [discoverer, setDiscoverer] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState(0);
  const [gly, setGly] = useState(0);
  const [gpc, setGpc] = useState(0);
  const [km, setKm] = useState(0);
  const [ly, setLy] = useState(0);
  const [m, setM] = useState(0);
  const [image, setImage] = useState(null);
  const [kind, setKind] = useState("");
  const [list, setList] = useState("");
  const [map, setMap] = useState(null);
  const [name, setName] = useState(null);
  const [radius, setRadius] = useState(0);
  const [redshift, setRedshift] = useState(0);
  const [rightAscension, setRightAscension] = useState("");
  const [solarMassNum, setSolarMassNum] = useState(0);
  const [solarMassStr, setSolarMassStr] = useState("");
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  const [type, setType] = useState("");
  const [wikipedia, setWikipedia] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      console.log(data);
      //console.log(data[0].name[0])
      data[index].name.map((n) => {
        console.log(n);
      });

      if (index < 0 || index > data.length - 1) {
        alert("Index chosen was out of bounds, setting information to index 0");
        index = 0;
      }

      if (data[index].id) {
        setID(data[index].id);
      } else {
        setID(0);
      }

      if (data[index].name[0]) {
        setName(data[index].name[0]);
      }

      if (data[index].image) {
        setImage(data[index].image);
      } else {
        setImage(null);
      }

      if (data[index].kind) {
        setKind(data[index].kind);
      } else {
        setKind("N/A");
      }

      if (data[index].map) {
        setMap(data[index].map);
      } else {
        setMap(null);
      }

      if (data[index].age.number) {
        setAgeNum(data[index].age.number);
      } else {
        setAgeNum("N/A");
      }

      if (data[index].age.text) {
        setAgeStr(data[index].age.text);
      } else {
        setAgeStr("N/A");
      }

      if (data[index].temperature.celsius) {
        setCelsius(data[index].temperature.celsius);
      } else {
        setCelsius("N/A");
      }

      if (data[index].temperature.fahrenheit) {
        setFahrenheit(data[index].temperature.fahrenheit);
      } else {
        setFahrenheit("N/A");
      }

      if (data[index].temperature.kelvin) {
        setKelvin(data[index].temperature.kelvin);
      } else {
        setKelvin("N/A");
      }

      if (data[index].solarmass.text) {
        setSolarMassStr(data[index].solarmass.text);
      } else {
        setSolarMassStr("N/A");
      }

      if (data[index].solarmass.number) {
        setSolarMassNum(data[index].solarmass.number);
      } else {
        setSolarMassNum("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>{BlackHoleSearch()}</h1>
      <h1>------------------------------------------------------------</h1>
      <h1>Information For Black Hole</h1>
      <h1>ID: {id}</h1>
      {name ? (
        data[index].name.map((obj, idx) => (
          <h1 key={idx}>
            Name #{idx + 1}: {obj.name}
          </h1>
        ))
      ) : (
        <h1>No Name Is Available</h1>
      )}
      <h1>Kind: {kind}</h1>
      <h1>Age (number): {ageNum}</h1>
      <h1>Age (text): {ageStr}</h1>
      <h1>Temperature (celcius): {celsius}</h1>
      <h1>Temperature (fahrenheit): {fahrenheit}</h1>
      <h1>Temperature (kelvin): {kelvin}</h1>
      <h1>Solar Mass (text): {solarMassStr}</h1>
      <h1>Solar Mass (number): {solarMassNum}</h1>
      <img src={`${image}`} alt="Picture" />
      <h1>Map Of Where Black Hole Is: </h1>
      <iframe src={map} width="500" height="500"></iframe>
    </div>
  );
}

export default BlackHole;
