import { useEffect, useState } from "react";
import { DONKIHSS } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiHSS() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [hss, setHSSID] = useState("");
  const [instrument1, setInstrument1] = useState("");
  const [instrument2, setInstrument2] = useState("");
  const [linked, setLinked] = useState("");
  const [submit, setSubmission] = useState("");
  const [version, setVersion] = useState(0);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIHSS();

      if (response[response.length - 1].eventTime) {
        setEvent(response[response.length - 1].eventTime);
      } else {
        setEvent("N/A");
      }

      if (response[response.length - 1].hssID) {
        setHSSID(response[response.length - 1].hssID);
      } else {
        setHSSID("N/A");
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setInstrument1(
          response[response.length - 1].instruments[0].displayName
        );
      } else {
        setInstrument1("N/A");
      }

      if (response[response.length - 1].instruments[1].displayName) {
        setInstrument2(
          response[response.length - 1].instruments[1].displayName
        );
      } else {
        setInstrument2("N/A");
      }

      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }

      if (response[response.length - 1].linkedEvents) {
        setLinked(response[response.length - 1].linkedEvents);
      } else {
        setLinked("N/A");
      }

      if (response[response.length - 1].submissionTime) {
        setSubmission(response[response.length - 1].submissionTime);
      } else {
        setSubmission("N/A");
      }

      if (response[response.length - 1].versionId) {
        setVersion(response[response.length - 1].versionId);
      } else {
        setVersion(0);
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Event Time: {event}</h1>
        <h1>HSS ID: {hss}</h1>
        <h1>Submission TIme: {submit}</h1>
        <h1>Linked Events: {linked}</h1>
        <h1>Instruments Used:</h1>
        <h2>{instrument1}</h2>
        <h2>{instrument2}</h2>

        <h1>
          Click Here: <a href={links}>Link For HSS</a>
        </h1>
        <div>
          <h1>Links For Other DONKI Pages</h1>
          <div>
            <h2>
              <Link to="/donki">Click To See DonkiCME Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiGST">Click To See DonkiGST Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiIPS">Click To See DonkiIPS Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiSEP">Click To See DonkiSEP Page</Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link to="/donkiMPC">Click To See The DonkiMPC Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiRBE">Click To See The DonkiRBE Page</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiHSS;
