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
  const [linked, setLinked] = useState("");
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

      if (focusRecord.flrID) {
        setID(focusRecord.flrID);
      } else {
        setID("");
      }

      if (focusRecord.activeRegionNum) {
        setRegion(focusRecord.activeRegionNum);
      } else {
        setRegion(0);
      }

      if (focusRecord.catalog) {
        setCatalog(focusRecord.catalog);
      } else {
        setCatalog("");
      }

      if (focusRecord.classType) {
        setType(focusRecord.classType);
      } else {
        setType("");
      }

      if (focusRecord.beginTime) {
        setBegin(focusRecord.beginTime);
      } else {
        setBegin("");
      }

      if (focusRecord.endTime) {
        setEnd(focusRecord.endTime);
      } else {
        setEnd("");
      }

      if (focusRecord.link) {
        setLink(focusRecord.link);
      } else {
        setLink(null);
      }

      if (focusRecord.linkedEvents) {
        setLinked(focusRecord.linkedEvents);
      } else {
        setLinked("N/A");
      }

      if (focusRecord.note) {
        setNote(focusRecord.note);
      } else {
        setNote("");
      }

      if (focusRecord.peakTime) {
        setPeak(focusRecord.peakTime);
      } else {
        setPeak("");
      }

      if (focusRecord.sourceLocation) {
        setSource(focusRecord.sourceLocation);
      } else {
        setSource("");
      }

      if (focusRecord.submissionTime) {
        setSubmission(focusRecord.submissionTime);
      } else {
        setSubmission("");
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
        <h1>Linked Event: {linked}</h1>
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
          <h2>No values found</h2>
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
