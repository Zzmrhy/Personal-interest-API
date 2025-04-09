import { useEffect, useState } from "react";
import { DONKICME } from "../../services/api";
import { Link } from "react-router-dom";
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
      if (response[response.length - 1].link) {
        setLink(response[response.length - 1].link);
      } else {
        setLink(null);
      }

      if (response[response.length - 1].activityID) {
        setActivity(response[response.length - 1].activityID);
      } else {
        setActivity(null);
      }

      if (response[response.length - 1].note) {
        setNote(response[response.length - 1].note);
      } else {
        setNote(null);
      }

      if (response[response.length - 1].cmeAnalyses[0].latitude) {
        setLatitude(response[response.length - 1].cmeAnalyses[0].latitude);
      } else {
        setLatitude("");
      }

      if (response[response.length - 1].cmeAnalyses[0].longitude) {
        setLongitude(response[response.length - 1].cmeAnalyses[0].longitude);
      } else {
        setLongitude("");
      }

      if (response[response.length - 1].cmeAnalyses[0].link) {
        setCMEA(response[response.length - 1].cmeAnalyses[0].link);
      } else {
        setCMEA(null);
      }

      if (response[response.length - 1].instruments[0].displayName) {
        setName1(response[response.length - 1].instruments[0].displayName);
      } else {
        setName1("");
      }

      if (response[response.length - 1].instruments[1].displayName) {
        setName2(response[response.length - 1].instruments[1].displayName);
      } else {
        setName2("");
      }

      if (response[response.length - 1].instruments[2].displayName) {
        setName3(response[response.length - 1].instruments[2].displayName);
      } else {
        setName3("");
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        {/* <button className="btn">Choose DONKI</button> */}
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
        <div>
          <h1>Other DONKI Pages</h1>
          <div>
            <Link to="/donkiGST">Click Here To See The DonkiGST Page</Link>
          </div>

          <div>
            <Link to="/donkiIPS">Click Here To See The DonkiIPS Page</Link>
          </div>

          <div>
            <Link to="/donkiFLR">Click Here To See The DonkiFLR Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donki;
