import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";

function DayImage() {
  const [pic, setPic] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPictureOfTheDay();

      if (response.url) {
        setPic(response.url);
      } else {
        setPic(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Today's Picture Of the Day:</h1>
      {pic ? (
        <img src={pic} alt="Some Picture" />
      ) : (
        <p>No Picture Of The Day Today</p>
      )}
    </div>
  );
}

export default DayImage;
