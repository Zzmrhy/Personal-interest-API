import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";

function DayImage() {
  const [pic, setPic] = useState(null);
  const [desc, setDesc] = useState("");
  const [copy, setCopy] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPictureOfTheDay();

      if (response.copyright) {
        setCopy(response.copyright);
      } else {
        setCopy("");
      }

      if (response.title) {
        setTitle(response.title);
      } else {
        setTitle("");
      }

      if (response.date) {
        setDate(response.date);
      } else {
        setDate("");
      }

      if (response.url) {
        setPic(response.url);
      } else {
        setPic(null);
      }

      if (response.explanation) {
        setDesc(response.explanation);
      } else {
        setDesc("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Today's Picture Of the Day: {title}</h1>
      <h2>Copyright: {copy}</h2>
      <h2>Date: {date}</h2>
      {pic ? (
        <img src={pic} alt="Some Picture" />
      ) : (
        <p>No Picture Of The Day Today</p>
      )}
      <h2>Explanation: {desc}</h2>
    </div>
  );
}

export default DayImage;
