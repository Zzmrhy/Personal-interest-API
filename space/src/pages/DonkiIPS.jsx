import { useEffect, useState } from "react";
import { DONKIIPS } from "../services/api";
import { Link } from "react-router-dom";
import "../css/Donki.css";
import DonkiGST from "./DonkiGST";
import DonkiCME from "./DonkiCME";
function DonkiIPS() {
  const [links, setLink] = useState(null);
  const [activity, setActivity] = useState("");
  const [catalog, setCatalog] = useState("");
  const [eventTime, setEvent] = useState("");
  const [instrument1, setInstrument1] = useState("");
  const [instrument2, setInstrument2] = useState("");
  const [instrument3, setInstrument3] = useState("");
  const [location, setLocation] = useState("");
  const [submission, setTime] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIIPS();

      if (response[9].activityID) {
        setActivity(response[9].activityID);
      } else {
        setActivity("");
      }

      if (response[9].link) {
        setLink(response[9].link);
      } else {
        setLink(null);
      }

      if (response[9].catalog) {
        setCatalog(response[9].catalog);
      } else {
        setCatalog("");
      }

      if (response[9].eventTime) {
        setEvent(response[9].eventTime);
      } else {
        setEvent("");
      }

      if (response[9].instruments[0].displayName) {
        setInstrument1(response[9].instruments[0].displayName);
      } else {
        setInstrument1("");
      }

      if (response[9].instruments[1].displayName) {
        setInstrument2(response[9].instruments[1].displayName);
      } else {
        setInstrument2("");
      }

      if (response[9].instruments[2].displayName) {
        setInstrument3(response[9].instruments[2].displayName);
      } else {
        setInstrument3("");
      }

      if (response[9].location) {
        setLocation(response[9].location);
      } else {
        setLocation("");
      }

      if (response[9].submissionTime) {
        setTime(response[9].submissionTime);
      } else {
        setTime("");
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Recent IPS Information:</h1>
        <h1>{activity}</h1>
        <h2>Catalog: {catalog}</h2>
        <h2>Event Time: {eventTime}</h2>
        <h2>Instruments Used: </h2>
        <h3>{instrument1}</h3>
        <h3>{instrument2}</h3>
        <h3>{instrument3}</h3>
        <h2>Location: {location}</h2>
        <h2>Submission Time: {submission}</h2>
        <h2>
          Click For Information On IPS:
          <a href={links}> Link For IPS</a>
        </h2>

        <div>
          <h1>Link For Other DONKI Pages</h1>
          <div>
            <Link to="/donki">Link For CME</Link>
          </div>

          <div>
            <Link to="/donkiGST">Link For GST</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiIPS;
