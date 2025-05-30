import { useState, useEffect } from "react";
import data from "../../data.json";
import BlackHoleSearch from "../components/HoleSearch";
import { useSearchParams } from "react-router-dom";
function BlackHole() {
  const [searchParams] = useSearchParams();
  let index = searchParams.get("index") ? searchParams.get("index") : 0;
  const [absoluteMagnitude, setAbsoluteMagnitude] = useState(0);
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
  const [name, setName] = useState("");
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
  const [luminosity, setLuminosity] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      // console.log(data);
      //console.log(data[0].name[0])

      if (index < 0 || index > data.length - 1) {
        alert("Index chosen was out of bounds, setting information to index 0");
        index = 0;
      }

      if (data[index].id) {
        setID(data[index].id);
      } else {
        setID(0);
      }

      if (data[index].name) {
        setName(data[index].name);
      } else {
        setName("N/A");
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

      if (data[index].discovery.discoverer) {
        setDiscoverer(data[index].discovery.discoverer);
      } else {
        setDiscoverer("N/A");
      }

      if (data[index].coordinates) {
        setCoordinates(data[index].coordinates);
      } else {
        setCoordinates("N/A");
      }

      if (data[index].discovery.year) {
        setYear(data[index].discovery.year);
      } else {
        setYear("N/A");
      }

      if (data[index].discovery.location) {
        setLocation(data[index].discovery.location);
      } else {
        setLocation("N/A");
      }

      if (data[index].type) {
        setType(data[index].type);
      } else {
        setType("N/A");
      }

      if (data[index].wikipedia) {
        setWikipedia(data[index].wikipedia);
      } else {
        setWikipedia(null);
      }

      if (data[index].rightAscension) {
        setRightAscension(data[index].rightAscension);
      } else {
        setRightAscension("N/A");
      }

      if (data[index].redshift) {
        setRedshift(data[index].redshift);
      } else {
        setRedshift(0);
      }

      if (data[index].declination) {
        setDeclination(data[index].declination);
      } else {
        setDeclination("N/A");
      }

      if (data[index].distance.gly) {
        setGly(data[index].distance.gly);
      } else {
        setGly(0);
      }

      if (data[index].distance.gpc) {
        setGpc(data[index].distance.gpc);
      } else {
        setGpc(0);
      }

      if (data[index].distance.km) {
        setKm(data[index].distance.km);
      } else {
        setKm(0);
      }

      if (data[index].distance.ly) {
        setLy(data[index].distance.ly);
      } else {
        setLy(0);
      }

      if (data[index].distance.m) {
        setM(data[index].distance.m);
      } else {
        setM(0);
      }

      if (data[index].constellation) {
        setConstellation(data[index].constellation);
      } else {
        setConstellation(0);
      }

      if (data[index].apparentMagnitude) {
        setApparentMagnitude(data[index].apparentMagnitude);
      } else {
        setApparentMagnitude(0);
      }

      if (data[index].absoluteMagnitude) {
        setAbsoluteMagnitude(data[index].absoluteMagnitude);
      } else {
        setAbsoluteMagnitude(0);
      }

      if (data[index].radius) {
        setRadius(data[index].radius);
      } else {
        setRadius(0);
      }

      if (data[index].luminosity) {
        setLuminosity(data[index].luminosity);
      } else {
        setLuminosity("N/A");
      }

      if (data[index].list) {
        setList(data[index].list);
      } else {
        setList("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>{BlackHoleSearch()}</h1>
      <h1>------------------------------------------------------------</h1>
      <h1>Information For Black Hole/Galaxy:</h1>
      <h1>List: {list}</h1>
      <h1>Absolute Magnitude: {absoluteMagnitude}</h1>
      <h1>
        Discoverer Of {kind}: {discoverer}
      </h1>
      <h1>Coordinates: {coordinates}</h1>
      <h1>Discovery Location: {location}</h1>
      <h1>Discovery Year: {year}</h1>
      <h1>Declination: {declination}</h1>
      <h1>
        Distance: GLY = {gly}, GPC = {gpc}, KM = {km}, LY = {ly}, M = {m}
      </h1>
      <h1>Apparent Magnitude: {apparentMagnitude}</h1>
      <h1>----------------------------------------------</h1>
      <h1>ID: {id}</h1>
      {data[index].name.map((n) => (
        // console.log(n);
        <h1>Name: {n}</h1>
      ))}
      <h1>Constellation: {constellation}</h1>
      <h1>Kind: {kind}</h1>
      <h1>Age (number): {ageNum}</h1>
      <h1>Age (text): {ageStr}</h1>
      <h1>Temperature (celcius): {celsius}</h1>
      <h1>Temperature (fahrenheit): {fahrenheit}</h1>
      <h1>Temperature (kelvin): {kelvin}</h1>
      <h1>Solar Mass (text): {solarMassStr}</h1>
      <h1>Solar Mass (number): {solarMassNum}</h1>
      <h1>Type: {type}</h1>
      <h1>
        Right Ascension For {kind}: {rightAscension}
      </h1>
      <h1>
        Redshift Of {kind}: {redshift}
      </h1>
      <h1>
        Luminosity Of {kind}: {luminosity}
      </h1>
      <h1>
        Radius Of {kind}: {radius}
      </h1>
      <img src={`${image}`} alt="Picture" width="700px" height="700px" />
      <h1>Map Of Where {kind} Is: </h1>
      <iframe src={map} width="500" height="500"></iframe>
      <h1>
        Wikipedia: <a href={wikipedia}>click for page of {kind}</a>
      </h1>
    </div>
  );
}

export default BlackHole;
