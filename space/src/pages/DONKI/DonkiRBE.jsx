import { useEffect, useState } from "react";
import { DONKIRBE } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiRBE() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [rbeID, setRBEID] = useState("");
  const [submit, setSubmission] = useState("");
  const [instruments, setInstruments] = useState(null);
  const [linked, setLinked] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIRBE();
      const focusRecord = response[response.length - 1];

      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }

      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }

      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("");
      }

      if (focusRecord.rbeID) {
        setRBEID(focusRecord.rbeID);
      } else {
        setRBEID("");
      }

      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("");
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Time Of Event: {event}</h1>
        <h1>Submission Time: {submit}</h1>

        <h1>RBE ID: {rbeID}</h1>
        <h1>---------------------------------------------------------</h1>
        {instruments ? (
          instruments.map((obj, idx) => (
            <h1 key={idx}>
              Instrument {idx + 1}: {obj.displayName}
            </h1>
          ))
        ) : (
          <h2>No Instrument Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        <h1>Linked Events For RBE:</h1>
        {linked ? (
          linked.map((obj, idx) => (
            <h1 key={idx}>
              Linked Event {idx + 1}: {obj.activityID}
            </h1>
          ))
        ) : (
          <h2>No Linked Event Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        <h1>
          Click This: <a href={links}>Click This For RBE Information</a>
        </h1>
      </div>

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
            <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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
  );
}

export default DonkiRBE;
