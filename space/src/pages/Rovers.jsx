import { useState, useEffect } from "react";
import { Rover } from "../services/api";

function Rovers() {
  const [rover, setPic] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await Rover();

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
      {rover ? (
        <img src={rover} alt="Some Photo" />
      ) : (
        <p>No Picture Available</p>
      )}
    </div>
  );
}

export default Rovers;
