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
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();
      if (response.link) {
        setLink(response.link);
      } else {
        setLink(null);
      }
    }
    fetchData();
  });
  return (
    <div>
      <h1>Website For CME (Coronal Mass Ejection)</h1>
      <a href={link}>Thing</a>
    </div>
  );
}

export default Donki;
