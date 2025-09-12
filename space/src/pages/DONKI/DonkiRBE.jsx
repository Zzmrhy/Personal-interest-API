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
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIRBE();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }
 
      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }
 
      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("N/A");
      }
 
      if (focusRecord.rbeID) {
        setRBEID(focusRecord.rbeID);
      } else {
        setRBEID("N/A");
      }
 
      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("N/A");
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
      {available ? (
        <div>
          <p id="text">Time Of Event: {event}</p>
          <p id="text">Submission Time: {submit}</p>
          <p id="text">RBE ID: {rbeID}</p>
          <h1>---------------------------------------------------------</h1>
          <h1 id="header">Instruments Used:</h1>
          {instruments ? (
            instruments.map((obj, idx) => (
              <p id="text" key={idx}>
                {obj.displayName}
              </p>
            ))
          ) : (
            <h2 id="failure">No Instrument Found</h2>
          )}
          <h1>---------------------------------------------------------</h1>
          <h1 id="header">Linked Events For RBE:</h1>
          {linked ? (
            linked.map((obj, idx) => (
              <p id="text" key={idx}>
                {obj.activityID}
              </p>
            ))
          ) : (
            <h2 id="failure">No Linked Event Found</h2>
          )}
          <h1>---------------------------------------------------------</h1>
          <p id="text">
            Click This: <a href={links}>Click This For RBE Information</a>
          </p>
        </div>
      ) : (
        <h1 id="failure">
          No Information Is Available, Click Links Below To See Other Pages
          Instead.
        </h1>
      )}
 
      <div>
        <h1 id="header">Link For Other DONKI Pages</h1>
        <div>
          <p id="link">
            <Link to="/donki">Click Here To See The DonkiCME Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
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
  );
}
 
export default DonkiRBE;