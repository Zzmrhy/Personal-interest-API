import { useEffect, useState } from "react";
import { DONKICME } from "../../services/api";
import { Link } from "react-router-dom";
function Donki() {
  const [links, setLink] = useState(null);
  const [activityID, setActivity] = useState("");
  const [note, setNote] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cmeaLink, setCMEA] = useState(null);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [instruments, setInstruments] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();
      const focusRecord = response[response.length - 1];

      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.activityID) {
        setActivity(focusRecord.activityID);
      } else {
        setActivity(null);
      }

      if (focusRecord.note) {
        setNote(focusRecord.note);
      } else {
        setNote(null);
      }

      if (focusRecord.cmeAnalyses[0].latitude) {
        setLatitude(focusRecord.cmeAnalyses[0].latitude);
      } else {
        setLatitude("");
      }

      if (focusRecord.cmeAnalyses[0].longitude) {
        setLongitude(focusRecord.cmeAnalyses[0].longitude);
      } else {
        setLongitude("");
      }

      if (focusRecord.cmeAnalyses[0].link) {
        setCMEA(focusRecord.cmeAnalyses[0].link);
      } else {
        setCMEA(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {/* <button className="btn">Choose DONKI</button> */}
        <h1>Today's CME Information</h1>
        <h1>Activity ID: {activityID}</h1>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitude}</h1>
        <h1>---------------------------------------------------------</h1>
        <h1>Instruments Used:</h1>
        {instruments ? (
          instruments.map((obj, idx) => (
            <h1 key={idx}>
              Instrument {idx + 1}: {obj.displayName}
            </h1>
          ))
        ) : (
          <h2>No values found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        <h1>Note: {note}</h1>
        <h1>---------------------------------------------------------</h1>
        <h1>
          CME Link: <a href={links}>Click Here For CME information</a>
        </h1>
        <h1>
          CME Analyses Link: <a href={cmeaLink}>Link For CMEA</a>
        </h1>
        <div>
          <h1>Other DONKI Pages</h1>
          <div>
            <h2>
              <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
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
              <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiWSA">Click Here To See The DonkiWSA Page</Link>
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

export default Donki;
