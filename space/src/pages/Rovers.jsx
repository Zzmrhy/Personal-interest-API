import { useState, useEffect } from "react";
import { Rover } from "../services/api";

function Rovers() {
  const [rover, setPic] = useState(null);
  const [earth, setEarth] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await Rover();

      if (response.earth_date) {
        setEarth(response.earth_date);
      } else {
        setEarth("");
      }

      if (response.img_src) {
        setPic(response.img_src);
      } else {
        setPic(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>{earth}</h1>
    </div>
  );
}

export default Rovers;
