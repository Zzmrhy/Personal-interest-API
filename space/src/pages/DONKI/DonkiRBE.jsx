import { useEffect, useState } from "react";
import { DONKIRBE } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiRBE() {
  const [links, setLink] = useState(null);
  const [event, setEvent] = useState("");
  const [instruments, setInstruments] = useState("");
  const [linked, setLinked] = useState("");
  const [rbeID, setRBEID] = useState("");
  const [submit, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIRBE();

      if (response[response.length - 1].eventTime) {
        setEvent(response[response.length - 1].eventTime);
      } else {
        setEvent("");
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setInstruments(
          response[response.length - 1].instruments[0].displayName
        );
      } else {
        setInstruments("");
      }

      if (response[response.length - 1].linkedEvents[0].activityID) {
        setLinked(response[response.length - 1].linkedEvents[0].activityID);
      } else {
        setLinked("");
      }

      if (response[response.length - 1].rbeID) {
        setRBEID(response[response.length - 1].rbeID);
      } else {
        setRBEID("");
      }

      if (response[response.length - 1].submissionTime) {
        setSubmission(response[response.length - 1].submissionTime);
      } else {
        setSubmission("");
      }

      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Time Of Event: {event}</h1>
        <h1>Submission Time: {submit}</h1>
        <h1>Linked Event: {linked}</h1>
        <h1>Instruments Used:</h1>
        <h3>{instruments}</h3>
        <h2>RBE ID: {rbeID}</h2>
        <h2>
          Click This: <a href={links}>Click This For RBE Information</a>
        </h2>
      </div>

      <div>
        <h1>Link For Other DONKI Pages</h1>
        <div>
          <h2>
            <Link to="/donki">Click Here To See DonkiCME Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiGST">Click Here To See DonkiGST Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiFLR">Click Here To See DonkiFLR Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiSEP">Click Here To See DonkiSEP Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiMPC">Click Here To See The DonkiMPC Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to="/donkiHSS">Click Here To See The DonkiHSS Page</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DonkiRBE;
