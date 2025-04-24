import { useEffect, useState } from "react";
import { DONKIFLR } from "../../services/api";
import { Link } from "react-router-dom";
function DonkiFLR() {
  const [links, setLink] = useState(null);
  const [ID, setID] = useState("");
  const [region, setRegion] = useState(0);
  const [catalog, setCatalog] = useState("");
  const [type, setType] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [instrument, setInstrument] = useState(null);
  const [linked, setLinked] = useState(null);
  const [note, setNote] = useState("");
  const [peak, setPeak] = useState("");
  const [source, setSource] = useState("");
  const [submission, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIFLR();
      const focusRecord = response[response.length - 1];

      if (focusRecord.instruments) {
        setInstrument(focusRecord.instruments);
      }

      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      }

      if (focusRecord.flrID) {
        setID(focusRecord.flrID);
      } else {
        setID("N/A");
      }

      if (focusRecord.activeRegionNum) {
        setRegion(focusRecord.activeRegionNum);
      } else {
        setRegion(0);
      }

      if (focusRecord.catalog) {
        setCatalog(focusRecord.catalog);
      } else {
        setCatalog("N/A");
      }

      if (focusRecord.classType) {
        setType(focusRecord.classType);
      } else {
        setType("N/A");
      }

      if (focusRecord.beginTime) {
        setBegin(focusRecord.beginTime);
      } else {
        setBegin("N/A");
      }

      if (focusRecord.endTime) {
        setEnd(focusRecord.endTime);
      } else {
        setEnd("N/A");
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.note) {
        setNote(focusRecord.note);
      } else {
        setNote("N/A");
      }

      if (focusRecord.peakTime) {
        setPeak(focusRecord.peakTime);
      } else {
        setPeak("N/A");
      }

      if (focusRecord.sourceLocation) {
        setSource(focusRecord.sourceLocation);
      } else {
        setSource("N/A");
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
        <h1>Active Region Number: {region}</h1>
        <h1>FLR ID: {ID}</h1>
        <h1>Begin Time: {begin}</h1>
        <h1>End Time: {end}</h1>
        <h1>Catalog: {catalog}</h1>
        <h1>Class Type: {type}</h1>
        <h1>Peak Time: {peak}</h1>
        <h1>---------------------------------------------------------</h1>
        <h1>Instruments Used:</h1>
        {instrument ? (
          instrument.map((obj, idx) => (
            <h1 key={idx}>
              Instrument #{idx + 1}: {obj.displayName}
            </h1>
          ))
        ) : (
          <h2>No Instrument Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        {linked ? (
          linked.map((obj, idx) => (
            <div>
              <h1>Linked Event For FLR</h1>
              <h1 key={idx}>
                Linked Event #{idx + 1}: {obj.activityID}
              </h1>
            </div>
          ))
        ) : (
          <h2>No Linked Event Found</h2>
        )}
        <h1>---------------------------------------------------------</h1>
        <h1>Source Location: {source}</h1>
        <h1>Submission Time: {submission}</h1>
        <h1>Note: {note}</h1>
        <h1>
          Click For Website: <a href={links}>Link For FLR</a>
        </h1>

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
              <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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

export default DonkiFLR;
