import { useEffect, useState } from "react";
import {
  DONKICME,
  DONKICMEA,
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
function Donki() {
  const [link, setLink] = useState(null);
  const [activityID, setActivity] = useState("");
  const [note, setNote] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();
      if (response[112].link) {
        setLink(response[112].link);
      } else {
        setLink(null);
      }

      if (response[112].activityID) {
        setActivity(response[112].activityID);
      } else {
        setActivity(null);
      }

      if (response[112].note) {
        setNote(response[112].note);
      } else {
        setNote(null);
      }
    }
    fetchData();
  });
  return (
    <div>
      <h1>Activity ID: {activityID}</h1>
      <h2>Note {note}</h2>
      <a href={link}>Click Here For CME information</a>
    </div>
  );
}

export default Donki;
