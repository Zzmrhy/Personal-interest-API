import { useEffect, useState } from "react";
import { DONKISEP } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiSEP() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [instrument, setInstrument] = useState(null);
  const [link, setLinked] = useState(null);
  const [sep, setSEP] = useState("");
  const [submission, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKISEP();
      const focusRecord = response[response.length - 1];

      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }

      if (focusRecord.instruments) {
        setInstrument(focusRecord.instruments);
      }

      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("");
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.sepID) {
        setSEP(focusRecord.sepID);
      } else {
        setSEP("");
      }

      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Recent SEP Information:</h1>
        <h1>Event Time: {event}</h1>
        <h1>SEP ID: {sep}</h1>
        <h1>Submission Time: {submission}</h1>
        <h1>---------------------------------------------------------</h1>
        <h1>Instruments Used:</h1>
        {instrument ? (
          instrument.map((obj, idx) => (
            <h1 key={idx}>
              Instrument {idx + 1}: {obj.displayName}
            </h1>
          ))
        ) : (
          <h2>No Instrument Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        <h1>Linked Events To SEP:</h1>
        {link ? (
          link.map((obj, idx) => (
            <h1 key={idx}>
              #{idx + 1}: {obj.activityID}
            </h1>
          ))
        ) : (
          <h2>No Linked Event Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>

        <h1>
          CLick Here: <a href={links}>Click For SEP Information</a>
        </h1>

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

export default DonkiSEP;
