import { useEffect, useState } from "react";
import { DONKIWSA } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiWSA() {
  const [links, setLink] = useState(null);
  const [au, setAU] = useState(0);
  const [available, setAvailable] = useState(null);
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
  const [impactList, setImpactList] = useState(null);
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
      const focusRecord = response[response.length - 1];

      if (focusRecord.impactList) {
        setImpactList(focusRecord.impactList);
      }

      if (focusRecord.length === 0) {
        setAvailable(null);
      }

      if (focusRecord.au) {
        setAU(focusRecord.au);
      } else {
        setAU(0);
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.cmeInputs[0].cmeStartTime) {
        setStart(focusRecord.cmeInputs[0].cmeStartTime);
      } else {
        setStart(0);
      }

      if (focusRecord.cmeInputs[0].latitude) {
        setLatitude(focusRecord.cmeInputs[0].latitude);
      } else {
        setLatitude(0);
      }

      if (focusRecord.cmeInputs[0].longitude) {
        setLongitude(focusRecord.cmeInputs[0].longitude);
      } else {
        setLongitude(0);
      }

      if (focusRecord.cmeInputs[0].speed) {
        setSpeed(focusRecord.cmeInputs[0].speed);
      } else {
        setSpeed(0);
      }

      if (focusRecord.cmeInputs[0].halfAngle) {
        setHalf(focusRecord.cmeInputs[0].halfAngle);
      } else {
        setHalf(0);
      }

      if (focusRecord.cmeInputs[0].cmeid) {
        setCMEID(focusRecord.cmeInputs[0].cmeid);
      } else {
        setCMEID(0);
      }

      if (focusRecord.cmeInputs[0].time21_5) {
        setTime(focusRecord.cmeInputs[0].time21_5);
      } else {
        setTime(0);
      }

      if (focusRecord.modelCompletionTime) {
        setCompletion(focusRecord.modelCompletionTime);
      } else {
        setCompletion("N/A");
      }

      if (focusRecord.simulationID) {
        setSimulation(focusRecord.simulationID);
      } else {
        setSimulation("N/A");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {available ? (
          <div>
            <h1>Most Recent WSA Information</h1>
            <h1>AU: {au}</h1>
            <h1>CME Start Time: {cmeStart}</h1>
            <h1>Latitude: {latitude}</h1>
            <h1>Longitude: {longitude}</h1>
            <h1>Speed: {speed}</h1>
            <h1>Half Angle: {half}</h1>
            <h1>CME ID: {cmeID}</h1>
            <h1>Time21_5: {time}</h1>
            <h1>Model Completion Time: {completion}</h1>
            <h1>Simulation ID: {simulation}</h1>
            <h1>---------------------------------------------------------</h1>
            <div>
              <h1>Location For WSA:</h1>
              {impactList ? (
                impactList.map((obj, idx) => (
                  <h1 key={idx}>
                    Location {idx + 1}: {obj.location}
                  </h1>
                ))
              ) : (
                <h2>No Location Found</h2>
              )}
              <h1>---------------------------------------------------------</h1>
              <h1>Arrival Time For WSA:</h1>
              {impactList ? (
                impactList.map((obj, idx) => (
                  <h1 key={idx}>
                    Arrival Time {idx + 1}: {obj.arrivalTime}
                  </h1>
                ))
              ) : (
                <h2>No Arrival Time Found</h2>
              )}
            </div>
            <h1>---------------------------------------------------------</h1>
            <h1>
              Click Here: <a href={links}>Click Here For WSA Information</a>
            </h1>
          </div>
        ) : (
          <h1>
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}

        <div>
          <h1>Link For Other DONKI Pages</h1>
          <div>
            <h2>
              <Link to="/donki">Click Here To See The DonkiCME Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiNotifications">
                Click Here To See The DonkiNotifications Page
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiWSA;
