import { useEffect, useState } from "react";
import { Rover } from "../services/api";
import SOLSearch from "./SOLBar";
import "../css/SearchBar.css";

function Search(sol = 1000) {
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await Rover();

      if (response.photos.length - 1) {
        setLimit(response.photos.length - 1);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="index"
          type="text"
          placeholder={`Get Image By Index ${`(min = 0, max = ${limit})`}`}
          className="search-input"
        />
        <input type="hidden" value={sol} name="sol" />
      </form>
    </div>
  );
}

export default Search;
