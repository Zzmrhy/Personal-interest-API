import { useEffect, useState } from "react";
import { DONKIIPS } from "../../services/api";
import { Link } from "react-router-dom";

function DonkiIPS() {
  const [links, setLink] = useState(null);
  const [activity, setActivity] = useState("");
  const [catalog, setCatalog] = useState("");
  const [eventTime, setEvent] = useState("");
  const [instruments, setInstruments] = useState(null);
  const [location, setLocation] = useState("");
  const [submission, setTime] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIIPS();
      const focusRecord = response[response.length - 1];

      if (focusRecord.instruments) {
        setInstruments(focusRecord.instruments);
      }

      if (focusRecord.activityID) {
        setActivity(focusRecord.activityID);
      } else {
        setActivity("");
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.catalog) {
        setCatalog(focusRecord.catalog);
      } else {
        setCatalog("");
      }

      if (focusRecord.eventTime) {
        setEvent(focusRecord.eventTime);
      } else {
        setEvent("");
      }

      if (focusRecord.location) {
        setLocation(focusRecord.location);
      } else {
        setLocation("");
      }

      if (focusRecord.submissionTime) {
        setTime(focusRecord.submissionTime);
      } else {
        setTime("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
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
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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

export default DonkiIPS;
