import { useEffect, useState } from "react";
import { DONKIIPS } from "../../services/api";
import { Link } from "react-router-dom";

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

      if (response[response.length - 1].activityID) {
        setActivity(response[response.length - 1].activityID);
      } else {
        setActivity("");
      }

      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }

      if (response[response.length - 1].catalog) {
        setCatalog(response[response.length - 1].catalog);
      } else {
        setCatalog("");
      }

      if (response[response.length - 1].eventTime) {
        setEvent(response[response.length - 1].eventTime);
      } else {
        setEvent("");
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setInstrument1(
          response[response.length - 1].instruments[0].displayName
        );
      } else {
        setInstrument1("");
      }

      if (response[response.length - 1].instruments[1].displayName) {
        setInstrument2(
          response[response.length - 1].instruments[1].displayName
        );
      } else {
        setInstrument2("");
      }

      if (response[response.length - 1].instruments[2].displayName) {
        setInstrument3(
          response[response.length - 1].instruments[2].displayName
        );
      } else {
        setInstrument3("");
      }

      if (response[response.length - 1].location) {
        setLocation(response[response.length - 1].location);
      } else {
        setLocation("");
      }

      if (response[response.length - 1].submissionTime) {
        setTime(response[response.length - 1].submissionTime);
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
            <Link to="/donki">Link For DonkiCME Page</Link>
          </div>

          <div>
            <Link to="/donkiGST">Link For DonkiGST Page</Link>
          </div>

          <div>
            <Link to="/donkiFLR">Link For DonkiFLR Page</Link>
          </div>

          <div>
            <Link to="/donkiSEP">Link For DonkiSEP Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiIPS;
