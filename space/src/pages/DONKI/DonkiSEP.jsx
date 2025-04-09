import { useEffect, useState } from "react";
import { DONKISEP } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiSEP() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [instrument, setInstrument] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [sep, setSEP] = useState("");
  const [submission, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKISEP();

      if (response[response.length - 1].eventTime) {
        setEvent(response[response.length - 1].eventTime);
      } else {
        setEvent("");
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setInstrument(response[response.length - 1].instruments[0].displayName);
      } else {
        setInstrument("");
      }

      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }

      if (response[response.length - 1].linkedEvents[0].activityID) {
        setLink1(response[response.length - 1].linkedEvents[0].activityID);
      } else {
        setLink1("");
      }

      if (response[response.length - 1].linkedEvents[1].activityID) {
        setLink2(response[response.length - 1].linkedEvents[1].activityID);
      } else {
        setLink2("");
      }

      if (response[response.length - 1].linkedEvents[2].activityID) {
        setLink3(response[response.length - 1].linkedEvents[2].activityID);
      } else {
        setLink3("");
      }

      if (response[response.length - 1].sepID) {
        setSEP(response[response.length - 1].sepID);
      } else {
        setSEP("");
      }

      if (response[response.length - 1].submissionTime) {
        setSubmission(response[response.length - 1].submissionTime);
      } else {
        setSubmission("");
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Recent SEP Information:</h1>
        <h1>Event Time: {event}</h1>
        <h2>Instruments Used:</h2>
        <h3>{instrument}</h3>
        <h2>Linked Event #1: {link1}</h2>
        <h2>Linked Event #2: {link2}</h2>
        <h2>Linked Event #3: {link3}</h2>
        <h2>SEP ID: {sep}</h2>
        <h2>Submission Time: {submission}</h2>
        <h2>
          CLick Here: <a href={links}>Click For SEP Information</a>
        </h2>

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

export default DonkiSEP;
