import { useEffect, useState } from "react";
import {
  DONKICME,
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
function Donki() {
  const [links, setLink] = useState(null);
  const [activityID, setActivity] = useState("");
  const [note, setNote] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cmeaLink, setCMEA] = useState(null);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
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

      if (response[112].cmeAnalyses[0].latitude) {
        setLatitude(response[112].cmeAnalyses[0].latitude);
      } else {
        setLatitude("");
      }

      if (response[112].cmeAnalyses[0].longitude) {
        setLongitude(response[112].cmeAnalyses[0].longitude);
      } else {
        setLongitude("");
      }

      if (response[112].cmeAnalyses[0].link) {
        setCMEA(response[112].cmeAnalyses[0].link);
      } else {
        setCMEA(null);
      }

      if (response[112].instruments[0].displayName) {
        setName1(response[112].instruments[0].displayName);
      } else {
        setName1("");
      }

      if (response[112].instruments[1].displayName) {
        setName2(response[112].instruments[1].displayName);
      } else {
        setName2("");
      }

      if (response[112].instruments[2].displayName) {
        setName3(response[112].instruments[2].displayName);
      } else {
        setName3("");
      }
    }
    fetchData();
  });

  // useEffect(() => {
  //   async function fetchGST() {
  //     const response = await DONKIGST();
  //     if (response[112].link) {
  //       setLink(response[112].link);
  //     } else {
  //       setLink(null);
  //     }

  //     if (response[112].activityID) {
  //       setActivity(response[112].activityID);
  //     } else {
  //       setActivity(null);
  //     }

  //     if (response[112].note) {
  //       setNote(response[112].note);
  //     } else {
  //       setNote(null);
  //     }

  //     if (response[112].cmeAnalyses[0].latitude) {
  //       setLatitude(response[112].cmeAnalyses[0].latitude);
  //     } else {
  //       setLatitude("");
  //     }

  //     if (response[112].cmeAnalyses[0].longitude) {
  //       setLongitude(response[112].cmeAnalyses[0].longitude);
  //     } else {
  //       setLongitude("");
  //     }

  //     if (response[112].cmeAnalyses[0].link) {
  //       setCMEA(response[112].cmeAnalyses[0].link);
  //     } else {
  //       setCMEA(null);
  //     }

  //     if (response[112].instruments[0].displayName) {
  //       setName1(response[112].instruments[0].displayName);
  //     } else {
  //       setName1("");
  //     }

  //     if (response[112].instruments[1].displayName) {
  //       setName2(response[112].instruments[1].displayName);
  //     } else {
  //       setName2("");
  //     }

  //     if (response[112].instruments[2].displayName) {
  //       setName3(response[112].instruments[2].displayName);
  //     } else {
  //       setName3("");
  //     }
  //   }

  //   fetchGST();
  // });
  return (
    <div>
      <div>
        <button className="btn">Choose DONKI</button>
        {/* <a href={DONKIGST}>FLR</a> */}
        <h1>Today's CME Information</h1>
        <h1>Activity ID: {activityID}</h1>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitude}</h1>
        <h2>Name Of Instruments Used: </h2>
        <h2>{name1}</h2>
        <h2>{name2}</h2>
        <h2>{name3}</h2>
        <h2>Note: {note}</h2>
        <h2>
          CME Link: <a href={links}>Click Here For CME information</a>
        </h2>
        <h2>
          CME Analyses Link: <a href={cmeaLink}>Link For CMEA</a>
        </h2>
      </div>
    </div>
  );
}

export default Donki;
