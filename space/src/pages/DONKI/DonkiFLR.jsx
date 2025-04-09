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
  const [instument, setInstrument] = useState("");
  const [linked, setLinked] = useState("");
  const [note, setNote] = useState("");
  const [peak, setPeak] = useState("");
  const [source, setSource] = useState("");
  const [submission, setSubmission] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKIFLR();

      if (response[response.length - 1].flrID) {
        setID(response[response.length - 1].flrID);
      } else {
        setID("");
      }

      if (response[response.length - 1].activeRegionNum) {
        setRegion(response[response.length - 1].activeRegionNum);
      } else {
        setRegion(0);
      }

      if (response[response.length - 1].catalog) {
        setCatalog(response[response.length - 1].catalog);
      } else {
        setCatalog("");
      }

      if (response[response.length - 1].classType) {
        setType(response[response.length - 1].classType);
      } else {
        setType("");
      }

      if (response[response.length - 1].beginTime) {
        setBegin(response[response.length - 1].beginTime);
      } else {
        setBegin("");
      }

      if (response[response.length - 1].endTime) {
        setEnd(response[response.length - 1].endTime);
      } else {
        setEnd("");
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setInstrument(response[response.length - 1].instruments[0].displayName);
      } else {
        setInstrument("");
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

      if (response[response.length - 1].note) {
        setNote(response[response.length - 1].note);
      } else {
        setNote("");
      }

      if (response[response.length - 1].peakTime) {
        setPeak(response[response.length - 1].peakTime);
      } else {
        setPeak("");
      }

      if (response[response.length - 1].sourceLocation) {
        setSource(response[response.length - 1].sourceLocation);
      } else {
        setSource("");
      }

      if (response[response.length - 1].submissionTime) {
        setSubmission(response[response.length - 1].submissionTime);
      } else {
        setSubmission("");
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Active Region Number: {region}</h1>
        <h1>FLR ID: {ID}</h1>
        <h1>Begin Time: {begin}</h1>
        <h1>End Time: {end}</h1>
        <h2>Catalog: {catalog}</h2>
        <h2>Class Type: {type}</h2>
        <h2>Instruments Used:</h2>
        <h3>{instument}</h3>
        <h2>Linked Event: {linked}</h2>
        <h2>Note: {note}</h2>
        <h2>
          Click For Website: <a href={links}>Link For FLR</a>
        </h2>
        <h2>Peak Time: {peak}</h2>
        <h2>Source Location: {source}</h2>
        <h2>Submission Time: {submission}</h2>

        <div>
          <h1>Links For Other DONKI Pages</h1>
          <div>
            <Link to="/donkiCME">Click To See DonkiCME Page</Link>
          </div>

          <div>
            <Link to="/donkiGST">Click To See DonkiGST Page</Link>
          </div>

          <div>
            <Link to="/donkiIPS">Click To See DonkiIPS Page</Link>
          </div>

          <div>
            <Link to="/donkiSEP">Click To See DonkiSEP Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiFLR;
