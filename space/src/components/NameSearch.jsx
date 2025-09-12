import { useEffect, useState } from "react";
import { Rover } from "../services/api";
import "../css/SearchBar.css";
 
function NameSearch(name = "curiosity", sol = 1000, index = 0) {
    const [named, setNamed] = useState(name)
  /*useEffect(() => {
    async function fetchData() {
      const response = await Rover(0, named);

      if (name == "curiosity") {
        setNamed("curiosity")
      } else if (name == "opportunity") {
        setNamed("opportunity")
      } else if (name == "spirit") {
        setNamed("spirit")
      }
    }
    fetchData();
  }, [name]);
  */
  

  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="name"
          type="text"
          placeholder={`Search For A Rovers Name (curiosity, opportunity, spirit)`}
          className="search-input"
        />
        <input type="hidden" value={sol} name="sol" />
        <input type="hidden" value={index} name="index" />

      </form>
    </div>
  );
}
 
export default NameSearch;