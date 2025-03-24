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
  const [donki, setDonki] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await DONKICME();

      if (response.link) {
        setDonki(response.link);
      } else {
        setDonki("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Information on CME (Coronal Mass Ejection)</h1>
      <p>{donki}</p>
    </div>
  );
}

export default Donki;
