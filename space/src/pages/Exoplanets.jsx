import { Exoplanets } from "../services/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ExoSearch from "../components/ExoplanetSearch";
function Exoplanet() {
  const [searchIndex] = useSearchParams();
  let index = searchIndex.get("index") ? searchIndex.get("index") : 0;
  const [activeIdx, setActiveIndex] = useState(index);
  const [name, setName] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [desc, setDesc] = useState("");
  const [discfac, setDiscFac] = useState("");
  const [discIn, setDiscIn] = useState("");
  const [discLoc, setDiscLoc] = useState("");
  const [discPub, setDiscPub] = useState("");
  const [discYear, setDiscYear] = useState(0);
  const [host, setHost] = useState("");
  const [release, setReleased] = useState("");
  const [type, setType] = useState("");
  const [ref, setRef] = useState("");
  const [age1, setAge1] = useState("");
  const [age2, setAge2] = useState("");
  const [age3, setAge3] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Exoplanets();

      if (index < 0 || index > response.length - 1) {
        alert(
          "You went out of bounds for index, information will be changed to index 0"
        );
        index = 0;
        setActiveIndex(index);
      }

      if (response[index].hostname) {
        setHost(response[index].hostname);
      } else {
        setHost("N/A");
      }

      if (response[index].pl_name) {
        setName(response[index].pl_name);
      } else {
        setName("N/A");
      }

      if (response[index].discoverymethod) {
        setDiscovery(response[index].discoverymethod);
      } else {
        setDiscovery("N/A");
      }

      if (response[index].decstr) {
        setDesc(response[index].decstr);
      } else {
        setDesc("N/A");
      }

      if (response[index].disc_facility) {
        setDiscFac(response[index].disc_facility);
      } else {
        setDiscFac("N/A");
      }

      if (response[index].disc_instrument) {
        setDiscIn(response[index].disc_instrument);
      } else {
        setDiscIn("N/A");
      }

      if (response[index].disc_locale) {
        setDiscLoc(response[index].disc_locale);
      } else {
        setDiscLoc("N/A");
      }

      if (response[index].disc_pubdate) {
        setDiscPub(response[index].disc_pubdate);
      } else {
        setDiscPub("N/A");
      }

      if (response[index].disc_year) {
        setDiscYear(response[index].disc_year);
      } else {
        setDiscYear(0);
      }

      if (response[index].releasedate) {
        setReleased(response[index].releasedate);
      } else {
        setReleased(0);
      }

      if (response[index].soltype) {
        setType(response[index].soltype);
      } else {
        setType(0);
      }

      if (response[index].pl_refname) {
        setRef(response[index].pl_refname);
      } else {
        setRef("N/A");
      }

      if (response[index].st_age) {
        setAge1(response[index].st_age);
      } else {
        setAge1("N/A");
      }

      if (response[index].st_ageerr1) {
        setAge2(response[index].st_ageerr1);
      } else {
        setAge2("N/A");
      }

      if (response[index].st_ageerr2) {
        setAge3(response[index].st_ageerr2);
      } else {
        setAge3("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        (Note: To See Any Information, You'll Need To Gain Access To A {""}
        <a href="https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+tran_flag=1+and+default_flag=1+order+by+pl_name&format=json">
          Temporary Server
        </a>
        .
      </h1>
      <h1>
        Page Is Also Slow To Load Information, You'll Have To Wait For A Bit To
        See Anything.)
      </h1>
      <h1>----------------------------------------------------</h1>
      <h1>Use This To Change Given Information</h1>
      <div>{ExoSearch()}</div>
      <h1>----------------------------------------------------</h1>
      <h1>Exoplanet Information: </h1>
      <h1>Index Chosen: {activeIdx}</h1>
      <h1>Release Date: {release}</h1>
      <h1>SOL Type: {type}</h1>
      <h1>Planet Name: {name}</h1>
      <h1>Planet Reference Name: {ref}</h1>
      <h1>Host Star Name: {host}</h1>
      <h1>Age: {age1 + age2 + age3}</h1>
      <h1>Discovery Year: {discYear}</h1>
      <h1>Discovery Method: {discovery}</h1>
      <h1>Discovery Facility: {discfac}</h1>
      <h1>Discovery Locale: {discLoc}</h1>
      <h1>Discovery Instrument: {discIn}</h1>
      <h1>Discovery Published Date: {discPub}</h1>
      <h1>Dec: {desc}</h1>
    </div>
  );
}

export default Exoplanet;
