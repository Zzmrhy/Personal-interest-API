import { Rover } from "../services/api";
import "../css/SearchBar.css";

function SOLSearch(index = 0) {
  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="sol"
          type="text"
          placeholder="Enter a number to change SOL (note: if you go out of bounds with SOL the page will change to index 0 a few times and will return nothing"
          className="search-input"
        />
        <input type="hidden" value={index} name="index" />
      </form>
    </div>
  );
}

export default SOLSearch;
