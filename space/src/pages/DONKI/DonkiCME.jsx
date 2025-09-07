import "../../css/Donki.css";
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
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
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
        setLatitude("N/A");
      }
 
      if (focusRecord.cmeAnalyses[0].longitude) {
        setLongitude(focusRecord.cmeAnalyses[0].longitude);
      } else {
        setLongitude("N/A");
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
        {available ? (
          <div>
            {/* <button className="btn">Choose DONKI</button> */}
            <h1 id="header">Today's CME Information</h1>
            <p id="text">Activity ID: {activityID}</p>
            <p id="text">Latitude: {latitude}</p>
            <p id="text">Longitude: {longitude}</p>
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">Instruments Used:</h1>
            {instruments ? (
              instruments.map((obj, idx) => (
                <p key={idx} id="text">
                  Instrument {idx + 1}: {obj.displayName}
                </p>
              ))
            ) : (
              <h2 id="failure">No Instrument Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <p id="text">Note: {note}</p>
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">
              CME Link: <a href={links}>Click Here For CME information</a>
            </h1>
            <h1 id="header">
              CME Analyses Link: <a href={cmeaLink}>Link For CMEA</a>
            </h1>
          </div>
        ) : (
          <h1 id="failure">
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}
        <h1>---------------------------------------------------------</h1>
        <div>
          <h1 id="header">Other DONKI Pages</h1>
          <div>
            <p id="link">
              <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiWSA">Click Here To See The DonkiWSA Page</Link>
            </p>
          </div>
 
          <div>
            <p id="link">
              <Link to="/donkiNotifications">
                Click Here To See The DonkiNotifications Page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Donki;