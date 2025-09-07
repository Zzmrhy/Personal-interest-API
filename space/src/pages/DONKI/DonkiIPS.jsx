import { useEffect, useState } from "react";
import { DONKIIPS } from "../../services/api";
import { Link } from "react-router-dom";
 
function DonkiIPS() {
  const [links, setLink] = useState(null);
  const [activity, setActivity] = useState("");
  const [catalog, setCatalog] = useState("");
  const [eventTime, setEvent] = useState("");
  const [instruments, setInstruments] = useState(null);
  const [available, setAvailable] = useState(true);
  const [location, setLocation] = useState("");
  const [submission, setTime] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIIPS();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }
 
      if (focusRecord.activityID) {
        setActivity(focusRecord.activityID);
      } else {
        setActivity("N/A");
      }
 
      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }
 
      if (focusRecord.catalog) {
        setCatalog(focusRecord.catalog);
      } else {
        setCatalog("N/A");
      }
 
      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("N/A");
      }
 
      if (focusRecord.location) {
        setLocation(focusRecord.location);
      } else {
        setLocation("N/A");
      }
 
      if (focusRecord.submissionTime) {
        setTime(focusRecord.submissionTime);
      } else {
        setTime("N/A");
      }
    }
    fetchData();
  }, []);
 
  return (
    <div>
      <div>
        {available ? (
          <div>
            <h1>Recent IPS Information:</h1>
            <h1>{activity}</h1>
            <h1>Catalog: {catalog}</h1>
            <h1>Event Time: {eventTime}</h1>
            <h1>Location: {location}</h1>
            <h1>Submission Time: {submission}</h1>
            <h1>---------------------------------------------------------</h1>
            <h1>Instruments Used: </h1>
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
 
            <h1>
              Click For Information On IPS:
              <a href={links}> Link For IPS</a>
            </h1>
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
 
export default DonkiIPS;