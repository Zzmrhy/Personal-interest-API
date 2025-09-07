import { Exoplanets } from "../services/api";
import "../css/SearchBar.css";
import { useState, useEffect } from "react";

function ExoSearch() {
  const [max, setMax] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await Exoplanets();

      if (response.length - 1) {
        setMax(response.length - 1);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <form className="search-form" action={Exoplanets.data}>
        <input
          name="index"
          type="text"
          placeholder={`Type A Number To Change Exoplanet Information (min = 0, max = ${max})`}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default ExoSearch;
