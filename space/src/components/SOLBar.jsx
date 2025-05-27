import { Rover } from "../services/api";
import "../css/SearchBar.css";
// import { useEffect, useState } from "react";

function SOLSearch(index = 0) {
  // const [num, setNum] = useState(0);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await Rover(num);

  //     setNum(Rover.num);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <form className="search-form" action={Rover.data}>
        <input
          name="sol"
          type="text"
          placeholder={`Enter a number to change SOL "{num}"`}
          className="search-input"
        />
        <input type="hidden" value={index} name="index" />
      </form>
    </div>
  );
}

export default SOLSearch;
