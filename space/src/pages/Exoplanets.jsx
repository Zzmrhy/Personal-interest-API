import "../css/Exoplanets.css";
import { Exoplanets } from "../services/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ExoSearch from "../components/ExoplanetSearch";
import parse from "html-react-parser";
 
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
  const [age, setAge] = useState("");
  const [discoveryRef, setDiscoveryRef] = useState("");
  const [telescope, setTelescope] = useState("");
  const [orb, setOrb] = useState("");
  const [eqt, setEQT] = useState("");
  const [imp, setImp] = useState("");
  const [rad, setRad] = useState("");
  const [radJ, setRadJ] = useState("");
  const [ratd, setRatd] = useState("");
  const [ratror, setRatror] = useState("");
  const [trand, setTrand] = useState("");
  const [tranmid, setTranmid] = useState("");
  const [letter, setLetter] = useState("");
  const [gaia, setGaia] = useState("");
  const [hip, setHip] = useState("");
  const [mass, setMass] = useState(0);
  const [bmass, setBMass] = useState("");
  const [bmassj, setBMassJ] = useState("");
  const [orbin, setOrbin] = useState("");
  const [dens, setDens] = useState("");
  const [bmasse, setBmasse] = useState("");
  const [masse, setMasse] = useState("");
  const [rvamp, setRvamp] = useState("");
  const [orbl, setOrbl] = useState("");
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
 
      if (response[index].st_agestr) {
        setAge(response[index].st_agestr);
      } else {
        setAge("N/A");
      }
 
      if (response[index].disc_refname) {
        setDiscoveryRef(response[index].disc_refname);
      } else {
        setDiscoveryRef("N/A");
      }
 
      if (response[index].disc_telescope) {
        setTelescope(response[index].disc_telescope);
      } else {
        setTelescope("N/A");
      }
 
      if (response[index].gaia_id) {
        setGaia(response[index].gaia_id);
      } else {
        setGaia("N/A");
      }
 
      if (response[index].pl_eqtstr) {
        setEQT(response[index].pl_eqtstr);
      } else {
        setEQT("N/A");
      }
 
      if (response[index].pl_impparstr) {
        setImp(response[index].pl_impparstr);
      } else {
        setImp("N/A");
      }
 
      if (response[index].pl_letter) {
        setLetter(response[index].pl_letter);
      } else {
        setLetter("N/A");
      }
 
      if (response[index].pl_orbperstr) {
        setOrb(response[index].pl_orbperstr);
      } else {
        setOrb("N/A");
      }
 
      if (response[index].pl_radestr) {
        setRad(response[index].pl_radestr);
      } else {
        setRad("N/A");
      }
 
      if (response[index].pl_radjstr) {
        setRadJ(response[index].pl_radjstr);
      } else {
        setRadJ("N/A");
      }
 
      if (response[index].pl_ratdorstr) {
        setRatd(response[index].pl_ratdorstr);
      } else {
        setRatd("N/A");
      }
 
      if (response[index].pl_ratrorstr) {
        setRatror(response[index].pl_ratrorstr);
      } else {
        setRatror("N/A");
      }
 
      if (response[index].pl_trandurstr) {
        setTrand(response[index].pl_trandurstr);
      } else {
        setTrand("N/A");
      }
 
      if (response[index].pl_tranmidstr) {
        setTranmid(response[index].pl_tranmidstr);
      } else {
        setTranmid("N/A");
      }
 
      if (response[index].hip_name) {
        setHip(response[index].hip_name);
      } else {
        setHip("N/A");
      }
 
      if (response[index].pl_masse) {
        setMass(response[index].pl_masse);
      } else {
        setMass(0);
      }
 
      if (response[index].pl_bmassprov) {
        setBMass(response[index].pl_bmassprov);
      } else {
        setBMass("N/A");
      }
 
      if (response[index].pl_bmassjstr) {
        setBMassJ(response[index].pl_bmassjstr);
      } else {
        setBMassJ("N/A");
      }
 
      if (response[index].pl_orbinclstr) {
        setOrbin(response[index].pl_orbinclstr);
      } else {
        setOrbin("N/A");
      }
 
      if (response[index].pl_bmassester) {
        setBmasse(response[index].pl_bmassester);
      } else {
        setBmasse("N/A");
      }
 
      if (response[index].pl_bmassstr) {
        setMasse(response[index].pl_bmassstr);
      } else {
        setMasse("N/A");
      }
 
      if (response[index].pl_orblperstr) {
        setOrbl(response[index].pl_orblperstr);
      } else {
        setOrbl("N/A");
      }
 
      if (response[index].pl_rvampstr) {
        setRvamp(response[index].pl_rvampstr);
      } else {
        setRvamp("N/A");
      }
 
      if (response[index].pl_densstr) {
        setDens(response[index].pl_densstr);
      } else {
        setDens("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <p id="t_message">
        (Note: To See Any Information, You'll Need To Gain Access To A {""}
        <a href="https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+tran_flag=1+and+default_flag=1+order+by+pl_name&format=json">
          Temporary Server
        </a>
        .
      </p>
      <p id="t_message">
        Page Is Also Slow To Load Information, You'll Have To Wait For A Bit To
        See Anything.)
      </p>
      <h1>----------------------------------------------------</h1>
      <h1 id="head">Use This To Change Given Information</h1>
      <div>{ExoSearch()}</div>
      <h1>----------------------------------------------------</h1>
      <p id="p">Exoplanet Information: </p>
      <p id="p">Index Chosen: {activeIdx}</p>
      <p id="p">Release Date: {release}</p>
      <p id="p">SOL Type: {type}</p>
      <p id="p">Gaia ID: {gaia}</p>
      <p id="p">Planet Name: {name}</p>
      <p id="p">Planet Letter: {letter}</p>
      <p id="p">Planet Mass: {mass}</p>
      <p id="p">Planet Total Mass: {parse(bmassj)}</p>
      <p id="p">Planet Total Mass Provided: {bmass}</p>
      <p id="p">Planet Reference Name: {parse(ref)}</p>
      <p id="p">Host Name: {host}</p>
      <p id="p">Age: {parse(age)}</p>
      <p id="p">Hip Name: {hip}</p>
      <p id="p">Discovery Telescope: {telescope}</p>
      <p id="p">Discovery Year: {discYear}</p>
      <p id="p">Discovery Method: {discovery}</p>
      <p id="p">Discovery Facility: {discfac}</p>
      <p id="p">Discovery Locale: {discLoc}</p>
      <p id="p">Discovery Instrument: {discIn}</p>
      <p id="p">Discovery Published Date: {discPub}</p>
      <p id="p">Discovery Reference Name: {parse(discoveryRef)}</p>
      <p id="p">Dec: {desc}</p>
      <p id="p">Planet EQT: {parse(eqt)}</p>
      <p id="p">Planet Imppar: {parse(imp)}</p>
      <p id="p">Planet Orbit: {parse(orb)}</p>
      <p id="p">Planet Radius: {parse(rad)}</p>
      <p id="p">Planet Radius J: {parse(radJ)}</p>
      <p id="p">Planet Ratdor: {parse(ratd)}</p>
      <p id="p">Planet Ratror: {parse(ratror)}</p>
      <p id="p">Planet Trandur: {parse(trand)}</p>
      <p id="p">Planet Tranmid: {parse(tranmid)}</p>
      <p id="p">Planet BMasse: {parse(masse)}</p>
      <p id="p">Planet Orbin: {parse(orbin)}</p>
      <p id="p">Planet Density: {parse(dens)}</p>
      <p id="p">Planet BMass: {parse(bmasse)}</p>
      <p id="p">Planet Rvamp: {parse(rvamp)}</p>
      <p id="p">Planet Orbl: {parse(orbl)}</p>
    </div>
  );
}
 
export default Exoplanet;