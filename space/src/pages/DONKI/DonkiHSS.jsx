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
            <h1>Event Time: {event}</h1>
            <h1>HSS ID: {hss}</h1>
            <h1>Submission TIme: {submit}</h1>
            <h1>---------------------------------------------------------</h1>
            <h1>Instruments Used:</h1>
            {instruments ? (
              instruments.map((obj, idx) => (
                <h1 key={idx}>
                  Instrument {idx + 1}: {obj.displayName}
                </h1>
              ))
            ) : (
              <h2>No instrument Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <h1>Linked Events For HSS:</h1>
            {linked ? (
              linked.map((obj, idx) => (
                <h1 key={idx}>
                  Linked Event #{idx + 1}: {obj.activityID}
                </h1>
              ))
            ) : (
              <h2>No Linked Event Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
            <h1>
              Click Here: <a href={links}>Link For HSS</a>
            </h1>
          </div>
        ) : (
          <h1>
            No Information Is Available, Click Links Below To See Other Pages
            Instead.
          </h1>
        )}

        <div>
          <h1>Links For Other DONKI Pages</h1>
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
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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

export default DonkiHSS;
