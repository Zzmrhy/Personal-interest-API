import "../../css/DONKI.css";
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
  const [available, setAvailable] = useState(true);
  const [note, setNote] = useState("");
  const [peak, setPeak] = useState("");
  const [source, setSource] = useState("");
  const [submission, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIFLR();
      const focusRecord = response[response.length - 1];
 
      if (!focusRecord) {
        setAvailable(null);
      }
 
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
      {available ? (
        <div>
          <h1 id="header">Active Region Number: {region}</h1>
          <p id="text">FLR ID: {ID}</p>
          <p id="text">Begin Time: {begin}</p>
          <p id="text">End Time: {end}</p>
          <p id="text">Catalog: {catalog}</p>
          <p id="text">Class Type: {type}</p>
          <p id="text">Peak Time: {peak}</p>
          <h1>---------------------------------------------------------</h1>
          <h1 id="header">Instruments Used:</h1>
          {instrument ? (
            instrument.map((obj, idx) => (
              <p id="text" key={idx}>
                {obj.displayName}
              </p>
            ))
          ) : (
            <h2 id="failure">No Instrument Found</h2>
          )}
          <h1>---------------------------------------------------------</h1>
          {linked ? (
            linked.map((obj, idx) => (
              <div>
                <h1 id="header">Linked Event For FLR</h1>
                <p key={idx} id="text">
                  {obj.activityID}
                </p>
              </div>
            ))
          ) : (
            <h2 id="failure">No Linked Event Found</h2>
          )}
          <h1>---------------------------------------------------------</h1>
          <p id="text">Source Location: {source}</p>
          <p id="text">Submission Time: {submission}</p>
          <p id="text">Note: {note}</p>
          <p id="text">
            Click For Website: <a href={links}>Link For FLR</a>
          </p>
        </div>
      ) : (
        <h1 id="failure">
          No Information Is Available, Click Links Below To See Other Pages
          Instead.
        </h1>
      )}
 
      <div>
        <h1 id="header">Links For Other DONKI Pages</h1>
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
            <Link to="/donkiSEP">Click Here To See The DonkiSEP Page</Link>
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
  );
}
 
export default DonkiFLR;