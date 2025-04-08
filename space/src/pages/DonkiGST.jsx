import { useEffect, useState } from "react";
import {
  DONKIGST,
  DONKIIPS,
  DONKIFLR,
  DONKISEP,
  DONKIMPC,
  DONKIRBE,
  DONKIHSS,
  DONKIWSA,
  DONKINotifications,
} from "../services/api";
import "../css/Donki.css";
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

      if (response[4].link) {
        setLink(response[4].link);
      } else {
        setLink(null);
      }

      if (response[4].gstID) {
        setID(response[4].gstID);
      } else {
        setID("");
      }

      if (response[4].allKpIndex[0].kpIndex) {
        setKpIndex(response[4].allKpIndex[0].kpIndex);
      } else {
        setKpIndex(0);
      }

      if (response[4].allKpIndex[0].observedTime) {
        setObserved(response[4].allKpIndex[0].observedTime);
      } else {
        setObserved("");
      }

      if (response[4].allKpIndex[0].source) {
        setSource(response[4].allKpIndex[0].source);
      } else {
        setSource("");
      }

      if (response[4].linkedEvents[0].activityID) {
        setLinked(response[4].linkedEvents[0].activityID);
      } else {
        setLinked("");
      }

      if (response[4].startTime) {
        setStart(response[4].startTime);
      } else {
        setStart("");
      }

      if (response[4].submissionTime) {
        setSubmit(response[4].submissionTime);
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
            <Link to="/donki">Click Here For DonkiCME Page</Link>
          </div>
          <div>
            <Link to="/donkiIPS">Click Here For DonkiIPS Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonkiGST;
