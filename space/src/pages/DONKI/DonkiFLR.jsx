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
        <h1>Catalog: {catalog}</h1>
        <h1>Class Type: {type}</h1>
        <h1>Linked Event: {linked}</h1>
        <h1>Peak Time: {peak}</h1>
        <h1>---------------------------------------------------------</h1>
        <h1>Instruments Used:</h1>
        <h1>{instument}</h1>
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
