import { Gravitational } from "../services/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GravitationalSearch from "../components/GravitationalSearch";

function GravitationalWaves() {
  const [searchIndex] = useSearchParams();
  let index = searchIndex.get("index") ? searchIndex.get("index") : 0;
  const [next, setNext] = useState(null);
  const [num_pages, setNum_Pages] = useState(0);
  const [page_num, setPage_Num] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [doi, setDoi] = useState(null);
  const [gps, setGps] = useState(0);
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [version, setVersion] = useState(0);
  const [detectors, setDetectors] = useState(null);
  const [catalog, setCatalog] = useState("");
  const [detail_url, setDetail_Url] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Gravitational();
      const focusRecord = response[response.length - 1];

      if (response.next) {
        setNext(response.next);
      } else {
        setNext("N/A");
      }

      if (response.results[index].catalog) {
        setCatalog(response.results[index].catalog);
      } else {
        setCatalog("N/A");
      }

      if (response.results[index].detail_url) {
        setDetail_Url(response.results[index].detail_url);
      } else {
        setDetail_Url("N/A");
      }

      if (response.results[index].detectors) {
        setDetectors(response.results[index].detectors);
      } else {
        setDetectors("N/A");
      }

      if (response.results[index].name) {
        setName(response.results[index].name);
      } else {
        setName("N/A");
      }

      if (response.num_pages) {
        setNum_Pages(response.num_pages);
      } else {
        setNum_Pages("N/A");
      }

      if (response.page_number) {
        setPage_Num(response.page_number);
      } else {
        setPage_Num("N/A");
      }

      if (response.results[index].shortName) {
        setShortName(response.results[index].shortName);
      } else {
        setShortName("N/A");
      }

      if (response.results[index].doi) {
        setDoi(response.results[index].doi);
      } else {
        setDoi("N/A");
      }

      if (response.results[index].gps) {
        setGps(response.results[index].gps);
      } else {
        setGps("N/A");
      }

      if (response.results[index].version) {
        setVersion(response.results[index].version)
      } else {
        setVersion("N/A")
      }

      if (response.previous) {
        setPrevious(response.previous);
      } else {
        setPrevious("N/A");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>{GravitationalSearch()}</h1>
      <h1 id="h">
        Next (JSON): <a href={next}> {next}</a>
      </h1>
      <p id="p">Previous Page: {previous}</p>
      <p id="p">Number Of Pages: {num_pages}</p>
      <p id="p">Page Number: {page_num}</p>
      <h1>
        --------------------------------------------------
      </h1>
      <h1 id="h">Catalog: {catalog}</h1>
      <p id="p">Version: {version}</p>
      <p id="p">Name: {name}</p>
      <p id="p">Short Name: {shortName}</p>
      <p id="p">
        Detailed URL (JSON): <a href={detail_url}>{detail_url}</a>
      </p>
      <h1>
        --------------------------------------------------
      </h1>
      <h1 id="header">Detectors:</h1>
      {detectors ? (
        detectors.map((obj, idx) => (
          <p key={idx} id="text">
            {obj}
          </p>
        ))
      ) : (
        <h2 id="failure">No Detector Found</h2>
      )}
      <h1>
        --------------------------------------------------
      </h1>
      <p id="p">Doi Link: <a href={doi}>{doi}</a></p>
      <p id="p">GPS: {gps}</p>
    </div>
  );
}

export default GravitationalWaves;
