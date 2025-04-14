import { useEffect, useState } from "react";
import { DONKIGST } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiGST() {
  const [links, setLink] = useState(null);
  const [ID, setID] = useState("");
  const [kpIndex, setKpIndex] = useState(0);
  const [observed, setObserved] = useState("");
  const [source, setSource] = useState("");
  const [linked, setLinked] = useState("");
  const [start, setStart] = useState("");
  const [submit, setSubmit] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIGST();

      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }

      if (response[response.length - 1].gstID) {
        setID(response[response.length - 1].gstID);
      } else {
        setID("");
      }

      if (response[response.length - 1].allKpIndex[0].kpIndex) {
        setKpIndex(response[response.length - 1].allKpIndex[0].kpIndex);
      } else {
        setKpIndex(0);
      }

      if (response[response.length - 1].allKpIndex[0].observedTime) {
        setObserved(response[response.length - 1].allKpIndex[0].observedTime);
      } else {
        setObserved("");
      }

      if (response[response.length - 1].allKpIndex[0].source) {
        setSource(response[response.length - 1].allKpIndex[0].source);
      } else {
        setSource("");
      }

      if (response[response.length - 1].linkedEvents[0].activityID) {
        setLinked(response[response.length - 1].linkedEvents[0].activityID);
      } else {
        setLinked("");
      }

      if (response[response.length - 1].startTime) {
        setStart(response[response.length - 1].startTime);
      } else {
        setStart("");
      }

      if (response[response.length - 1].submissionTime) {
        setSubmit(response[response.length - 1].submissionTime);
      } else {
        setSubmit("");
      }
    }
    fetchData();
  });
  return (
    <div>
      <div>
        <h1>Recent GST Information</h1>
        <h1>{ID}</h1>
        <h2>Kp Index: {kpIndex}</h2>
        <h2>Observed Time: {observed}</h2>
        <h2>Source: {source}</h2>
        <h2>Linked Event: {linked}</h2>
        <h2>Start Time: {start}</h2>
        <h2>Submission Time: {submit}</h2>
        <h2>
          Link For GST: <a href={links}>Click Here For The GST Information</a>
        </h2>

        <div>
          <h1>Link For Other DONKI Pages</h1>
          <div>
            <h2>
              <Link to="/donki">Click Here To See The DonkiCME Page</Link>
            </h2>
          </div>

          <div>
            <h2>
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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

export default DonkiGST;
