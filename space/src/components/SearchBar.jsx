import { useEffect, useState } from "react";
import { Rover } from "../services/api";
import "../css/SearchBar.css";
import SOLSearch from "./SOLBar";
 
function Search(sol = 1000, name = "curiosity") {
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await Rover(sol, name);
      
      if (response.photos.length - 1) {
        setLimit(response.photos.length - 1)
      } else if (response.photos.length > 0) {
        setLimit(response.photos.length - 1)
      }
    }
    fetchData();
  }, [limit]);
  
  

  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="index"
          type="text"
          placeholder={`Get Information By Index ${`(min = 0, max = ${limit})`}`}
          className="search-input"
        />
        <input type="hidden" value={sol} name="sol" />
        <input type="hidden" value={name} name="name" />
      </form>
    </div>
  );
}
 
export default Search;