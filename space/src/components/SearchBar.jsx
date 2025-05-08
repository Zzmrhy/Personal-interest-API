import { useEffect, useState } from "react";
import { Rover } from "../services/api";
import "../css/SearchBar.css";

function Search(sol = 1000) {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await Rover();

      setMax(response.photos.length - 1);
    }
    fetchData();
  }, []);

  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="index"
          type="text"
          placeholder={`Get Image By Index ${`(min = ${min}, max = ${max})`}`}
          className="search-input"
        />
        <input type="hidden" value={sol} name="sol" />
      </form>
    </div>
  );
}

export default Search;
