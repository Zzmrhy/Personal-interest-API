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
  const [link, setLink] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();
      if (response.note) {
        setLink(response.note);
      } else {
        setLink("");
      }
    }
    fetchData();
  });
  return (
    <div>
      <p>{link}</p>
    </div>
  );
}

export default Donki;
