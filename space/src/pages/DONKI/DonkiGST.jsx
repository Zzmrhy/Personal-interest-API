import "../../css/DONKI.css";
import { useEffect, useState } from "react";
import { DONKIGST } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiGST() {
  const [links, setLink] = useState(null);
  const [ID, setID] = useState("");
  const [allKpIndex, setAllKpIndex] = useState(null);
  const [linked, setLinked] = useState(null);
  const [available, setAvailable] = useState(true);
  const [start, setStart] = useState("");
  const [submit, setSubmit] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIGST();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
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
        setID("N/A");
      }
 
      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }
 
      if (focusRecord.startTime) {
        setStart(focusRecord.startTime);
      } else {
        setStart("N/A");
      }
 
      if (focusRecord.submissionTime) {
        setSubmit(focusRecord.submissionTime);
      } else {
        setSubmit("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>
        {available ? (
          <div>
            <h1 id="header">Recent GST Information</h1>
            <p id="text">GST ID: {ID}</p>
            <p id="text">Start Time: {start}</p>
            <p id="text">Submission Time: {submit}</p>
            <h1>---------------------------------------------------------</h1>
            {allKpIndex ? (
              allKpIndex.map((obj, idx) => (
                <div>
                  <p id="text" key={"time-" + idx}>
                    Observed Time: {obj.observedTime}
                  </p>
                  <p id="text" key={"kpidx-" + idx}>
                    Kp Index: {obj.kpIndex}
                  </p>
                  <p id="text" key={"source-" + idx}>
                    Source: {obj.source}
                  </p>
                  <h1>--------------------------------------------</h1>
                </div>
              ))
            ) : (
              <h2 id="failure">No values found</h2>
            )}
 
            <h1 id="header">Linked Events For GST</h1>
            {linked ? (
              linked.map((obj, idx) => (
                <p id="text" key={idx}>
                  #{idx + 1}: {obj.activityID}
                </p>
              ))
            ) : (
              <h2 id="failure">No Linked Event Found</h2>
            )}
            <h1>---------------------------------------------------------</h1>
 
            <p id="text">
              Link For GST:{" "}
              <a href={links}>Click Here For The GST Information</a>
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
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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
 
export default DonkiGST;