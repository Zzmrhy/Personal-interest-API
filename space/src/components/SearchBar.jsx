import { useEffect } from "react";
import { Rover } from "../services/api";
import "../css/SearchBar.css";

function Search() {
  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="index"
          type="text"
          placeholder="Get Image By Index (min = 0, max = 855)"
          className="search-input"
        />
      </form>
    </div>
  );
}

export default Search;
