import { useEffect, useState } from "react";
import { DONKIHSS } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiHSS() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [hss, setHSSID] = useState("");
  const [linked, setLinked] = useState(null);
  const [submit, setSubmission] = useState("");
  const [version, setVersion] = useState(0);
  const [impactList, setImpactList] = useState(null);
  const [instruments, setInstruments] = useState(null);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIHSS();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }
 
      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("N/A");
      }
 
      if (focusRecord.hssID) {
        setHSSID(focusRecord.hssID);
      } else {
        setHSSID("N/A");
      }
 
      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }
 
      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }
 
      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("N/A");
      }
 
      if (focusRecord.versionId) {
        setVersion(focusRecord.versionId);
      } else {
        setVersion(0);
      }
    }
    fetchData();
  }, []);
 
  return (
    <div>
      <div>
        {available ? (
          <div>
            <p id="text">Event Time: {event}</p>
            <p id="text">HSS ID: {hss}</p>
            <p id="text">Submission Time: {submit}</p>
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">Instruments Used:</h1>
            {instruments ? (
              instruments.map((obj, idx) => (
                <p id="text" key={idx}>
                  {obj.displayName}
                </p>
              ))
            ) : (
              <h2 id="failure">No instrument Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <h1 id="header">Linked Events For HSS:</h1>
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
              Click Here: <a href={links}>Link For HSS</a>
            </p>
          </div>
        ) : (
          <h1 className="failure">
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
            <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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
            <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
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
 
export default DonkiHSS;