import { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../services/api";
import { useSearchParams } from "react-router-dom";
import DateSearch from "../components/DateSearch";

function getFormattedDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function DayImage() {
  const [params] = useSearchParams();
  let chosen = params.get("date")
    ? params.get("date")
    : getFormattedDate(new Date());
  const [pic, setPic] = useState(null);
  const [video, setVideo] = useState(null);
  const [available, setAvailable] = useState(true);
  const [desc, setDesc] = useState("");
  const [copy, setCopy] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [media, setMedia] = useState("");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPictureOfTheDay(chosen);

      if (!response.url) {
        setAvailable(null);
      }

      if (response.copyright) {
        setCopy(response.copyright);
      } else {
        setCopy("N/A");
      }

      if (response.title) {
        setTitle(response.title);
      } else {
        setTitle("N/A");
      }

      if (response.date) {
        setDate(response.date);
      } else {
        setDate("N/A");
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
        setDesc("N/A");
      }

      if (response.media_type) {
        setMedia(response.media_type);
      } else {
        setMedia("N/A");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Put A Date To Change Information (YYYY-MM-DD format)</h1>
        <div>{DateSearch()}</div>
        <h1>Chosen Date: {chosen}</h1>
        <h1>
          ----------------------------------------------------------------------------
        </h1>
        <h1>Today's Picture Of the Day: </h1>
        <h1>{title}</h1>
        <h1>Copyright: {copy}</h1>
        <h1>Today's Date: {chosen}</h1>
        <h1>Media Type: {media}</h1>
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
        ) : media == "other" ? (
          <div>
            <h1>No Link Available</h1>
          </div>
        ) : (
          <h1>
            No content loaded. Check it out{" "}
            <a href={video} target="_blank">
              here
            </a>
          </h1>
        )}
        <h1>Explanation: {desc}</h1>
      </div>
    </div>
  );
}

export default DayImage;
