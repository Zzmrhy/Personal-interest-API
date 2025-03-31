import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";

function DayImage() {
  const [pic, setPic] = useState(null);
  const [video, setVideo] = useState(null);
  const [desc, setDesc] = useState("");
  const [copy, setCopy] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [media, setMedia] = useState("");
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
        setVideo(response.url);
      } else {
        setPic(null);
        setVideo(null);
      }

      if (response.explanation) {
        setDesc(response.explanation);
      } else {
        setDesc("");
      }

      if (response.media_type) {
        setMedia(response.media_type);
      } else {
        setMedia("");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Today's Picture Of the Day: </h1>
      <h1>{title}</h1>
      <h2>Copyright: {copy}</h2>
      <h2>Date: {date}</h2>
      <h2>Media Type: {media}</h2>
      {media == "image" ? (
        <img src={pic} alt="Some Picture" />
      ) : media == "video" && video.indexOf("youtube") > 0 ? (
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>
          No content loaded. Check it out{" "}
          <a href={video} target="_blank">
            here
          </a>{" "}
        </p>
      )}

      <h2>Explanation: {desc}</h2>
    </div>
  );
}

export default DayImage;
