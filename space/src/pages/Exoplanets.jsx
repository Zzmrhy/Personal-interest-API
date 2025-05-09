import { Exoplanets } from "../services/api";
import { useEffect, useState } from "react";

function Exoplanet() {
  const [name, setName] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [desc, setDesc] = useState("");
  const [discfac, setDiscFac] = useState("");
  const [discIn, setDiscIn] = useState("");
  const [discLoc, setDiscLoc] = useState("");
  const [discPub, setDiscPub] = useState("");
  const [host, setHost] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Exoplanets();

      if (response[4400].hostname) {
        setHost(response[4400].hostname);
      } else {
        setHost("N/A");
      }

      if (response[4400].pl_name) {
        setName(response[4400].pl_name);
      } else {
        setName("N/A");
      }

      if (response[4400].discoverymethod) {
        setDiscovery(response[4400].discoverymethod);
      } else {
        setDiscovery("N/A");
      }

      if (response[4400].decstr) {
        setDesc(response[4400].decstr);
      } else {
        setDesc("N/A");
      }

      if (response[4400].disc_facility) {
        setDiscFac(response[4400].disc_facility);
      } else {
        setDiscFac("N/A");
      }

      if (response[4400].disc_instrument) {
        setDiscIn(response[4400].disc_instrument);
      } else {
        setDiscIn("N/A");
      }

      if (response[4400].disc_locale) {
        setDiscLoc(response[4400].disc_locale);
      } else {
        setDiscLoc("N/A");
      }

      if (response[4400].disc_pubdate) {
        setDiscPub(response[4400].disc_pubdate);
      } else {
        setDiscPub("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Planet Name: {name}</h1>
      <h1>Host Name: {host}</h1>
      <h1>Discovery Method: {discovery}</h1>
      <h1>Dec: {desc}</h1>
      <h1>Disc Facility: {discfac}</h1>
      <h1>Disc Locale: {discLoc}</h1>
      <h1>Disc Instrument: {discIn}</h1>
      <h1>Disc Published Date: {discPub}</h1>
    </div>
  );
}

export default Exoplanet;
