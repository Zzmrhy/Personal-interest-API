import { useEffect, useState } from "react";
import { DONKIGST } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiGST() {
  const [links, setLink] = useState(null);
  const [ID, setID] = useState("");
  const [allKpIndex, setAllKpIndex] = useState(null);
  const [linked, setLinked] = useState(null);
  const [start, setStart] = useState("");
  const [submit, setSubmit] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIGST();
      const focusRecord = response[response.length - 1];

      if (focusRecord.allKpIndex) {
        setAllKpIndex(focusRecord.allKpIndex);
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.gstID) {
        setID(focusRecord.gstID);
      } else {
        setID("");
      }

      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }

      if (focusRecord.startTime) {
        setStart(focusRecord.startTime);
      } else {
        setStart("");
      }

      if (focusRecord.submissionTime) {
        setSubmit(focusRecord.submissionTime);
      } else {
        setSubmit("");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>Recent GST Information</h1>
        <h1>GST ID: {ID}</h1>
        <h1>Start Time: {start}</h1>
        <h1>Submission Time: {submit}</h1>
        <h1>---------------------------------------------------------</h1>
        {allKpIndex ? (
          allKpIndex.map((obj, idx) => (
            <div>
              <h1 key={"time-" + idx}>Observed Time: {obj.observedTime}</h1>
              <h1 key={"kpidx-" + idx}>Kp Index: {obj.kpIndex}</h1>
              <h1 key={"source-" + idx}>Source: {obj.source}</h1>
              <h1>--------------------------------------------</h1>
            </div>
          ))
        ) : (
          <h2>No values found</h2>
        )}

        <h1>Linked Events For GST</h1>
        {linked ? (
          linked.map((obj, idx) => (
            <h1 key={idx}>
              #{idx + 1}: {obj.activityID}
            </h1>
          ))
        ) : (
          <h2>No Linked Event Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>

        <h1>
          Link For GST: <a href={links}>Click Here For The GST Information</a>
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
