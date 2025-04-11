import { useEffect, useState } from "react";
import { DONKIWSA } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiWSA() {
  const [links, setLink] = useState(null);
  const [au, setAU] = useState(0);
  const [cmeStart, setStart] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [half, setHalf] = useState(0);
  const [time, setTime] = useState("");
  const [cmeID, setCMEID] = useState("");
  const [estimated, setEstimated] = useState("");
  const [estimatedShock, setEstimatedShock] = useState("");
  const [blow, setBlow] = useState(true);
  const [location, setLocation] = useState("");
  const [arrival, setArrival] = useState("");
  const [isEarth, setIsEarth] = useState(true);
  const [kp18, setKp18] = useState("");
  const [kp90, setKp90] = useState("");
  const [kp135, setKp135] = useState("");
  const [kp180, setKp180] = useState("");
  const [completion, setCompletion] = useState("");
  const [simulation, setSimulation] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIWSA();

      if (response[response.length - 1].au) {
        setAU(response[response.length - 1].au);
      } else {
        setAU(0);
      }

      if (response[response.length - 1].cmeInputs[0].cmeStartTime) {
        setStart(response[response.length - 1].cmeInputs[0].cmeStartTime);
      } else {
        setStart(0);
      }

      if (response[response.length - 1].cmeInputs[0].latitude) {
        setLatitude(response[response.length - 1].cmeInputs[0].latitude);
      } else {
        setLatitude(0);
      }

      if (response[response.length - 1].cmeInputs[0].longitude) {
        setLongitude(response[response.length - 1].cmeInputs[0].longitude);
      } else {
        setLongitude(0);
      }

      if (response[response.length - 1].cmeInputs[0].speed) {
        setSpeed(response[response.length - 1].cmeInputs[0].speed);
      } else {
        setSpeed(0);
      }

      if (response[response.length - 1].cmeInputs[0].halfAngle) {
        setHalf(response[response.length - 1].cmeInputs[0].halfAngle);
      } else {
        setHalf(0);
      }

      if (response[response.length - 1].cmeInputs[0].cmeid) {
        setCMEID(response[response.length - 1].cmeInputs[0].cmeid);
      } else {
        setCMEID(0);
      }

      if (response[response.length - 1].cmeInputs[0].time21_5) {
        setTime(response[response.length - 1].cmeInputs[0].time21_5);
      } else {
        setTime(0);
      }

      if (response[response.length - 1].impactList[0].location) {
        setLocation(response[response.length - 1].impactList[0].location);
      } else {
        setLocation("");
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>AU: {au}</h1>
        <h1>CME Start Time: {cmeStart}</h1>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitude}</h1>
        <h1>Speed: {speed}</h1>
        <h1>Half Angle: {half}</h1>
        <h1>CME ID: {cmeID}</h1>
        <h1>Time21_5: {time}</h1>
        <h1>Location: {location}</h1>
        <div>
          <h1>Link For Other DONKI Pages</h1>
          <div>
            <h2>
              <Link to="/donki">Link For DonkiCME Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiGST">Link For DonkiGST Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiFLR">Link For DonkiFLR Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiIPS">Link For DonkiIPS Page</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiWSA;
