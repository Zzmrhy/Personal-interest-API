import { useEffect, useState } from "react";
import { DONKISEP } from "../../services/api";
import { Link } from "react-router-dom";
 
function DonkiSEP() {
  const [links, setLink] = useState(null);
  const [available, setAvailable] = useState(true);
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
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }
 
      if (focusRecord.instruments) {
        setInstrument(focusRecord.instruments);
      }
 
      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("N/A");
      }
 
      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }
 
      if (focusRecord.sepID) {
        setSEP(focusRecord.sepID);
      } else {
        setSEP("N/A");
      }
 
      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("N/A");
      }
    }
    fetchData();
  }, []);
 
  return (
    <div>
      <div>
        {available ? (
          <div>
            <h1 id="header">Recent SEP Information:</h1>
            <p id="text">Event Time: {event}</p>
            <p id="text">SEP ID: {sep}</p>
            <p id="text">Submission Time: {submission}</p>
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">Instruments Used:</h1>
            {instrument ? (
              instrument.map((obj, idx) => (
                <p id="text" key={idx}>
                  {obj.displayName}
                </p>
              ))
            ) : (
              <h2 id="failure">No Instrument Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">Linked Events To SEP:</h1>
            {link ? (
              link.map((obj, idx) => (
                <p id="text" key={idx}>
                  {obj.activityID}
                </p>
              ))
            ) : (
              <h2 id="failure">No Linked Event Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <p id="text">
              CLick Here: <a href={links}>Click For SEP Information</a>
            </p>
          </div>
        ) : (
          <h1 id="failure">
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}
 
        <div>
        <h1 id="header">Links For Other DONKI Pages</h1>
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
            <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
          </p>
        </div>
 
        <div>
          <p id="link">
            <Link to="/donkiRBE">Click Here To See The DonkiRBE Page</Link>
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
 
export default DonkiSEP;